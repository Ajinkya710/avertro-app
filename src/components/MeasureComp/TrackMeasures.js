import React, { useState } from "react";
import AddMeasure from "./AddMeasure";
import MeasureForm from "./MeasureForm";

const TrackMeasures = ({ id, measures, onChange }) => {
  const [measureError, setMeasureError] = useState(false);

  const handleAddMeasure = () => {
    setMeasureError(false);
    if (measures.length < 3) {
      onChange(id, "measures", [...measures, ""]);
    }
  };

  const handleDeleteMeasure = (index) => {
    if (measures.length > 1) {
      const updatedMeasures = measures.filter((_, i) => i !== index);
      onChange(id, "measures", updatedMeasures);
    } else {
      setMeasureError(true);
    }
  };

  const handleMeasureChange = (index, value) => {
    setMeasureError(false);
    const updatedMeasures = [...measures];
    updatedMeasures[index] = value;
    onChange(id, "measures", updatedMeasures);
  };

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-16 mt-7">
        <label
          htmlFor=""
          className="font-bold sm:text-lg text-base"
          style={{ color: "var(--primary-text-color)" }}
        >
          Key Measures
        </label>
        <AddMeasure
          onClick={handleAddMeasure}
          disabled={measures.length === 3}
        />
      </div>
      {measureError ? (
        <span
          className="text-sm"
          style={{ color: "var(--danger-button-color)" }}
        >
          Atleast 1 key measure is required
        </span>
      ) : 
      // measureNameError ? (
      //   <span
      //     className="text-sm"
      //     style={{ color: "var(--danger-button-color)" }}
      //   >
      //     Enter measure name.
      //   </span>
      // ) : 
      null}

      <div className="lg:w-1/2 mt-3">
        {measures.map((measure, index) => (
          <MeasureForm
            key={index}
            index={index}
            measure={measure}
            onDeleteMeasure={handleDeleteMeasure}
            onMeasureChange={(value) => handleMeasureChange(index, value)}
            measureError={measureError}
          />
        ))}
      </div>
    </>
  );
};

export default TrackMeasures;
