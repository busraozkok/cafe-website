import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mesajınız gönderildi!\n\nAd: ' + name + '\nE-posta: ' + email);
    setName('');
    setEmail('');
    setMessage('');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adres',
      content: ['Bağdat Caddesi No: 123', 'Kadıköy, İstanbul 34710'],
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: ['+90 (216) 555 12 34', '+90 (555) 123 45 67'],
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: ['info@cucuscoffee.com', 'siparis@cucuscoffee.com'],
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      content: ['Pazartesi - Cuma: 07:00 - 23:00', 'Cumartesi - Pazar: 08:00 - 00:00'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-stone-50">
      {/* Hero */}
      <div className="bg-white py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm text-slate-600 tracking-widest uppercase mb-4 block">Contact</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-4 tracking-tight">İletişim</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Bize ulaşın, sizleri bekliyoruz
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl">
                        <Icon className="w-6 h-6 text-slate-700" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg text-slate-900 mb-2">{info.title}</h3>
                      {info.content.map((line, index) => (
                        <p key={index} className="text-slate-600">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl text-slate-900 mb-2">Bize Mesaj Gönderin</h2>
            <p className="text-slate-600 mb-6">
              Sorularınız, önerileriniz veya rezervasyon talepleriniz için formu doldurun
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-900">Adınız Soyadınız</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Adınız Soyadınız"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-300 rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-900">E-posta Adresiniz</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ornek@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-300 rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-900">Mesajınız</Label>
                <Textarea
                  id="message"
                  placeholder="Mesajınızı buraya yazın..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:ring-slate-300 rounded-2xl resize-none"
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white border-0 rounded-full shadow-md">
                <Send className="w-4 h-4 mr-2" />
                Mesajı Gönder
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white border border-slate-200 overflow-hidden rounded-3xl mb-12 shadow-sm">
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.2671128076935!2d29.029378876538707!3d40.98771817134808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9be6672cfb7%3A0x78a12fdb9fb5d1a5!2zQmHEn2RhdCBDZC4sIMSwc3RhbmJ1bA!5e0!3m2!1str!2str!4v1697123456789!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CuCu's Coffee & Cake Lokasyonu"
            ></iframe>
          </div>
        </div>

        {/* Transportation Info */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 p-6 rounded-3xl text-center shadow-sm">
            <h3 className="text-lg text-slate-900 mb-2">Otobüs</h3>
            <p className="text-slate-600 text-sm">
              4, 10S, 16, 16D hatları ile kolayca ulaşabilirsiniz
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded-3xl text-center shadow-sm">
            <h3 className="text-lg text-slate-900 mb-2">Metro</h3>
            <p className="text-slate-600 text-sm">
              Kadıköy metro istasyonuna 10 dakika yürüme mesafesinde
            </p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded-3xl text-center shadow-sm">
            <h3 className="text-lg text-slate-900 mb-2">Otopark</h3>
            <p className="text-slate-600 text-sm">
              Yakın çevrede ücretli otopark alanları mevcuttur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
