import React, { useState, useEffect } from "react";
import TrackMeasures from "../Measure/TrackMeasures";
import {
  validateObjectiveData,
  checkEndDate,
} from "../Validate/CheckValidation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ObjectiveForm = ({ objective, onDelete, onChange }) => {
  const { id, name, measures } = objective;

  const [startDateSelected, setStartDateSelected] = useState(
    objective.startDate ? new Date(objective.startDate) : null
  );
  const [endDateSelected, setEndDateSelected] = useState(
    objective.endDate ? new Date(objective.endDate) : null
  );

  const [objectiveNameError, setObjectiveNameError] = useState();
  const [startDateError, setStartDateError] = useState();
  const [endDateError, setEndDateError] = useState();
  const [validateDate, setValidateDate] = useState();
  const [measuresNameError, setMeasuresNameError] = useState();

  const [validationSuccess, setValidationSuccess] = useState();
  const [successNotification, setSuccessNotification] = useState(false);

  const handleStartDateChange = (date) => {
    setStartDateError(false);
    setEndDateError();
    setValidateDate(false);
    setStartDateSelected(date);
    setEndDateSelected("");
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleUpdate = () => {
    const isNameValid = validateObjectiveData("name", name);
    const isStartDateValid = validateObjectiveData(
      "startDate",
      startDateSelected
    );
    const isEndDateValid = validateObjectiveData("endDate", endDateSelected);
    const isMeasuresValid = validateObjectiveData("measures", measures);

    setObjectiveNameError(!isNameValid);
    setStartDateError(!isStartDateValid);
    setEndDateError(!isEndDateValid);
    setMeasuresNameError(!isMeasuresValid);

    if (isNameValid && isStartDateValid && isEndDateValid && isMeasuresValid) {
      const isDateValid = checkEndDate(startDateSelected, endDateSelected);
      setValidateDate(!isDateValid);

      if (!isDateValid) {
        return;
      }

      setValidationSuccess(true);
    }
  };

  const updateStorage = () => {
    console.log("validation passed");
    const updatedObjective = {
      id: objective.id,
      name: name,
      measures: measures,
      startDate: startDateSelected,
      endDate: endDateSelected,
    };

    const updatedObjectiveString = JSON.stringify(updatedObjective);
    localStorage.setItem(`objective_${objective.id}`, updatedObjectiveString);
    console.log(localStorage);
    setSuccessNotification(true);
  };

  useEffect(() => {
    console.log("useEffect called");
    if (validationSuccess) {
      updateStorage();
      setValidationSuccess(false);
    }

    if (successNotification) {
      const timer = setTimeout(() => {
        setSuccessNotification(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successNotification, validationSuccess]);

  return (
    <div
      className="rounded-lg border p-7 mb-5 successAlert"
      style={{ borderColor: "#C4C4C4" }}
    >
      {successNotification && (
        <div
          id="toast-success"
          className="successAlert flex items-center p-1 rounded-lg text-white dark:bg-green-800 mb-2"
          style={{ border: "1px solid green" }}
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-7 h-7 text-green-500 bg-green-100 rounded-lg dark:bg-green-600 dark:text-green-200">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ml-3 text-sm font-normal">
            Item updated successfully.
          </div>
        </div>
      )}
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
              <div className="relative">
                <div className="absolute mt-1.5 ml-2 z-10">
                  <svg
                    fill="#25397D"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    stroke="#25397D"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H2V19z M19,4h-2V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H9V3c0-0.6-0.4-1-1-1S7,2.4,7,3v1H5C3.3,4,2,5.3,2,7v2h20V7C22,5.3,20.7,4,19,4z"></path>
                    </g>
                  </svg>
                </div>
                <DatePicker
                  className={`border p-2 pl-10 w-full 3xl:w-[120%] 4xl:w-[140%] rounded-md text-sm ${
                    startDateError && "border-red-500"
                  }`}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="dd/mm/yyyy"
                  selected={startDateSelected}
                  onChange={handleStartDateChange}
                />
              </div>
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
              <div className="relative">
                <div className="absolute mt-1.5 ml-2 z-10">
                  <svg
                    fill="#25397D"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    stroke="#25397D"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H2V19z M19,4h-2V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H9V3c0-0.6-0.4-1-1-1S7,2.4,7,3v1H5C3.3,4,2,5.3,2,7v2h20V7C22,5.3,20.7,4,19,4z"></path>
                    </g>
                  </svg>
                </div>
                <DatePicker
                  className={`border p-2 pl-10 w-full 3xl:w-[120%] 4xl:w-[140%] rounded-md text-sm ${
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
                  minDate={
                    startDateSelected
                      ? new Date(startDateSelected.getTime() + 86400000)
                      : undefined
                  }
                />
              </div>
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
        measureNameError={measuresNameError}
        setMeasureNameError={setMeasuresNameError}
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
