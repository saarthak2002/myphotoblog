import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {App} from './App';
import {About} from './About'
import { SanFrancisco } from './SanFrancisco';
import { NewYorkCity } from './NewYorkCity';

import { BrowserRouter, Route, Routes } from 'react-router-dom';



ReactDOM.render(
 
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<About />} />
      <Route path="/sfo" element={<SanFrancisco />} />
      <Route path="/nyc" element={<NewYorkCity />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
 
);


