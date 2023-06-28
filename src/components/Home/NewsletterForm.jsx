import React from "react";

const handleForm = (e) => {
  e.preventDefault();
};

const NewsletterForm = () => {
  return (
    <div className="bg-[#f6f8fb] h-auto w-auto py-24 lg:py-32 xl:py-48">
      <div className="px-5">
        <h1 className="text-[40px] font-semibold mb-8 text-[#1e1e1e] text-center md:text-[50px] xl:text-[55px]">
          GET ACCESS TO EXCLUSIVE DROPS
        </h1>
        <form
          className="max-w-[280px] mx-auto text-center md:max-w-[630px]"
          action="submit"
        >
          <div className="md:flex ">
            <input
              className="p-2 text-lg mb-5 w-[90%] md:mb-0 "
              type="email"
              placeholder="Email"
            />
            <button className="btn-newsletter" onClick={handleForm}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
