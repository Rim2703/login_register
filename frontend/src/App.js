import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import AdminPage from './components/Admin';
import HomePage from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admin" element={<AdminPage />} />
          <Route exact path="/home" element={<HomePage />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
