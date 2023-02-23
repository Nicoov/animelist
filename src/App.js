import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom"
import Inicio from './components/Inicio'

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
