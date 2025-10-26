import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { User, Mail, Lock, Phone, Check, Sparkles, Star, Gift, LogOut, Trophy } from 'lucide-react';

export function ProfilePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPhone, setRegisterPhone] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  
  // Giriş yapan kullanıcı bilgileri
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    points: 0,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Giriş yapıldığında kullanıcı bilgilerini set et
    setUserInfo({
      name: 'Ayşe Yılmaz', // Demo için sabit değer
      email: loginEmail,
      phone: '0555 123 45 67',
      points: 450,
    });
    setIsLoggedIn(true);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Kayıt olduğunda kullanıcı bilgilerini set et
    setUserInfo({
      name: registerName,
      email: registerEmail,
      phone: registerPhone,
      points: 0,
    });
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginEmail('');
    setLoginPassword('');
    setUserInfo({ name: '', email: '', phone: '', points: 0 });
  };

  const benefits = [
    'İlk siparişte %20 indirim',
    'Her 5 kahvede 1 hediye',
    'Doğum günü sürprizi',
    'Özel kampanyalardan ilk siz haberdar olun',
    'Hızlı sipariş imkanı',
  ];
  
  const personalCampaigns = [
    {
      id: 1,
      title: 'Size Özel %25 İndirim',
      description: 'Sadık müşterimiz olduğunuz için tüm kahvelerde geçerli',
      discount: '25%',
      code: 'ÖZEL25',
      validUntil: '15 Kasım 2025',
    },
    {
      id: 2,
      title: 'Ücretsiz Tatlı',
      description: 'Bir sonraki siparişinizde herhangi bir tatlı hediye',
      discount: 'Hediye',
      code: 'TATLI2024',
      validUntil: '30 Kasım 2025',
    },
    {
      id: 3,
      title: 'Çift Puan Kazanma',
      description: 'Bu hafta sonu tüm alışverişlerinizde çift puan',
      discount: '2x Puan',
      code: 'CIFTPUAN',
      validUntil: '27 Ekim 2025',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-stone-50">
      {/* Hero */}
      <div className="bg-white py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm text-slate-600 tracking-widest uppercase mb-4 block">Account</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-4 tracking-tight">Hesabım</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {isLoggedIn ? `Hoş geldiniz, ${userInfo.name.split(' ')[0]}!` : 'Giriş yapın veya yeni hesap oluşturun'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {isLoggedIn ? (
          // Giriş yapılmış durum - Profil sayfası
          <div className="space-y-8">
            {/* Kullanıcı Bilgileri */}
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl text-slate-900 mb-1">{userInfo.name}</h2>
                    <p className="text-slate-600">{userInfo.email}</p>
                    <p className="text-slate-600">{userInfo.phone}</p>
                  </div>
                </div>
                <Button 
                  onClick={handleLogout}
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-100 rounded-full"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Çıkış Yap
                </Button>
              </div>
              
              {/* Puan Kartı */}
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-6 rounded-2xl border border-slate-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-600 mb-1 flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      Toplam Puanınız
                    </p>
                    <p className="text-5xl text-slate-900">{userInfo.points}</p>
                    <p className="text-sm text-slate-600 mt-2">
                      Bir sonraki hediyeye {500 - userInfo.points} puan kaldı
                    </p>
                  </div>
                  <div className="text-6xl">🏆</div>
                </div>
              </div>
            </div>

            {/* Size Özel Kampanyalar */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Gift className="w-6 h-6 text-slate-700" />
                <h2 className="text-3xl text-slate-900">Size Özel Kampanyalar</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {personalCampaigns.map((campaign) => (
                  <div 
                    key={campaign.id}
                    className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl text-slate-900">{campaign.title}</h3>
                      <Badge className="bg-gradient-to-r from-slate-600 to-slate-700 text-white border-0 rounded-full">
                        {campaign.discount}
                      </Badge>
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">{campaign.description}</p>
                    
                    <div className="space-y-3">
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-2xl border border-slate-200">
                        <p className="text-xs text-slate-500 mb-1">Kampanya Kodu</p>
                        <p className="text-lg bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent font-mono tracking-wide">
                          {campaign.code}
                        </p>
                      </div>
                      
                      <p className="text-sm text-slate-500 flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Geçerlilik: {campaign.validUntil}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Üye Avantajları */}
            <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-slate-600" />
                <h3 className="text-2xl text-slate-900">Üyelik Avantajlarınız</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Giriş yapılmamış durum - Login/Register formu
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="max-w-md mx-auto lg:mx-0 w-full">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-white border border-slate-200 p-1.5 rounded-full shadow-sm">
                  <TabsTrigger 
                    value="login" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-600 data-[state=active]:to-slate-700 data-[state=active]:text-white text-slate-700 rounded-full"
                  >
                    Giriş Yap
                  </TabsTrigger>
                  <TabsTrigger 
                    value="register" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-600 data-[state=active]:to-slate-700 data-[state=active]:text-white text-slate-700 rounded-full"
                  >
                    Kayıt Ol
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login">
                  <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
                    <form onSubmit={handleLogin} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="login-email" className="text-slate-900">E-posta Adresi</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                          <Input
                            id="login-email"
                            type="email"
                            placeholder="ornek@email.com"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            className="pl-11 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-300 rounded-2xl"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="login-password" className="text-slate-900">Şifre</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                          <Input
                            id="login-password"
                            type="password"
                            placeholder="••••••••"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            className="pl-11 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-300 rounded-2xl"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                          <input type="checkbox" className="rounded border-slate-300 text-slate-600 focus:ring-slate-300" />
                          <span>Beni hatırla</span>
                        </label>
                        <a href="#" className="text-slate-700 hover:text-slate-900">
                          Şifremi unuttum
                        </a>
                      </div>

                      <Button type="submit" className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white border-0 rounded-full shadow-md">
                        Giriş Yap
                      </Button>
                    </form>
                  </div>
                </TabsContent>

                <TabsContent value="register">
                  <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
                    <form onSubmit={handleRegister} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="register-name" className="text-slate-900">Ad Soyad</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                          <Input
                            id="register-name"
                            type="text"
                            placeholder="Adınız Soyadınız"
                            value={registerName}
                            onChange={(e) => setRegisterName(e.target.value)}
                            className="pl-11 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-300 rounded-2xl"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-email" className="text-slate-900">E-posta Adresi</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                          <Input
                            id="register-email"
                            type="email"
                            placeholder="ornek@email.com"
                            value={registerEmail}
                            onChange={(e) => setRegisterEmail(e.target.value)}
                            className="pl-11 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-300 rounded-2xl"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-phone" className="text-slate-900">Telefon Numarası</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                          <Input
                            id="register-phone"
                            type="tel"
                            placeholder="0555 555 55 55"
                            value={registerPhone}
                            onChange={(e) => setRegisterPhone(e.target.value)}
                            className="pl-11 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-300 rounded-2xl"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="register-password" className="text-slate-900">Şifre</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                          <Input
                            id="register-password"
                            type="password"
                            placeholder="••••••••"
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                            className="pl-11 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-300 rounded-2xl"
                            required
                          />
                        </div>
                        <p className="text-xs text-slate-500">
                          Şifreniz en az 8 karakter olmalıdır
                        </p>
                      </div>

                      <div className="flex items-start gap-2">
                        <input type="checkbox" required className="mt-1 rounded border-slate-300 text-slate-600 focus:ring-slate-300" />
                        <label className="text-sm text-slate-600">
                          <a href="#" className="text-slate-700 hover:text-slate-900">
                            Kullanım koşullarını
                          </a>{' '}
                          ve{' '}
                          <a href="#" className="text-slate-700 hover:text-slate-900">
                            gizlilik politikasını
                          </a>{' '}
                          okudum ve kabul ediyorum.
                        </label>
                      </div>

                      <Button type="submit" className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white border-0 rounded-full shadow-md">
                        Kayıt Ol
                      </Button>
                    </form>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <div className="relative overflow-hidden bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-slate-100 to-slate-200 rounded-bl-full"></div>
                <div className="relative">
                  <div className="inline-flex items-center gap-2 mb-6">
                    <Sparkles className="w-5 h-5 text-slate-600" />
                    <h3 className="text-2xl text-slate-900">Üye Avantajları</h3>
                  </div>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 p-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
