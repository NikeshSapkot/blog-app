import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
            TechPulse
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-1 py-2 text-sm font-medium ${location.pathname === '/' ? 'text-white border-b-2 border-blue-500' : 'text-gray-300 hover:text-white'}`}
            >
              News
            </Link>
            <Link
              to="/contact"
              className={`px-1 py-2 text-sm font-medium ${location.pathname === '/contact' ? 'text-white border-b-2 border-blue-500' : 'text-gray-300 hover:text-white'}`}
            >
              Contact
            </Link>
            <Link
              to="/privacy"
              className={`px-1 py-2 text-sm font-medium ${location.pathname === '/privacy' ? 'text-white border-b-2 border-blue-500' : 'text-gray-300 hover:text-white'}`}
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}