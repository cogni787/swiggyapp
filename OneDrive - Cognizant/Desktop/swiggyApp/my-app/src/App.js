import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
