import React, { useEffect, useState } from "react";
import { getHoroscope } from "../services/api";

export const Horoscope = ({ sign, time }) => {
  const [horoscope, setHoroscope] = useState();

  useEffect(() => {
    getHoroscope(sign, time).then(setHoroscope);
  
  });
  return (
    <div>
      <h2> {sign} Your horoscope for {time} is...</h2>
      <h3> {horoscope} </h3> 
    </div>
  );
};