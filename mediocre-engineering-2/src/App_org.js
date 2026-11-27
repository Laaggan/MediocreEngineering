import './App.css';
import { useState } from 'react';

const INSPIRATIONAL_QUOTES = [
"Vi har kompetensen du behöver - kanske.",
"Vi har kompetensen du förtjänar, inte den du behöver.",
"Vi har allt - till och med lösningar. Ibland.",
"De som förstår, de förstår",
]

// const fetchInspirationalQuote = () => {
//   if (INSPIRATIONAL_QUOTES.length > 0)
//   {
//     return INSPIRATIONAL_QUOTES.pop();
//   }
//   else
//   {
//     return "Nu har du din chans att fylla på med dina egna meddelanden."
//   }
// }

function App() {
  // const [currentQuote, setCurrentQuote] = useState(fetchInspirationalQuote());
  const [previouslySeenQuotes, setPreviouslySeenQuotes] = useState([]);
  const [quoteClass, setQuoteClass] = useState("child")
  const [inspirationalQuotes, setInspirationalQuotes] = useState(INSPIRATIONAL_QUOTES)

  const handleGetNewQuoteButtonClick = () => {
    // setPreviouslySeenQuotes([currentQuote, ...previouslySeenQuotes])
    // setCurrentQuote(fetchInspirationalQuote())
    // setQuoteClass("child2")
  };

  return (
    <div className="App">
      
      
      {/* <div className={quoteClass}>
        {currentQuote}
      </div> */}
      {inspirationalQuotes.map((quote, i) => 
        <div className={`child${i}`}>
          {quote}
        </div>
      )}
      <button className="next-button" onClick={handleGetNewQuoteButtonClick}>Nästa inspirationsmeddelande</button>
    </div>
  );
}

export default App;
