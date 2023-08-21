import React, { useState, useEffect } from "react";
import AddObjectiveButton from "./AddObjectiveButton";
import ObjectiveForm from "./ObjectiveForm";

const TrackObjectives = () => {
  const [objectives, setObjectives] = useState([]);
  const [deleteObj, setDeleteObj] = useState(false);

  const handleAddObjective = () => {
    if (objectives.length < 3) {
      setObjectives([
        ...objectives,
        {
          id: objectives.length + 1,
          name: "",
          measures: [""],
          startDate: "",
          endDate: "",
        },
      ]);
    }
  };

  const handleDeleteObjective = (id) => {
    const updatedObjectives = objectives.filter((obj) => obj.id !== id)
    console.log(updatedObjectives)
    updatedObjectives.forEach((obj, idx) => {
      console.log("insid each")
      const index = idx + 1;
      obj = ({id: index, ...obj})
      console.log(obj)
    })
    setDeleteObj(!deleteObj)
    setObjectives(updatedObjectives);

    const storedObjectives = [];
    for (let id = 1; ; id++) {
      const storedObjectiveString = localStorage.getItem(`objective_${id}`);

      if (!storedObjectiveString) {
        break;
      }
      const storedObjective = JSON.parse(storedObjectiveString);
      storedObjectives.push(storedObjective);
    }
    const updateStorageObjectives = storedObjectives.filter((obj) => obj.id !== id);
    localStorage.removeItem(`objective_${id}`);
    updateStorageObjectives.forEach((obj, index) => {
        const updatedId = index + 1;
        const objString = JSON.stringify({ ...obj, id: updatedId });
        localStorage.setItem(`objective_${updatedId}`, objString);
    });
    localStorage.removeItem(`objective_${objectives.length}`);

  };

  const handleUpdateObjective = (id, field, value) => {
    const updatedObjectives = objectives.map((obj) => {
      if (obj.id === id) {
        if (field === "measures") {
          return { ...obj, measures: value };
        } else {
          return { ...obj, [field]: value };
        }
      }
      return obj;
    });
    setObjectives(updatedObjectives);
  };

  useEffect(() => {
    console.log("useEffect called");
    const storedObjectives = [];
    for (let id = 1; ; id++) {
      const storedObjectiveString = localStorage.getItem(`objective_${id}`);

      if (!storedObjectiveString) {
        break;
      }
      const storedObjective = JSON.parse(storedObjectiveString);
      storedObjectives.push(storedObjective);
    }
    if (storedObjectives.length > 0) {
      setObjectives(storedObjectives);
    }
  }, [deleteObj]);

  return (
    <div className="p-5">
      {objectives.map((objective) => (
        <ObjectiveForm
          key={objective.id}
          objective={objective}
          onDelete={handleDeleteObjective}
          onChange={handleUpdateObjective}
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