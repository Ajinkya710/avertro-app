import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabTitles = ['Mission & Vision', 'Strategic Business Objectives'];
  const tabContents = ['Tab 1 content', 'Tab 2 content'];

  return (
    <div className="mt-8">
      <div className="flex">
        {tabTitles.map((title, index) => (
          <button
            key={index}
            style={{color:'var(--primary-text-color)'}}
            className={` rounded-t-lg py-2 px-4 ${
              activeTab === index ? 'bg-gray-200' : 'bg-slate-400'
            }`}
            // onClick={() => setActiveTab(index)}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="p-4 border rounded-lg rounded-tl-none" style={{backgroundColor:'#FFFFFF'}}>
        {tabContents.map((content, index) => (
          <div
            key={index}
            className={`${
              activeTab !== index && 'hidden'
            }`}
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
