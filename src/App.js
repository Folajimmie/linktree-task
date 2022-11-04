import React from "react";
import Timeline from "./components/Timeline";
import {Routes, Route} from 'react-router-dom';
import Contact from "./components/contact";

function App() {
  return (
      <Routes>
        <Route path='/' element={<Timeline />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
  );
};

export default App;
