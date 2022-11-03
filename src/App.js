import React from "react";
import Timeline from "./components/Timeline";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Timeline />}/>
      </Routes>
    </Router>
  );
}

export default App;
