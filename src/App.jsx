import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import LinkForm from './components/LinkForm/LinkForm';
import Features from './components/Features/Features';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [inputUrl, setInputUrl] = useState('');
  const [urlArray, setUrlArray] = useState([]);

  useEffect(() => {
    setUrlArray(JSON.parse(sessionStorage.getItem('urlArray') || '[]'));
  }, []);

  useEffect(() => {
    if (urlArray.length != 0)
      sessionStorage.setItem('urlArray', JSON.stringify(urlArray));
  }, [urlArray]);

  const handleInputChange = (event) => {
    setInputUrl(event.target.value);
  };

  const handleShortenUrl = () => {
    fetch('/api/v1/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        url: inputUrl,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUrlArray([
          { inputUrl, shortenedUrl: data.result_url },
          ...urlArray.slice(0, 4),
        ]);
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <>
      <Navbar />
      <Banner />
      <div className="container">
        <div className="wrapper">
          <LinkForm
            urlArray={urlArray}
            handleInputChange={handleInputChange}
            handleShortenUrl={handleShortenUrl}
          />
          <Features />
        </div>
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}

export default App;
