import React, { useState } from "react";
// import ObjectiveTracker from "./ObjectiveComp/ObjectiveTracker";
import ObjectiveForm from "./ObjectiveComp/ObjectiveForm";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabTitles = ["Mission & Vision", "Strategic Business Objectives"];
  const tabContents = ["Tab 1 content", "Tab 2 content"];

  return (
    <div className="mt-9">
      <div className="flex">
        {tabTitles.map((title, index) => (
          <button
            key={index}
            style={{ color: "var(--primary-text-color)", backgroundColor: activeTab === index ? "#FFFFFF" : "#D7D7D7"}}
            className="rounded-t-lg py-3 px-8 font-bold"
            // onClick={() => setActiveTab(index)}
          >
            {title}
          </button>
        ))}
      </div>
      <div
        className="border rounded-lg rounded-tl-none"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        {tabContents.map((content, index) => (
          <div key={index} className={`${activeTab !== index && "hidden"}`}>
              <ObjectiveForm/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
