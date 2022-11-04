import React from "react";
import Timeline from "./components/Timeline";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Timeline />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;
