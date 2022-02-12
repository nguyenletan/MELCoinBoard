import React, {useEffect} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Coins from './pages/Coins';
import Exchanges from './pages/Exchanges';
import News from './pages/News';
import CoinDetail from './pages/CoinDetail';



function App() {
  useEffect(() => {
    fetch('https://db.pokemongohub.net/api/pokemon/with-type/ghost?locale=en-US').then(x => x.json()).then(x => {
      console.log(x)
      return x;
    })
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="coins" element={<Coins />} />
        <Route path="coins/:id" element={<CoinDetail />} />
        <Route path="exchanges" element={<Exchanges />} />
        <Route path="news" element={<News />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
