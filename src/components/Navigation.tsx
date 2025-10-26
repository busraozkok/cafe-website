import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { useState } from 'react';
import logoImage from '../assets/logo.png';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Ana Sayfa' },
    { path: '/menu', label: 'Menü' },
    { path: '/kampanyalar', label: 'Kampanyalar' },
    { path: '/iletisim', label: 'İletişim' },
    { path: '/profil', label: 'Hesabım' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-md ring-2 ring-slate-200 group-hover:ring-slate-300 transition-all">
                <img src={logoImage} alt="CuCu's Coffee & Cake" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <span className="text-xl text-slate-900">CuCu's Coffee & Cake</span>
              <div className="text-[10px] text-slate-600 tracking-widest uppercase">Sweet Moments</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-slate-600 to-slate-700'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            
            {/* Admin Link */}
            <Link
              to="/admin"
              className="ml-2 p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all duration-200 group"
              title="Yönetici Girişi"
            >
              <Shield className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 text-base transition-colors rounded-xl mb-1 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-slate-600 to-slate-700'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            
            {/* Admin Link - Mobile */}
            <Link
              to="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-3 px-4 text-base text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors rounded-xl mt-2 border-t border-slate-200 pt-4"
            >
              <Shield className="w-5 h-5" />
              Yönetici Girişi
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
