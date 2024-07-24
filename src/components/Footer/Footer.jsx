import whiteLogo from "../../assets/logo-white.svg";
import upworkLogo from "../../assets/upwork.svg";
import githubLogo from "../../assets/github.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <img src={whiteLogo} alt="shortly-logo" id="footer-logo" />
      <div className="footer-content">
        <div className="footer-column">
          <h4>Features</h4>
          <span>Link Shortening</span>
          <span>Branded Links</span>
          <span>Analytics</span>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <span>Blog</span>
          <span>Developers</span>
          <span>Support</span>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <span>About</span>
          <span>Our Team</span>
          <span>Careers</span>
          <span>Contact</span>
        </div>
        <div className="footer-social-links">
          <a href="https://github.com/baranakilli" target="_blank">
            <img src={githubLogo} width={30} height={30} alt="" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/baranakilli"
            target="_blank"
          >
            <img src={upworkLogo} width={30} height={30} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
