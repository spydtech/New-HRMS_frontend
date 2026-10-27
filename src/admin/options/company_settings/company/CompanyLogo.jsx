import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Cropper from "react-easy-crop";
import { FaPlusCircle } from "react-icons/fa";
import { format } from "date-fns";

const getCroppedImg = (imageSrc, pixelCrop) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const image = new Image();

  return new Promise((resolve, reject) => {
    image.onload = () => {
      const { width, height } = image;
      const cropX = pixelCrop.x;
      const cropY = pixelCrop.y;
      const cropWidth = pixelCrop.width;
      const cropHeight = pixelCrop.height;

      canvas.width = cropWidth;
      canvas.height = cropHeight;

      ctx.drawImage(
        image,
        cropX,
        cropY,
        cropWidth,
        cropHeight,
        0,
        0,
        cropWidth,
        cropHeight
      );

      canvas.toBlob((blob) => {
        if (blob) {
          const croppedImageUrl = URL.createObjectURL(blob);
          resolve(croppedImageUrl);
        } else {
          reject(new Error("Failed to crop image"));
        }
      }, "image/jpeg");
    };

    image.src = imageSrc;
  });
};

const CompanyLogo = ({ isModalOpen, setIsModalOpen, logActivity }) => {
  const [logos, setLogos] = useState([]);
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isCropping, setIsCropping] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setIsCropping(true); // Show cropping modal
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleCropComplete = async (croppedArea, croppedAreaPixels) => {
    const croppedImageUrl = await getCroppedImg(image, croppedAreaPixels);
    setCroppedImage(croppedImageUrl);
  };

  const handleLogoSubmit = () => {
    if (croppedImage) {
      const newLogo = {
        id: uuidv4(),
        logoUrl: croppedImage,
        status: "Active",
      };

      setLogos([...logos, newLogo]);
      logActivity("Added a new company logo.");
      setImage(null);
      setCroppedImage(null);
      setIsCropping(false);
      setIsModalOpen(false); // Close the modal after submission
    }
  };

  const currentDateTime = format(new Date(), "dd/MM/yyyy | hh:mm:ss a");

  return (
    <div className="flex flex-col flex-grow p-4 ">
      {/* Header and Add Logo Button */}
      <div className="flex items-center mb-4 justify-center">
        <h1 className="text-lg text-[#E65F2B] mr-2">Company Logo</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#E65F2B]  text-white px-6 py-3 rounded-md hover:from-[#d4551a] hover:to-[#ffc107]"
        >
          Add Logo
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex items-center justify-center p-2 rounded-md shadow-sm"
            style={{ width: "300px", height: "300px" }}
          >
            <img
              src={logo.logoUrl}
              alt="Company Logo"
              className="object-contain"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>

      {/* Modal for cropping and adding new company logo */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md ">
            <h2 className="text-2xl mb-4 text-[#E65F2B]">
              Add New Company Logo
            </h2>
            <div className="mb-4 flex items-center gap-4">
              <label className="text-lg font-medium text-[#E65F2B] w-40">
                Upload Logo
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="border-[#E65F2B] border rounded-md shadow-sm h-full px-2 flex-1 file:bg-[#E65F2B] file:text-white file:border-[#E65F2B]"
              />
            </div>

            {/* Cropping Modal */}
            {isCropping && image && (
              <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                  <h3 className="text-xl mb-4 text-[#E65F2B]">
                    Crop Your Logo
                  </h3>
                  <div
                    className="relative"
                    style={{ height: "400px", width: "100%" }}
                  >
                    <Cropper
                      image={image}
                      crop={crop}
                      zoom={zoom}
                      aspect={1}
                      onCropChange={setCrop}
                      onZoomChange={setZoom}
                      onCropComplete={handleCropComplete}
                    />
                  </div>
                  <div className="flex justify-end gap-4 mt-4">
                    <button
                      onClick={() => {
                        setImage(null);
                        setCroppedImage(null);
                        setIsCropping(false);
                      }}
                      className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleLogoSubmit}
                      className="bg-[#E65F2B] text-white px-4 py-2 rounded-md hover:bg-[#d4551a]"
                    >
                      Add Logo
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Pay Slip Header - Conditional Rendering */}
      {logos.length > 0 && (
        <div className="mt-8 p-4 bg-white shadow-md rounded-lg flex items-center justify-between overflow-x-auto">
          {/* Left Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={logos[0].logoUrl}
              alt="Company Logo"
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Middle Content */}
          <div className="flex flex-col items-center mx-4 min-w-max">
            <h1 className="text-xl font-semibold text-[#E65F2B] whitespace-nowrap">
              Pay Slip
            </h1>
            <h2 className="text-lg text-[#E65F2B] whitespace-nowrap">
              SpyD Technology
            </h2>
          </div>

          {/* Right End Date and Time */}
          <div className="text-gray-600 whitespace-nowrap flex-shrink-0">
            {currentDateTime}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyLogo;
