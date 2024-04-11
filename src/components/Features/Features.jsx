import logoBrandRecognition from '../../assets/icon-brand-recognition.svg';
import logoDetailedRecords from '../../assets/icon-detailed-records.svg'
import logoFullyCustomizable from '../../assets/icon-fully-customizable.svg'
import './Features.css';

function Features() {
  return (
    <div className="features">
      <div className="features-heading">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <ul>
      <div className="vertical-line"></div>
        <li>
          <div className="feature-logo">
            <img src={logoBrandRecognition} alt="" />
          </div>
          <div className="feature-content">
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </li>
        <li>
          <div className="feature-logo">
            <img src={logoDetailedRecords} alt="" />
          </div>
          <div className="feature-content">
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </li>
        <li>
          <div className="feature-logo">
            <img src={logoFullyCustomizable} alt="" />
          </div>
          <div className="feature-content">
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Features;
