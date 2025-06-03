import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage.jsx';
import Login from './pages/login.jsx';
import Regist from './pages/regist.jsx';
import Home from './pages/home.jsx';
import News from './pages/news.jsx';
import Dashboard from './pages/dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regist />} />
        <Route path="/home" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
