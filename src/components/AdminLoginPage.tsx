import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Lock, Mail, Shield, ArrowLeft } from 'lucide-react';

interface AdminLoginPageProps {
  onLogin: () => void;
}

export function AdminLoginPage({ onLogin }: AdminLoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo için basit kontrol
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative">
      {/* Anasayfaya Dön Butonu */}
      <Link 
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span>Anasayfaya Dön</span>
      </Link>

      <div className="w-full max-w-md">
        {/* Logo ve Başlık */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full mb-4 shadow-2xl">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl text-white mb-2">Yönetici Girişi</h1>
          <p className="text-slate-400">CuCu's Coffee & Cake</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="admin-email" className="text-white">E-posta Adresi</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  id="admin-email"
                  type="email"
                  placeholder="admin@cucuscoffee.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-300 rounded-2xl"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="admin-password" className="text-white">Şifre</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  id="admin-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-300 rounded-2xl"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                <input type="checkbox" className="rounded border-white/20 bg-white/10 text-slate-600 focus:ring-slate-300" />
                <span>Beni hatırla</span>
              </label>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Şifremi unuttum
              </a>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white border-0 rounded-full shadow-lg text-base py-6"
            >
              <Shield className="w-5 h-5 mr-2" />
              Yönetici Olarak Giriş Yap
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-white/20 text-center">
            <p className="text-sm text-slate-400">
              Yönetici paneline erişim için yetkili olmanız gerekmektedir.
            </p>
          </div>
        </div>

        {/* Demo bilgi */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500">
            Demo: Herhangi bir e-posta ve şifre ile giriş yapabilirsiniz
          </p>
        </div>
      </div>
    </div>
  );
}
