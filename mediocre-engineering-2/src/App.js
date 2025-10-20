import React, { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [quote, setQuote] = useState(null);
  const [fade, setFade] = useState(true);

  const handleRefresh = async () => {
    setFade(false);
    setTimeout(async () => {

      const response = await fetch(`${API_URL}/quotes/random`);
      const inspiringQuote = await response.json();
      setQuote(inspiringQuote.quote);
      setFade(true);
    }, 300); // match fade-out duration
  };

  useEffect(() => {
    handleRefresh();
  }, [])

  return (
    <div className="app">
      <div className={`quote ${fade ? 'fade-in' : 'fade-out'}`}>
        {quote}
      </div>
      <button className="refresh-btn" onClick={handleRefresh}>
        <FontAwesomeIcon icon={faRotateRight} />
      </button>
    </div>
  );
}

export default App;
