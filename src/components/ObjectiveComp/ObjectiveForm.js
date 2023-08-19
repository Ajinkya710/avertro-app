import React, { useState } from "react";
import Measure from "../MeasureComp/Measure";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ObjectiveForm = ({ objective, onDelete, onUpdate }) => {
  console.log(objective);
  const { id, name, measures, startDate, endDate } = objective;

  const [startDateSelect, setstartDateSelect] = useState("");
  const [endDateSelect, setEndDateSelect] = useState("");

  const [measureError, setMeasureError] = useState(false);

  const handleStartDateChange = (date) => {
    setstartDateSelect(date);
    setEndDateSelect("");
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleUpdate = () => {
    onUpdate(id);
  };

  const handleAddMeasure = () => {
    setMeasureError(false);
    if (measures.length < 3) {
      onUpdate(id, "measures", [...measures, ""]);
    }
  };

  const handleDeleteMeasure = (index) => {
    if (measures.length > 1) {
      const updatedMeasures = measures.filter((_, i) => i !== index);
      onUpdate(id, "measures", updatedMeasures);
    } else {
      setMeasureError(true);
    }
  };

  const handleMeasureChange = (index, value) => {
    const updatedMeasures = [...measures];
    updatedMeasures[index] = value;
    onUpdate(id, "measures", updatedMeasures);
  };

  return (
    <div
      className="rounded-lg border p-7 mb-5"
      style={{ borderColor: "#C4C4C4" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 space-y-5 md:space-y-0">
        <div className="col-span-2 md:col-span-1">
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="objective"
              className="font-bold sm:text-lg text-base "
              style={{ color: "var(--primary-text-color)" }}
            >
              {`Objective ${id}`}
            </label>
            <input
              id="objective"
              type="text"
              placeholder="Objective Name"
              className="border p-2 mb-2 rounded-md text-sm"
              value={name}
              onChange={(e) => onUpdate(id, "name", e.target.value)}
            />
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col col-span-1 space-y-2">
              <label
                htmlFor=""
                className="font-bold sm:text-lg text-base"
                style={{ color: "var(--primary-text-color)" }}
              >
                Start Date
              </label>
              <DatePicker
                showIcon
                className="border rounded-md w-full text-sm"
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                selected={startDateSelect}
                onChange={handleStartDateChange}
              />
            </div>
            <div className="flex flex-col col-span-1 space-y-2">
              <label
                htmlFor=""
                className="font-bold sm:text-lg text-base"
                style={{ color: "var(--primary-text-color)" }}
              >
                End Date
              </label>
              <DatePicker
                showIcon
                className="border rounded-md w-full text-sm"
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                selected={endDateSelect}
                onChange={(date) => setEndDateSelect(date)}
                minDate={startDateSelect}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-16 mt-7">
        <label
          htmlFor=""
          className="font-bold sm:text-lg text-base"
          style={{ color: "var(--primary-text-color)" }}
        >
          Key Measures
        </label>
          <button onClick={handleAddMeasure} style={{color:'var(--update-button-color)'}}>
            <div className={`flex items-center justify-end md:text-sm text-xs gap-2 ${measures.length === 3 ? "opacity-50 cursor-not-allowed" : ""}`} >
              Add additional key measure
              <svg
                className="h-6 w-6"
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
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z"
                    fill="#25397D"
                  ></path>
                </g>
              </svg>
            </div>
          </button>
      </div>
      {measureError && (
        <span
          className="text-sm"
          style={{ color: "var(--danger-button-color)" }}
        >
          Atleast 1 key measure is required
        </span>
      )}
      <div className="lg:w-1/2 mt-3">
        {measures.map((measure, index) => (
          <Measure
            key={index}
            index={index}
            measure={measure}
            onDeleteMeasure={handleDeleteMeasure}
            onMeasureChange={(value) => handleMeasureChange(index, value)}
          />
        ))}
      </div>
      <div className="sm:flex grid grid-cols-1 mt-4 sm:space-x-6 sm:space-y-0 space-y-3 justify-end ">
        <div className="flex flex-col col-span-1">
          <button
            className="px-5 py-2 rounded-md text-sm "
            style={{
              color: "var(--danger-button-color)",
              border: "1px solid var(--danger-button-color)",
            }}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
        <div className="flex flex-col col-span-1">
          <button
            className=" text-white px-5 py-2 rounded-md text-sm"
            style={{
              backgroundColor: "var(--update-button-color)",
              border: "1px solid var(--update-button-color)",
            }}
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ObjectiveForm;
