import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home';
import Apps from './components/Apps/Apps';
import Installation from './components/Installation/Installation';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import States from './components/States/States';
import TrendingApps from './components/TrendingApps/TrendingApps';
import AppDetails from './components/AppDetails/AppDetails';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Toaster position="top-right" reverseOrder={false} />
      {/* Main content */}
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <States />
            <TrendingApps />
          </>
        } />
        <Route path="/apps" element={<Apps />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/app/:id" element={<AppDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
