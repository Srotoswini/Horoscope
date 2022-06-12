import React, { useEffect, useState } from "react";
import { getSigns } from "../services/api";

export const SelectSign = ({ setSelectedSign }) => {
  const [signs, setSigns] = useState([]);

  useEffect(() => {
    getSigns().then(setSigns);
  });
  return (
    <>
      <h2>Please select your zodiac sign!</h2>
      <div className="grid">
        {signs.map((sign) => (
          <button className="sign" key={sign} onClick={() => setSelectedSign(sign)}> {sign}
          </button>
        ))}
      </div>
    </>
  );
};
