import React from "react";
import SocialApps from "./SocialApps";
import SocialStatistics from "./SocialStatistics";
import SocialMedia from "./SocialMedia";
import FacebookPosts from "./FacebookPosts";
import TwitterPosts from "./TwitterPosts";

const HrSocial = () => {
  return (
    <div className="p-4 mt-4">
      <h1 className="text-[#0098F1] text-sm lg:text-lg font-bold mb-4">
        <span>Hr / Hr social</span>
      </h1>
      <SocialApps />
      <SocialStatistics />
      <SocialMedia />
      <div className="flex flex-col gap-y-3 md:flex-row md:justify-between md:gap-x-5">
        <FacebookPosts />
        <TwitterPosts />
      </div>
    </div>
  );
};

export default HrSocial;
