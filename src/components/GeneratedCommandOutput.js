import React from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";


function GeneratedCommandOutput(props) {
  const { isCopied, handleCopyToClipboard } = useCopyToClipboard(1000)

  return (
    <div className="output-container">
        <span className="output-command"><span style={{userSelect: "none"}}>&gt; </span>{props.command}</span>
        <div className='to-clipboard'>
          <CopyToClipboard text={props.command} onCopy={handleCopyToClipboard}>
            {isCopied ? <button type="button" style={{color: "aquamarine"}} aria-label="copy successful" className='to-clipboard-button'><FontAwesomeIcon icon={faCheck} /></button> : <button type="button" aria-label="copy command to clipboard" className='to-clipboard-button'><FontAwesomeIcon icon={faCopy} /></button>}
          </CopyToClipboard>
        </div>
    </div>
  );
}

export default GeneratedCommandOutput;
