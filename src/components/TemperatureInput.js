/* eslint-disable react/prop-types */
import React from "react";
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

// props hisebe temperature, scale,onTemperatureChange ke pass korar jonno
export default function TemperatureInput({temperature, scale,onTemperatureChange }) {
  return (
      <fieldset>
        
          <legend>Enter temperature in {scaleNames[scale]}:</legend> {/* Props er maddhome label er naam change hobe */}
          {/* onChange={(e) => onTemperatureChange(e,scale)} input er value er upor depend kore outpu dibe, ei jonno event er 
          sathe scale ke props akare pass kora hoyeche (e,scale) 
          value={temperature} vale ki hobe otaw amra props hisebe pabo
          */}
          <input
              type="text"
              value={temperature}
              onChange={(e) => onTemperatureChange(e,scale)}
          />
      </fieldset>
  );
}
