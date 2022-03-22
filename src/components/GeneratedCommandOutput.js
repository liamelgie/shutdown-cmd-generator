import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


function GeneratedCommandOutput(props) {
  // Repeated in App.js, make DRY?
  const [copied, setCopied] = useState(false)
  const triggerCopyTooltip = () => {
    setCopied(true)
    setTimeout(function(){
      setCopied(false);
    }, 3000)
  }

  return (
    <div className="output-container">
        <span className="output-command"><span style={{userSelect: "none"}}>> </span>{props.command}</span>
        <div className='to-clipboard'>
          <CopyToClipboard text={props.command} onCopy={triggerCopyTooltip}>
            {copied ? <button type="button" aria-label="copy successful" className='to-clipboard-button'><FontAwesomeIcon icon={faCheck} /></button> : <button type="button" aria-label="copy command to clipboard" className='to-clipboard-button'><FontAwesomeIcon icon={faCopy} /></button>}
          </CopyToClipboard>
        </div>
    </div>
  );
}

export default GeneratedCommandOutput;
