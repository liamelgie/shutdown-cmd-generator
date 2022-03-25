function UserInput({timeValue, timeType, powerStateType, onPowerStateChange, onTimeValueChange, onTimeTypeChange}) {
  return (
    <div className="user-input-container">
      <div className='basic-controls'>
        <span>I want to</span><br className="responsive-min"></br>
        <select name="powerStateType" onChange={onPowerStateChange} value={powerStateType}>
          <option value="SHUTDOWN">shutdown</option>
          <option value="RESTART">restart</option>
        </select><br className="responsive-mid"></br>
        <span>in </span>
        <input type="text" value={timeValue} name="timeValue" onChange={onTimeValueChange}/>
        <select className="minimal" name="timeType" onChange={onTimeTypeChange} value={timeType}>
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
