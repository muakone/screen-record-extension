import React from "react";
import LogoTitle from "../assets/logo-title.svg";
import Star from "../assets/Star1.svg";
import Medal from "../assets/medal.svg";
import Verify from "../assets/verify.svg";

const MainFlow = () => {
  return (
    <div>
      <div className="my-16 mx-8">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <img src={LogoTitle} alt="logo" width={"300px"} />
            <div className="flex ml-20">
              <div className="flex gap-x-2 mr-4 text-[#0E75C5] font-medium">
                <img src={Verify} alt="" />
                <p>Helpmeout.com</p>
              </div>
              <div className="flex gap-x-2 text-[#0E75C5] font-medium">
                <img src={Medal} alt="" />
                <p>Featured</p>
              </div>
            </div>
            <div className="my-5 flex ml-20">
              <div className="flex border-black border-r gap-x-2">
                <div className="flex">
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                  <img src={Star} alt="star" />
                </div>
                <p className="text-lg font-normal pr-2.5">252</p>
              </div>
              <p className="px-2.5 border-black border-r text-[#0E75C5] text-lg">
                productivity
              </p>
              <p className="text-[#606060] pl-2.5 text-lg">80,000 users</p>
            </div>
          </div>
          <button className="bg-[#0E75C5] text-white px-4 py-3 h-fit rounded-md">
            Add to chrome
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainFlow;
