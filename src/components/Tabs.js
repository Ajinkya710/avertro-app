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
              backgroundColor: activeTab === index ? "#FFFFFF" : "#D7D7D7",
            }}
            className="rounded-t-lg py-3 px-8 font-extrabold"
            // onClick={() => setActiveTab(index)}
          >
            {title}
          </button>
        ))}
      </div>
      <div
        className="rounded-lg rounded-tl-none"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div>
          <TrackObjectives />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
