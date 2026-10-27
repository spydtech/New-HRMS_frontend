import React, { useState, useEffect } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const EmployeeFeedback = ({ logActivity }) => {
    const [isChecked, setIsChecked] = useState(true);
    const [initialCheckedState, setInitialCheckedState] = useState(true);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        const savedState = localStorage.getItem('isChecked');
        if (savedState !== null) {
            setIsChecked(JSON.parse(savedState));
            setInitialCheckedState(JSON.parse(savedState));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('isChecked', JSON.stringify(isChecked));
    }, [isChecked]);

    const handleSave = () => {
        setIsConfirmModalOpen(true);
    };

    const handleConfirmSave = () => {
        setIsConfirmModalOpen(false);

        if (isChecked !== initialCheckedState) {
            const message = isChecked ? 'Employee feedback turned on' : 'Employee feedback turned off';
            logActivity(message);
        }

        setSuccessMessage('Successfully updated employee feedback');
        setShowSuccessMessage(true);

        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);

        setInitialCheckedState(isChecked); // Update the initial state to current state after saving
        setIsEditMode(false);
    };

    const handleCancelSave = () => {
        setIsChecked(initialCheckedState); // Revert to initial state if cancelled
        setIsEditMode(false);
    };

    const handleToggleChange = () => {
        if (isEditMode) {
            setIsChecked(prev => !prev);
        }
    };

    const handleEditButtonClick = () => {
        setIsEditMode(true);
    };

    return (
        <div className="flex flex-col items-center p-4 sm:p-2 space-y-6 sm:space-y-4 relative">
            <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2">
                    <h2 className="text-lg sm:text-base text-[#E65F2B]">Employee Feedback</h2>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={isChecked}
                            onChange={handleToggleChange}
                            disabled={!isEditMode}
                        />
                        <div
                            className={`relative flex items-center ${isChecked ? 'bg-gradient-to-r from-[#E65F2B] to-[#FFC252]' : 'bg-black'} transition-colors duration-300`}
                            style={{ width: '60px', height: '25px', borderRadius: '50px' }}
                        >
                            <div
                                className={`absolute bg-white rounded-full transition-transform duration-300`}
                                style={{ width: '25px', height: '25px', top: '0', left: isChecked ? '35px' : '0' }}
                            />
                        </div>
                    </label>
                </div>
            </div>

            <div className=" p-5 flex flex-row">
                {!isEditMode ? (
                    <button
                        onClick={handleEditButtonClick}
                        className="bg-[#E65F2B]  text-white h-[40px] w-[120px] rounded-md"
                    >
                        Edit
                    </button>
                ) : (
                    <>
                        <button
                            onClick={handleCancelSave}
                            className="bg-gray-300 text-black h-[40px] w-[120px] rounded-md hover:bg-gray-400 mr-1"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="bg-gradient-to-r from-[#E65F2B] to-[#FFC252] text-white h-[40px] w-[120px] rounded-md hover:from-[#d4551a] hover:to-[#ffc107]"
                        >
                            Save
                        </button>
                    </>
                )}
            </div>

            {isConfirmModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50" aria-labelledby="confirm-modal-title">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <h1 id="confirm-modal-title" className="text-[#E65F2B] text-xl font-bold mb-2">Confirm Save</h1>
                        <p className="mb-4 text-[#E65F2B]">Are you sure you want to save the Employee Feedback Settings?</p>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={handleConfirmSave}
                                className="bg-gradient-to-r from-[#E65F2B] to-[#FFC252] text-white h-[40px] w-[120px] rounded-md hover:from-[#d4551a] hover:to-[#ffc107]"
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => setIsConfirmModalOpen(false)}
                                className="bg-gray-300 text-black h-[40px] w-[120px] rounded-md hover:bg-gray-400"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showSuccessMessage && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div
                        className="p-8 rounded-lg text-center text-white"
                        style={{ background: 'linear-gradient(180deg, #E65F2B 0%, #FFC252 100%)' }}
                    >
                        <h2 className="text-3xl mb-4">
                            <IoMdCheckmarkCircleOutline className="inline-block text-6xl" />
                        </h2>
                        <p>{successMessage}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeeFeedback;
