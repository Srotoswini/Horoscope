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
       <h1>Horoscope</h1>
          {!selectedSign && 
          (<SelectSign 
          setSelectedSign={setSelectedSign}/>)}

          {selectedSign && !selectedTime && (<SelectTime setSelectedTime={setSelectedTime}  />)}

          {selectedSign && selectedTime && (<Horoscope 
          time={selectedTime} 
          sign={selectedSign}/>)} 

      <button className="restart" onClick={restart}> Restart</button>   
    </div>
  );
}

export default App;
