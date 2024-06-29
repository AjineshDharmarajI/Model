import React from 'react'
import './App.css';
import NavBar from './NavBar';
import Table from './Table';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Empty from './Empty';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/Empty.js' element={<Empty/>}/>
      <Route path="/" element={<NavBar />}/>
    </Routes>
    
      </BrowserRouter>
    
  );
}

export default App;
