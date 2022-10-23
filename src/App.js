import React,{ useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import Footer from './components/Footer';
import News from './components/News';

function App() {
  
  const [data, setData] = useState();
  
    // https://newsapi.org/v2/top-headlines?country=us&apiKey=e10c6e1cb638440c9fc6184d93c1d0af
    // https://content.guardianapis.com/search?api-key=d93773f5-95a1-4d37-8571-a46550159fed
  
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=e10c6e1cb638440c9fc6184d93c1d0af"
      )
      .then(response => setData(response.data.articles))
      .catch((err) => console.log('show error', err));
  }, []);

   console.log('data', data);

  return (
    <div className="App">
      <Header />
      <News data={data}/>
      <Footer />
    </div>
  );
}

export default App;
