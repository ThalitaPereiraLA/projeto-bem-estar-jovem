import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import Tools from './pages/Tools';
import Videos from './pages/Videos';
import HelpList from './pages/HelpList';
import Header from './components/Header';
import HelpButton from './components/HelpButton';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <main className="p-4 max-w-3xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/help" element={<HelpList />} />
          </Routes>
        </main>
        <HelpButton />
      </div>
    </Router>
  );
}
