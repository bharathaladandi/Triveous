import React from 'react';
const ToggleButton = ({onClick, gridView}) => {
  
  return (
    <div>
      <button onClick={onClick}>
        {gridView ? 'Switch to List View' : 'Switch to Grid View'}
      </button>
    </div>
  );
};

export default ToggleButton;
