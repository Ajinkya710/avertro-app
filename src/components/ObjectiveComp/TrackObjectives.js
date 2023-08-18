import React, { useState, useEffect } from "react";
import AddObjectiveButton from "./AddObjectiveButton";
import ObjectiveForm from "./ObjectiveForm";

const TrackObjectives = () => {
  const [objectives, setObjectives] = useState([]);

  const handleAddObjective = () => {
    if (objectives.length < 3) {
      setObjectives([...objectives,{ id: objectives.length + 1, name: "", startDate: "", endDate: "" }]);
    }
  };

  const handleDeleteObjective = (id) => {
    const updatedObjectives = objectives.filter((obj) => obj.id !== id);
    const updatedObjectivesWithAdjustedIDs = updatedObjectives.map(
      (obj, index) => ({...obj, id: index + 1})
    );
    setObjectives(updatedObjectivesWithAdjustedIDs);
  };

  useEffect(() => {
    const defaultObjective = {
      id: 1,
      name: "",      
      startDate: "", 
      endDate: ""    
    };

    setObjectives([defaultObjective]);
  }, []);
  
  return (
    <div className="p-5">
      {objectives.map((objective) => (
        <ObjectiveForm
          key={objective.id}
        //   id={index + 1}
          objective={objective}
          onDelete={handleDeleteObjective}
        />
      ))}
      <AddObjectiveButton
        disabled={objectives.length === 3}
        onClick={handleAddObjective}
      />
    </div>
  );
};

export default TrackObjectives;
