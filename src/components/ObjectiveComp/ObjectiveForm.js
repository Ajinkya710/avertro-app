import React from "react";

const ObjectiveForm = () => {
  return (
    <div className="m-5 rounded-lg border p-5" style={{borderColor:'#C4C4C4'}}>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-y-5">
        <div className="col-span-2 md:col-span-1">
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="objective"
              className="font-extrabold"
              style={{ color: "var(--primary-text-color)" }}
            >
              Objective
            </label>
            <input
              id="objective"
              type="text"
              placeholder="Objective Name"
              className="border p-2 mb-2 rounded"
            />
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="grid grid-cols-2 gap-10">
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
                className="border p-2 rounded"
              />
            </div>
            <div className="flex flex-col col-span-1 space-y-2">
              <label
                htmlFor=""
                className="font-extrabold"
                style={{ color: "var(--primary-text-color)" }}
              >
                End Date
              </label>
              <input
                type="date"
                placeholder="End Date"
                className="border p-2 rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-5 space-x-10 justify-end">
        <button
          className="px-5 py-2 rounded"
          style={{ color: "#E03345", border: "1px solid #E03345" }}
        >
          Delete
        </button>
        <button
          className=" text-white px-5 py-2 rounded"
          style={{ backgroundColor: "#25397D" }}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default ObjectiveForm;
