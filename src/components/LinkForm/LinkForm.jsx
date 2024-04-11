/* eslint-disable react/prop-types */
import LinkHistoryItem from '../LinkHistoryItem/LinkHistoryItem';
import './LinkForm.css';

function LinkForm({ urlArray, handleInputChange, handleShortenUrl }) {
  return (
    <>
      <div className="link-form">
        <input
          type="text"
          placeholder="Shorten a link here..."
          onChange={handleInputChange}
          onFocus={(event) => event.target.select()}
        />
        <button onClick={handleShortenUrl}>Shorten It!</button>
      </div>
      <div className="link-history">
        {urlArray.map((urlObject, index) => {
          return (
            <LinkHistoryItem
              key={index}
              inputUrl={urlObject.inputUrl}
              shortenedUrl={urlObject.shortenedUrl}
            />
          );
        })}
      </div>
    </>
  );
}

export default LinkForm;
