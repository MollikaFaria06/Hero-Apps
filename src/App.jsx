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
import ErrorPage from './components/ErrorPage/ErrorPage';
import AppWrapper from './components/AppWrapper/AppWrapper';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Toaster position="top-right" reverseOrder={false} />

      <AppWrapper>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Banner />
                <States />
                <TrendingApps />
              </>
            } 
          />
          <Route path="/apps" element={<Apps />} />
          <Route path="/apps/:id" element={<AppDetails />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      </AppWrapper>

      <Footer />
    </BrowserRouter>
  )
}

export default App
