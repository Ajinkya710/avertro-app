import React from 'react';

const AddObjectiveButton = ({ disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-blue-500 text-white px-4 py-2 rounded ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      Add Objective
    </button>
  );
};

export default AddObjectiveButton;