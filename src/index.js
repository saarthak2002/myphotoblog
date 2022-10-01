import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {App} from './App';
import {About} from './About'
import { SanFrancisco } from './SanFrancisco';
import { NewYorkCity } from './NewYorkCity';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { WashingtonDC } from './WashingtonDC';
import { Contact } from './Contact';



ReactDOM.render(
 
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/sfo" element={<SanFrancisco />} />
      <Route path="/nyc" element={<NewYorkCity />} />
      <Route path="/dc" element={<WashingtonDC />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
 
);


