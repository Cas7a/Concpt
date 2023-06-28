import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#1e1e1e] text-white">
      <div className="flex flex-col items-center pt-10 pb-10 ml-4 mr-4">
        <img
          className="max-w-[80%] sm:max-w-[60%] nl:max-w-[40%] 2xl:max-w-[25%] 3xl:max-w-[15%]"
          src="https://cdn.shopify.com/s/files/1/0496/4325/8009/articles/virgil-abloh-et-les-sneakers-une-histoire-damour-et-de-succes-153708.jpg?v=1674752371"
          alt="About Us image"
        />
        <div className="leading-6 text-[16px] max-w-[80%] sm:max-w-[60%] nl:max-w-[40%] 2xl:max-w-[25%] 3xl:max-w-[15%]">
          <h1 className=" text-[22px] font-medium pb-2 pt-4  text-center">
            "Concpt"
          </h1>
          <p className="text-center sm:text-justify lg:text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, facilisi eu
            et maecenas quis luctus, turpis libero tempor orci pulvinar
            habitasse. Faucibus eros at et viverra massa tellus mi nulla eget
            tempus nibh, quis euismod curae ut arcu vivamus cursus mauris id
            parturient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
