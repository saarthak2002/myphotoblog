import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {App} from './App';
import {About} from './About'
import { SanFrancisco } from './SanFrancisco';

import { BrowserRouter, Route, Routes } from 'react-router-dom';



ReactDOM.render(
 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<About />} />
      <Route exact path="/sfo" element={<SanFrancisco />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
 
);

// ReactDOM.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //   </Routes>
  // </BrowserRouter>,
//   document.getElementById('root')
// )
