import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import Home from './Component/Home';
function App() {
  
  
  return (
   
  <Router>
    <>
  <Routes>
  
 <Route exact path ="/" Component={LoginPage}/>
 <Route path='/Home' Component={Home}/>

  </Routes>
  
  </>
  </Router>
   
  
   
  );
}

export default App;
