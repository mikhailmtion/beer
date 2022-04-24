import { Route, Routes } from 'react-router';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import BeerInfo from './pages/BeerInfo/BeerInfo';
import Random from './pages/Random/Random';
import Home from './pages/Home';
import About from './pages/About/About';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/beer/:id" element={<BeerInfo/>} />
        <Route path="/random" element={<Random/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
