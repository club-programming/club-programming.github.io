'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-6">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-3xl font-bold text-transparent"
          >
            Club Programming
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden space-x-8 md:block">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/speakers', label: 'Speakers' },
              { to: '/access', label: 'Access' },
              { to: '/schedule', label: 'Schedule' },
            ].map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="flex flex-col space-y-1.5 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
                isMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed left-0 right-0 top-[72px] z-50 max-h-[calc(100vh-72px)] overflow-y-auto bg-[#13111C]/95 backdrop-blur-sm transition-transform duration-300 md:hidden ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-[200%]'
          }`}
        >
          <div className="container mx-auto px-4 py-4 pb-safe">
            <div className="flex flex-col space-y-4">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/speakers', label: 'Speakers' },
                { to: '/access', label: 'Access' },
                { to: '/schedule', label: 'Schedule' },
              ].map((link) => (
                <Link
                  key={link.to}
                  href={link.to}
                  className="text-lg font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
