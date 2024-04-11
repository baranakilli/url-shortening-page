/* eslint-disable react/prop-types */
import { useState } from 'react';
import './LinkHistoryItem.css';

function LinkHistoryItem({ inputUrl, shortenedUrl}) {
  const [button, setButton] = useState({text:'Copy', bgColor: 'var(--p-cyan)'});

  const handleButtonClick = () => {
    if (button.text === 'Copy') {
      setButton({ text: 'Copied!', bgColor: 'var(--p-dark-violet)' });
      setTimeout(() => {
        setButton({ text: 'Copy', bgColor: 'var(--p-cyan)' });
      }, 2000);
      navigator.clipboard.writeText(shortenedUrl);
    }
  };

  return (
    <div className="link-history-item">
      <span>{inputUrl}</span>
      <hr />
      <div>
        <a href={shortenedUrl}> {shortenedUrl} </a>
        <button style={{backgroundColor: button.bgColor}} onClick={handleButtonClick}>{button.text}</button>
      </div>
    </div>
  );
}

export default LinkHistoryItem;
