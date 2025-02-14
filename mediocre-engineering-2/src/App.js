import './App.css';
import { useState } from 'react';

const inspirationalQuotes = [
"Vi har kompetensen du behöver - kanske.",
"Vi har kompetensen du förtjänar, inte den du behöver.",
"Vi har allt - till och med lösningar. Ibland.",
"De som förstår, de förstår",
]

const fetchInspirationalQuote = () => {
  if (inspirationalQuotes.length > 0)
  {
    return inspirationalQuotes.pop();
  }
  else
  {
    return "Nu har du din chans att fylla på med dina egna meddelanden."
  }
}

function App() {
  const [currentQuote, setCurrentQuote] = useState(fetchInspirationalQuote());
  const [previouslySeenQuotes, setPreviouslySeenQuotes] = useState([]);

  const handleGetNewQuoteButtonClick = () => {
    setPreviouslySeenQuotes([currentQuote, ...previouslySeenQuotes])
    setCurrentQuote(fetchInspirationalQuote())
  };

  return (
    <div className="App">
      <div className="child">
        {currentQuote}
      </div>
      {previouslySeenQuotes.map((quote, i) => 
        <div className="child-without-animation">
          {quote}
        </div>
      )}
      <button className="next-button" onClick={handleGetNewQuoteButtonClick}>Nästa inspirationsmeddelande</button>
    </div>
  );
}

export default App;
