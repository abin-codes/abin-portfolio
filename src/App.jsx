//import { useEffect, useState } from 'react';
//import Loader from './Loader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header';
import Home from './Home';



function App() {
  
return(
  <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
)
}
export default App
