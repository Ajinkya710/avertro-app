import React, { useState } from "react";
import TrackMeasures from "../MeasureComp/TrackMeasures";
import {
  validateObjectiveData,
  checkEndDate,
} from "../ValidateComp/CheckValidation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ObjectiveForm = ({ objective, onDelete, onChange }) => {
  console.log(objective);
  const { id, name, measures } = objective;
  const [startDateSelected, setstartDateSelected] = useState("");
  const [endDateSelected, setEndDateSelected] = useState("");

  const [objectiveNameError, setObjectiveNameError] = useState(false);
  const [startDateError, setStartDateError] = useState();
  const [endDateError, setEndDateError] = useState();
  const [validateDate, setValidateDate] = useState(false);
  const [measuresNameError, setMeasuresNameError] = useState(false);

  const handleStartDateChange = (date) => {
    setStartDateError(false);
    setEndDateError();
    setValidateDate(false);
    setstartDateSelected(date);
    setEndDateSelected("");
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleUpdate = () => {
    setObjectiveNameError(!validateObjectiveData("name", name));
    setStartDateError(!validateObjectiveData("startDate", startDateSelected));
    setEndDateError(!validateObjectiveData("endDate", endDateSelected));
    if (startDateError === false && endDateError === false) {
      setValidateDate(!checkEndDate(startDateSelected, endDateSelected));
    }
    setMeasuresNameError(!validateObjectiveData("measures", measures));
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
              className={`border p-2 mb-2 rounded-md text-sm ${
                objectiveNameError && "border-red-500"
              }`}
              value={name}
              onChange={(e) => {
                setObjectiveNameError(false);
                onChange(id, "name", e.target.value);
              }}
            />
          </div>
          {objectiveNameError && (
            <span
              className="text-xs"
              style={{ color: "var(--danger-button-color)" }}
            >
              Objective name cannot be empty.
            </span>
          )}
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
                className={`border rounded-md w-full text-sm ${
                  startDateError && "border-red-500"
                }`}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                selected={startDateSelected}
                onChange={handleStartDateChange}
              />
              {startDateError && (
                <span
                  className="text-xs"
                  style={{ color: "var(--danger-button-color)" }}
                >
                  Start date is required.
                </span>
              )}
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
                className={`border rounded-md w-full text-sm ${
                  (endDateError || validateDate) && "border-red-500"
                }`}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                selected={endDateSelected}
                onChange={(date) => {
                  setEndDateError(false);
                  setValidateDate(false);
                  setEndDateSelected(date);
                }}
                minDate={startDateSelected ? new Date(startDateSelected.getTime() + 86400000) : undefined}
              />
              {endDateError && (
                <span
                  className="text-xs"
                  style={{ color: "var(--danger-button-color)" }}
                >
                  End date is required.
                </span>
              )}
            </div>
          </div>
          {validateDate && (
            <span
              className="text-xs"
              style={{ color: "var(--danger-button-color)" }}
            >
              End date should be after the Start date.
            </span>
          )}
        </div>
      </div>
      <TrackMeasures
        id={id}
        measures={measures}
        onChange={onChange}
      />
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
