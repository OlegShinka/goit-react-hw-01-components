import React from 'react';
export const Controls = ({ onIncrement, onDecrement }) => (
  <div className="controls">
    <button type="button" onClick={onIncrement}>
      Increase 1
    </button>
    <button type="button" onClick={onDecrement}>
      Decrease 1
    </button>
  </div>
);
