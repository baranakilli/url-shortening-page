import banner from '../../assets/illustration-working.svg';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="banner"/>
      <div className="banner-content">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Banner;
