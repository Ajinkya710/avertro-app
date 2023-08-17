import React, { useState } from "react";

const ObjectiveForm = ({ objective, onDelete, onUpdate }) => {
  console.log(objective);
  const { id, name, measures, startDate, endDate } = objective;

  const [startDateSelect, setstartDateSelect] = useState("");
  const [endDateSelect, setEndDateSelect] = useState("");
  const handleStartDateChange = (event) => {
    setstartDateSelect(event.target.value);
    setEndDateSelect("");
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleUpdate = () => {
    onUpdate(id);
  };


  return (
    <div
      className="rounded-lg border p-5 mb-5"
      style={{ borderColor: "#C4C4C4" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-y-5 ">
        <div className="col-span-2 md:col-span-1">
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="objective"
              className="font-extrabold"
              style={{ color: "var(--primary-text-color)" }}
            >
              {`Objective ${id}`}
            </label>
            <input
              id="objective"
              type="text"
              placeholder="Objective Name"
              className="border p-2 mb-2 rounded text-sm"
              value={name}
              onChange={(e) => onUpdate(id, 'name', e.target.value)}
            />
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col col-span-1 space-y-2">
              <label
                htmlFor=""
                className="font-extrabold"
                style={{ color: "var(--primary-text-color)" }}
              >
                Start Date
              </label>
              <input
                type="date"
                placeholder="Start Date"
                className="border p-2 rounded text-sm"
                value={startDateSelect}
                onChange={handleStartDateChange}
              />
            </div>
            <div className="flex flex-col col-span-1 space-y-2">
              <label
                htmlFor=""
                className="font-extrabold "
                style={{ color: "var(--primary-text-color)" }}
              >
                End Date
              </label>
              <input
                type="date"
                placeholder="End Date"
                className=" border p-2 text-sm "
                value={endDateSelect}
                onChange={(e) => setEndDateSelect(e.target.value)}
                min={startDateSelect}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-5 space-x-10 justify-end">
        <button
          className="px-5 py-2 rounded text-sm"
          style={{ color: "#E03345", border: "1px solid #E03345" }}
          onClick={handleDelete}
        >
          Delete
        </button>
        <button
          className=" text-white px-5 py-2 rounded text-sm"
          style={{ backgroundColor: "#25397D" }}
          onClick={handleUpdate} 
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default ObjectiveForm;
