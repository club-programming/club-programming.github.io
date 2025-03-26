import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Speakers from './pages/Speakers';
import Schedule from './pages/Schedule';
import Gacha from './pages/games/Gacha';
import Access from './pages/Access';

function App() {
  return (
    <div className="min-h-screen bg-[#13111C] selection:bg-purple-500/90 selection:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-20%,#17154B,transparent_45%)] opacity-70" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_120%,#1F1B41,transparent_45%)]" />

      <div className="relative">
        {/* ヘッダーセクション */}
        <header className="py-6">
          <nav className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent"
              >
                Club Programming
              </Link>
              <div className="space-x-8">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'About' },
                  { to: '/speakers', label: 'Speakers' },
                  { to: '/access', label: 'Access' },
                  { to: '/schedule', label: 'Schedule' },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/games/gacha" element={<Gacha />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/access" element={<Access />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
