import './App.css';
import DisplayQuote from './components/DisplayQuote';
import axios from 'axios';
import React from 'react';

function App() {
  const initialQuote = {
    quote :	"Gah, stupid sexy Flanders!",
    character	: "Homer Simpson",
    image :	"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    characterDirection :	"Right"
    };
    console.log(initialQuote)
  const [quote, setQuote] = React.useState(initialQuote);
  const getQuote = () => {

    // Send the request
  
    axios
  
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=5')
  
      // Extract the DATA from the received response
  
      .then((response) => response.data)
  
      // Use this data to update the state
  
      .then((data) => {
  
        setQuote(data[0]);
  console.log(data[0]);
      });
  
  };
  return (
    <div className="App">
      <DisplayQuote quote={quote} />
      <button type="button" onClick={getQuote}>Get Simpson quotes</button>
    </div>
  );
}

export default App;
