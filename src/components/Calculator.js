import React, { Component } from 'react';
import { convert, toCelsius, toFahrenheit } from '../lib/converter';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

//1. prothome amader state = manage korte hobe
//2. onTemperatureChange ekta function ke amra input theke props akare pathiyechilam, user er input er upor bas 
//kore sheta ki celcious hobe naki Farenhit hobe tar jonno "handle change" ekta function banate hobe.









export default class Calculator extends Component {
    state = {
        temperature:'',
        scale:'c',
    }

   handleChange = (e,scale) => {
        this.setState({
            temperature:e.target.value,
            scale,
        })
    }
  render() {
    const {temperature,scale} = this.state;
    const celsius = scale === 'f'? convert(temperature, toCelsius) : temperature; //celcious er input box e hole farenhhit dibe 
    const fahrenheit = scale === 'c'? convert(temperature, toFahrenheit) : temperature; //Farenthit er input box e hole Celcious dibe 
    return (
      <div>
        <br />

        {/* shob shesh property gulo set korte hobe */}
            <TemperatureInput 
            scale="c"
            temperature={celsius} 
            onTemperatureChange = {this.handleChange}
             /> <br /> <br />
            <TemperatureInput 
            scale="f" 
            temperature={fahrenheit} 
            onTemperatureChange = {this.handleChange}

            />

            <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}
