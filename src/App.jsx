
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home';
import Apps from './components/Apps/Apps';
import Installation from './components/Installation/Installation';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import States from './components/States/States';

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/installation" element={<Installation />} />
      </Routes>
    </BrowserRouter>
     <Banner> </Banner> 
     <States></States>
     
    </>
  )
}

export default App
