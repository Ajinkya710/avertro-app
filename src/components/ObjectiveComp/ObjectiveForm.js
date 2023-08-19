import React, { useState } from "react";
import MeasureTracker from "../MeasureComp/MeasureTracker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ObjectiveForm = ({ objective, onDelete, onChange }) => {
  console.log(objective);
  const { id, name, measures, startDate, endDate } = objective;

  const [startDateSelect, setstartDateSelect] = useState("");
  const [endDateSelect, setEndDateSelect] = useState("");

  const handleStartDateChange = (date) => {
    setstartDateSelect(date);
    setEndDateSelect("");
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleUpdate = () => {
    // onChange(id);
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
              onChange={(e) => onChange(id, "name", e.target.value)}
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
      <MeasureTracker id={id} measures={measures} onChange={onChange}/>
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
