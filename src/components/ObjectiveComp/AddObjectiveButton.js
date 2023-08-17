import React from "react";

const AddObjectiveButton = ({ disabled, onClick }) => {
  return (
    <div className="flex justify-end">
    <button
      onClick={onClick}
      disabled={disabled}
      className={`text-white px-5 py-2 m-5 rounded ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      style={{ backgroundColor: "#25397D" }}
    >
      <div className="flex items-center">
        <svg
          fill="#ffffff"
          width="28px"
          height="28px"
          viewBox="-2.04 -2.04 24.48 24.48"
          xmlns="http://www.w3.org/2000/svg"
          class="cf-icon-svg"
          stroke="#000000"
          stroke-width="0.00020400000000000003"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="0.040799999999999996"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M16.416 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.916 7.917zm-2.958.01a.792.792 0 0 0-.792-.792H9.284V6.12a.792.792 0 1 0-1.583 0V9.5H4.32a.792.792 0 0 0 0 1.584H7.7v3.382a.792.792 0 0 0 1.583 0v-3.382h3.382a.792.792 0 0 0 .792-.791z"></path>
          </g>
        </svg>
        Add Objective
      </div>
    </button>
    </div>
  );
};

export default AddObjectiveButton;
