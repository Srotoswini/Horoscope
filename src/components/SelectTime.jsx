import React from "react";

export const SelectTime = ({ setSelectedTime }) => {
  return (
    <>
      <h2>Please select the time</h2>

      <div className="grid1">
        {["yesterday", "today", "tomorrow"].map((time) => (
          <button
            className="time"
            key={time}
            onClick={() => setSelectedTime(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </>
  );
};