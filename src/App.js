import React, { useEffect, useState } from "react";
import './App.css';
import UserInput from './components/UserInput';
import GeneratedCommandOutput from "./components/GeneratedCommandOutput";
import windowDecoration from "./images/decoration.png";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const convertToSeconds = (convertFrom, valueToParse) => {
  // Convert provided value to seconds
  switch(convertFrom) {
    case 'SECONDS':
      return valueToParse;
      break;
    case 'MINUTES':
      return valueToParse * 60
      break;
    case 'HOURS':
      return (valueToParse * 60) * 60
      break;
    case 'DAYS':
      return ((valueToParse * 24) * 60) * 60
      break;
    default:
      return 0
      break;
  }
}

const constructCommand = (timeToTrigger, powerStateChange, options) => {
  // Convert desired powerstate change to it's respective flag
  var powerStateFlag = '';
  switch(powerStateChange) {
    case 'SHUTDOWN':
      powerStateFlag = '-s'
      break;
    case 'RESTART':
      powerStateFlag = '-r';
      break;
    default:
      powerStateFlag = '-s';
      break;
  }

  return `shutdown ${powerStateFlag} -t ${timeToTrigger}`
}

function App() {
  const [inputTimeValue, setInputTimeValue] = useState(60);
  const [inputTimeType, setInputTimeType] = useState('SECONDS');
  const [inputPowerStateChange, setInputPowerStateChange] = useState('SHUTDOWN');
  const secondsUntilShutdown = convertToSeconds(inputTimeType, inputTimeValue);

  // Repeated in GenerateCommandOutput.js, make DRY?
  const [copied, setCopied] = useState(false)
  const triggerCopyTooltip = () => {
    setCopied(true)
    setTimeout(function(){
      setCopied(false);
    }, 3000)
  }

  return (
    <div className="App">
      <header>
        <h1>Windows Shutdown <br className="responsive-min"></br>Command Generator</h1>
      </header>
      <div className="generator-container">
        {/* <h2>Shutdown Command Generator</h2> */}
        <UserInput 
        updateInputPowerStateType={setInputPowerStateChange} 
        updateInputTimeType={setInputTimeType} 
        updateInputTimeValue={setInputTimeValue}
        />
        <div className="command-decoration">
          <img alt="" src={windowDecoration}/>
          <GeneratedCommandOutput command={constructCommand(secondsUntilShutdown, inputPowerStateChange)}/>
        </div>
        <p>Paste the command in Run (Win + R) and press enter. <br></br>You may see a window flash or nothing at all.</p>
        <div>
          <h2>Changed your mind?</h2>
          <p>You can cancel a scheduled shutdown with the following:</p>
          <div className="command-decoration">
            <img alt="" src={windowDecoration}/>
            <div className="output-container">
              <span className="output-command"><span style={{userSelect: "none"}}>> </span>shutdown -a</span>
              <div className='to-clipboard'>
              <CopyToClipboard text={"shutdown -a"} onCopy={triggerCopyTooltip}>
                {copied ? <button type="button" aria-label="copy successful" className='to-clipboard-button'><FontAwesomeIcon icon={faCheck} /></button> : <button type="button" aria-label="copy command to clipboard" className='to-clipboard-button'><FontAwesomeIcon icon={faCopy} /></button>}
              </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <h1>Schedule Shutdowns</h1>
        <p>Using Window's handy <a href='https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/shutdown'>shutdown.exe</a>, you can schedule your machine to shutdown after a specified amount of time.<br></br>
        Unfortunately, the amount of time must be provided in seconds. This tool converts your desired length of time into seconds and generates the command for you.</p>
        <h1>What's it useful for?</h1>
        <p>Scheduling shutdowns can be very handy when downloading large files and leaving your PC unattended (i.e. overnight or while at work).</p>
      </div>
    </div>
  );
}

export default App;
