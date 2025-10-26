import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { MenuPage } from './components/MenuPage';
import { CampaignsPage } from './components/CampaignsPage';
import { ProfilePage } from './components/ProfilePage';
import { ContactPage } from './components/ContactPage';
import { AdminLoginPage } from './components/AdminLoginPage';
import { AdminDashboard } from './components/AdminDashboard';

export default function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    document.title = "CuCu's Coffee & Cake - Premium Coffee Experience";
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Yönetici Rotaları */}
          <Route 
            path="/admin" 
            element={
              isAdminLoggedIn ? (
                <AdminDashboard onLogout={() => setIsAdminLoggedIn(false)} />
              ) : (
                <AdminLoginPage onLogin={() => setIsAdminLoggedIn(true)} />
              )
            } 
          />
          
          {/* Normal Kullanıcı Rotaları */}
          <Route 
            path="/*" 
            element={
              <>
                <Navigation />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/menu" element={<MenuPage />} />
                  <Route path="/kampanyalar" element={<CampaignsPage />} />
                  <Route path="/iletisim" element={<ContactPage />} />
                  <Route path="/profil" element={<ProfilePage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}
