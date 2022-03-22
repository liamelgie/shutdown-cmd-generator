import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function UserInput(props) {
  const [timeValue, setTimeValue] = useState(60)
  const [timeType, setTimeType] = useState('SECONDS')
  const [powerStateType, setPowerStateType] = useState('SHUTDOWN')

  const handlePowerStateChange = e => {
    setPowerStateType(e.target.value)
  }

  const handleTimeValueChange = e => {
    setTimeValue(e.target.value)
  }

  const handleTimeTypeChange = e => {
    setTimeType(e.target.value)
  }

  useEffect(() => {
    props.updateInputTimeValue(timeValue);
    props.updateInputTimeType(timeType);
    props.updateInputPowerStateType(powerStateType);
  })

  // Change advanced onclick to button or something more symantic 
  return (
    <div className="user-input-container">
      <div className='basic-controls'>
        <span>I want to</span><br className="responsive-min"></br>
        <select name="powerStateType" onChange={handlePowerStateChange} value={powerStateType}>
          <option value="SHUTDOWN">shutdown</option>
          <option value="RESTART">restart</option>
        </select><br className="responsive-mid"></br>
        <span>in </span>
        <input type="text" value={timeValue} name="timeValue" onChange={handleTimeValueChange}/>
        <select className="minimal" name="timeType" onChange={handleTimeTypeChange} value={timeType}>
            <option value="SECONDS">seconds</option>
            <option value="MINUTES">minutes</option>
            <option value="HOURS">hours</option>
            <option value="DAYS">days</option>
        </select>
      </div>
    </div>
  );
}

export default UserInput;
