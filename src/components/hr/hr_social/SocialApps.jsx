import React from "react";

const socialApps = [
  {
    image: "src/assets/hr/hrSocial/socialMedia/linkedin.png",
    followers: "Followers 2510",
  },
  {
    image: "src/assets/hr/hrSocial/socialMedia/instagram.png",
    followers: "Followers 2510",
  },
  {
    image: "src/assets/hr/hrSocial/socialMedia/twitter.png",
    followers: "Followers 2510",
  },
  {
    image: "src/assets/hr/hrSocial/socialMedia/facebook.png",
    followers: "Followers 2519",
  },
  {
    image: "src/assets/hr/hrSocial/socialMedia/google.png",
    followers: "Followers 2519",
  },
  {
    image: "src/assets/hr/hrSocial/socialMedia/youtube.png",
    followers: "Followers 2519",
  },
];

const SocialApps = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 my-5 pl-2 ">
      {socialApps.map((app) => (
        <div className="flex flex-col gap-1 items-center bg-white rounded-lg p-2 py-3 ">
          <img src={app.image} className="h-[20px]" />
          <p className="text-[10px] lg:text-xs">{app.followers}</p>
        </div>
      ))}
    </div>
  );
};

export default SocialApps;
