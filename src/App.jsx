import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import GetStarted from './components/GetStarted';
import DonorLogin from './components/DonorLogin';
import ReceiverLogin from './components/ReceiverLogin';
import DonorRegister from './components/DonorRegister';
import ReceiverRegister from './components/ReceiverRegister';
import HowItWorks from './components/HowItWorks';
import Home from './components/Home';
import Footer from './components/Footer';
import Resources from './components/Resources';
import DonorProfile from './components/DonorProfile';
import ReceiverProfile from './components/ReceiverProfile';
import DonationForm from './components/DonationForm';
import RequestForm from './components/RequestForm';
import Request from './components/Request';
import Products from './components/Products';
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/requests" element={<Request />} />
        <Route path="/DonorLogin" element={<DonorLogin />} />
        <Route path="/ReceiverLogin" element={<ReceiverLogin />} />
        <Route path="/DonorRegister" element={<DonorRegister />} />
        <Route path="/ReceiverRegister" element={<ReceiverRegister />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/DonorProfile" element={<DonorProfile />} />
        <Route path="/ReceiverProfile" element={<ReceiverProfile />} />
        <Route path="/DonationForm" element={<DonationForm />} />
        <Route path="/RequestForm" element={<RequestForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
