import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'होम', path: '/' },
    { name: 'पंचांग', path: '/#panchang' },
    { name: 'सेवाएँ', path: '/services' },
    { name: 'परिचय', path: '/about' },
    { name: 'गैलरी', path: '/gallery' },
    { name: 'संपर्क', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-maroon text-cream text-center py-1 text-sm font-hindi tracking-wider">
        || ॐ नमः शिवाय || || श्री गणेशाय नमः || || जय श्री राम ||
      </div>

      <nav className="bg-cream dark:bg-darkbg border-b-2 border-saffron transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-maroon dark:text-saffron font-hindi">
                🕉️ आचार्य शिवांशु तिवारी
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="text-maroon dark:text-cream hover:text-saffron font-medium transition">
                  {link.name}
                </Link>
              ))}
              
              <div className="flex items-center border-l-2 border-saffron pl-6">
                <button onClick={toggleTheme} className="p-2 rounded-full bg-saffron/20 text-maroon dark:text-saffron hover:bg-saffron/40 transition">
                  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-4">
               <button onClick={toggleTheme} className="p-2 rounded-full bg-saffron/20 text-maroon dark:text-saffron">
                  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-maroon dark:text-cream">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-cream dark:bg-darkbg border-t border-saffron">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-maroon dark:text-cream hover:bg-saffron/20 rounded-md font-medium">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;