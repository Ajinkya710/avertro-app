import React, { useState } from 'react';
import AddObjectiveButton from './AddObjectiveButton';
import ObjectiveForm from './ObjectiveForm';

const TrackObjectives = () => {
  const [objectives, setObjectives] = useState([]);

  const handleAddObjective  = () => {
    if (objectives.length < 3) {
      setObjectives([...objectives, { id: objectives.length + 1, name: '', startDate: '', endDate: '' }]);
    }
  };

  return (
    <div className='p-5'>
      {objectives.map(objective => (
        <ObjectiveForm
          key={objective.id}
          objective={objective}
        />
      ))}
      <AddObjectiveButton
        disabled={objectives.length >= 3}
        onClick={handleAddObjective}
      />
    </div>
  );
};

export default TrackObjectives;
