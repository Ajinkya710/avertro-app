import React from "react";

const MeasureForm = ({ index, measure, onDeleteMeasure, onMeasureChange, measuresNameError }) => {
  return (
    <div className="flex space-x-2 mb-2">
      {measuresNameError && (
        <span
          className="text-sm"
          style={{ color: "var(--danger-button-color)" }}
        >
          Please enter measure name
        </span>
      )}
      <input
        type="text"
        value={measure}
        onChange={(e) => onMeasureChange(e.target.value)}
        className="border p-2 rounded-md w-full text-sm"
      />
      {index >= 0 && (
        <button onClick={() => onDeleteMeasure(index)}>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke=""
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z"
                fill="#E03345"
              ></path>{" "}
            </g>
          </svg>
        </button>
      )}
    </div>
  );
};

export default MeasureForm;
