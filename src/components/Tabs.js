import React, { useState } from "react";
import TrackObjectives from "./ObjectiveComp/TrackObjectives";

const Tabs = () => {
  // Using default activeTab as 1 (Strategic Business Objectives)
  // Mission & Vision tab had no content, hence didn't implement onClick
  const [activeTab, setActiveTab] = useState(1);

  const tabTitles = ["Mission & Vision", "Strategic Business Objectives"];

  return (
    <div className="mt-9">
      <div className="flex">
        {tabTitles.map((title, index) => (
          <button
            key={index}
            style={{
              color: "var(--primary-text-color)",
              backgroundColor: activeTab === index ? "var(--primary-white-color)" : "var(--gray-color)",
            }}
            className="rounded-t-lg py-3 px-8 font-bold sm:text-lg text-base text-var(--primary-text-color)"
            // onClick={() => setActiveTab(index)}
          >
            {title}
          </button>
        ))}
      </div>
      <div
        className="rounded-lg rounded-tl-none"
        style={{ backgroundColor: "var(--primary-white-color)" }}
      >
        <div>
          <TrackObjectives />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
