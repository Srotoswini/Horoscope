// eslint-disable
import React, { useState } from "react";
import { SelectSign } from "./components/SelectSign";
import { SelectTime } from "./components/SelectTime";
import { Horoscope } from "./components/Horoscope";
import './App.css';

function App() {

  const [selectedSign, setSelectedSign] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const restart = () => {
    setSelectedSign(null);
    setSelectedTime(null);
  }

  return (
    <div className="App">
      <h1>Hello Hackers !</h1>
    </div>
  );
}

export default App;
