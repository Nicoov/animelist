import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom"
import Inicio from './Inicio'
import Search from '../src/components/SearchAnime'
import { useState } from 'react';

function App() {

  return (
    <HashRouter>
      <>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
        </Routes>
      </>
    </HashRouter>
  );
}

export default App;
