import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Index from './pages/Index';
import About from './pages/About';
import Career from './pages/Career';
import BDE from './pages/BDE';
import Python from './pages/Python';
import ReactNetive from './pages/ReactNetive';
import ReactJs from './pages/ReactJs';
import IOS from './pages/IOS';
import Angular from './pages/Angular';
import UI_UX from './pages/UI_UX';
import Nodes from './pages/Nodes';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Contact_us from './pages/Contact_us';
import Errorpage from './pages/Errorpage';




function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Career" element={<Career />} />
        <Route exact path="/BDE" element={<BDE />} />
        <Route exact path="/Python" element={<Python />} />
        <Route exact path="/ReactNetive" element={<ReactNetive />} />
        <Route exact path="/ReactJs" element={<ReactJs />} />
        <Route exact path="/IOS" element={<IOS />} />
        <Route exact path="/Angular" element={<Angular />} />
        <Route exact path="/UI_UX" element={<UI_UX />} />
        <Route exact path="/Nodes" element={<Nodes />} />
        <Route exact path="/Service" element={<Service />} />
        <Route exact path='/Portfolio' element={<Portfolio />} />
        <Route exact path='/Contact_us' element={<Contact_us />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>


    </BrowserRouter>

  );
}

export default App;
