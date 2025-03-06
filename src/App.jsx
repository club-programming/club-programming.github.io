import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

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
                <Link
                  to="/"
                  className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  About
                </Link>
                {['Venue', 'Speakers', 'Schedule'].map((item) => (
                  <button
                    key={item}
                    className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
