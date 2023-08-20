import React from "react";
import Tabs from "../components/Tabs/Tabs";

const Page = () => {
  return (
    <div className="mt-28 sm:w-[85%] mx-auto mb-10 ">
      <h3
        className="my-8 var(--primary-text-color)"
        style={{ color: "var(--primary-text-color)", fontFamily:'Nunito' }}
      >
        Set Security Strategy
      </h3>
      <div className="border-b var(--gray-color)"></div>
      <Tabs />
    </div>
  );
};

export default Page;
