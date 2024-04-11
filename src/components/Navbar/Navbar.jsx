import { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import mobileButton from '../../assets/mobile-navbar-button.svg';
import './Navbar.css';

function Navbar() {
  const [isMenuButtonVisible, setIsMenuButtonVisible] = useState('invisible');
  const [isOpen, setIsOpen] = useState('closed');

  useEffect(() => {
    setMenuVisiblity();
  }, []);

  window.addEventListener('resize', function () {
    setMenuVisiblity();
  });

  const setMenuVisiblity = () => {
    if (window.innerWidth >= 1000) {
      setIsMenuButtonVisible('invisible');
      setIsOpen('open');
    } else {
      setIsMenuButtonVisible('visible');
      setIsOpen('closed');
    }
  };

  const toggleMenu = () => {
    isOpen === 'closed' ? setIsOpen('open') : setIsOpen('closed');
  };

  return (
    <nav>
      <img src={logo} alt="shortly-logo" className='shortly-logo'/>
      <div className={'navbar-menu ' + 'menu-button-' + isMenuButtonVisible + ' ' + isOpen}>
        <div>
        <span>Features</span>
        <span>Pricing</span>
        <span>Resources</span>
        </div>
        <hr />
        <div>
        <span>Login</span>
        <button>Sign Up</button>
        </div>
      </div>
      <img
        src={mobileButton}
        alt="logo"
        onClick={toggleMenu}
        className={'menu-button-' + isMenuButtonVisible}
      />
    </nav>
  );
}

export default Navbar;
