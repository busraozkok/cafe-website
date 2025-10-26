import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Clock, Percent, Gift, Calendar, Sparkles, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function CampaignsPage() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState<typeof wheelPrizes[0] | null>(null);
  const [isWheelOpen, setIsWheelOpen] = useState(false);

  const campaigns = [
    {
      id: 1,
      title: 'İlk Siparişte %20 İndirim',
      description: 'Yeni üyelerimize özel! İlk siparişinizde %20 indirim kazanın.',
      discount: '20%',
      validUntil: '31 Aralık 2025',
      code: 'YENİUYE20',
      icon: Sparkles,
    },
    {
      id: 2,
      title: 'Kahve + Tatlı Fırsatı',
      description: 'Herhangi bir kahve ile birlikte tatlı alın, tatlıda %30 indirim!',
      discount: '30%',
      validUntil: '30 Kasım 2025',
      code: 'TATLI30',
      icon: Percent,
    },
    {
      id: 3,
      title: 'Sabah Kahvesi',
      description: '07:00 - 10:00 arası tüm kahvelerde %15 indirim',
      discount: '15%',
      validUntil: 'Her Gün',
      code: 'SABAH15',
      icon: Clock,
    },
    {
      id: 4,
      title: 'Hafta Sonu Özel',
      description: 'Cumartesi ve Pazar günleri 2. kahvede %50 indirim',
      discount: '50%',
      validUntil: 'Her Hafta Sonu',
      code: 'HAFTASONU50',
      icon: Zap,
    },
    {
      id: 5,
      title: 'Doğum Günü Hediyesi',
      description: 'Doğum gününüzde size özel büyük boy kahve ikram!',
      discount: 'HEDİYE',
      validUntil: 'Doğum Gününüzde',
      code: 'BIRTHDAY',
      icon: Gift,
    },
    {
      id: 6,
      title: '5 Al 1 Bedava',
      description: 'Her 5 kahve alımında 1 kahve bizden hediye',
      discount: '1 Bedava',
      validUntil: 'Süresiz',
      code: 'SADAKAT',
      icon: Gift,
    },
  ];

  // Çark için 6 dilimlik ödüller - Slate renk paleti
  const wheelPrizes = [
    { id: 1, label: '%20', subtitle: 'İndirim', code: 'CARK20', color: '#334155' }, // slate-700
    { id: 2, label: 'Bedava', subtitle: 'Kahve', code: 'KAHVE', color: '#475569' }, // slate-600
    { id: 3, label: '%25', subtitle: 'İndirim', code: 'CARK25', color: '#1e293b' }, // slate-800
    { id: 4, label: 'Bedava', subtitle: 'Tatlı', code: 'DESSERT', color: '#64748b' }, // slate-500
    { id: 5, label: '%15', subtitle: 'İndirim', code: 'CARK15', color: '#475569' }, // slate-600
    { id: 6, label: '%30', subtitle: 'İndirim', code: 'CARK30', color: '#334155' }, // slate-700
  ];

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setWonPrize(null);

    // Rastgele bir ödül seç
    const randomIndex = Math.floor(Math.random() * wheelPrizes.length);
    const selectedPrize = wheelPrizes[randomIndex];

    // Her dilim 30 derece (360/12)
    const degreesPerSlice = 360 / wheelPrizes.length;
    
    // Seçilen dilimin merkez açısı
    const prizeAngle = randomIndex * degreesPerSlice;
    
    // 5-7 tam tur at + seçilen açıya git
    const spins = 5 + Math.random() * 2;
    const finalRotation = (spins * 360) + (360 - prizeAngle) + (degreesPerSlice / 2);

    setRotation(rotation + finalRotation);

    // Animasyon bitince ödülü göster
    setTimeout(() => {
      setIsSpinning(false);
      setWonPrize(selectedPrize);
    }, 5000);
  };

  const degreesPerSlice = 360 / wheelPrizes.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-stone-50">
      {/* Hero */}
      <div className="bg-white py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm text-slate-600 tracking-widest uppercase mb-4 block">Exclusive Offers</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-4 tracking-tight">Kampanyalar</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Size özel fırsatlardan yararlanın
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Fırsat Çarkı - Dialog Trigger */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl text-slate-900 mb-2 tracking-tight">🎡 Fırsat Çarkı</h2>
            <p className="text-slate-600 mb-6">Şansını dene, kazanmak için çarkı çevir!</p>
            
            <Dialog open={isWheelOpen} onOpenChange={setIsWheelOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white border-0 px-12 py-6 text-xl rounded-full shadow-xl transform hover:scale-105 transition-transform"
                >
                  🎯 Fırsat Çarkını Aç
                </Button>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl bg-white p-8">
                <DialogHeader>
                  <DialogTitle className="text-3xl text-center text-slate-900">🎡 Fırsat Çarkı</DialogTitle>
                  <DialogDescription className="text-center text-slate-600">
                    Şansını dene ve harika ödüller kazan!
                  </DialogDescription>
                </DialogHeader>
                
                <div className="relative flex flex-col items-center mt-4">
                  {/* Çark */}
                  <div className="relative w-full max-w-md aspect-square mx-auto">
                    {/* Ok işareti - üstte sabit */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-20">
                      <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[35px] border-t-red-500 drop-shadow-2xl"></div>
                    </div>

                    {/* Çark Container */}
                    <div className="relative w-full h-full p-4">
                      <motion.div
                        className="w-full h-full rounded-full relative"
                        style={{ 
                          rotate: rotation,
                          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                        }}
                        transition={{ 
                          duration: 5, 
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      >
                        {/* Çark dilimleri */}
                        <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                          {wheelPrizes.map((prize, index) => {
                            const angle = (index * degreesPerSlice * Math.PI) / 180;
                            const nextAngle = ((index + 1) * degreesPerSlice * Math.PI) / 180;
                            
                            const x1 = 100 + 100 * Math.cos(angle - Math.PI / 2);
                            const y1 = 100 + 100 * Math.sin(angle - Math.PI / 2);
                            const x2 = 100 + 100 * Math.cos(nextAngle - Math.PI / 2);
                            const y2 = 100 + 100 * Math.sin(nextAngle - Math.PI / 2);

                            const largeArcFlag = degreesPerSlice > 180 ? 1 : 0;

                            const pathData = `M 100 100 L ${x1} ${y1} A 100 100 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

                            // Metin pozisyonu için orta açı
                            const midAngle = angle + (degreesPerSlice * Math.PI) / 360;
                            const textRadius = 60;
                            const textX = 100 + textRadius * Math.cos(midAngle);
                            const textY = 100 + textRadius * Math.sin(midAngle);
                            const textRotation = (index * degreesPerSlice) + (degreesPerSlice / 2);

                            return (
                              <g key={prize.id}>
                                {/* Dilim */}
                                <path
                                  d={pathData}
                                  fill={prize.color}
                                  stroke="white"
                                  strokeWidth="4"
                                />
                                
                                {/* Metin */}
                                <g transform={`translate(${textX}, ${textY}) rotate(${textRotation})`}>
                                  <text
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    className="pointer-events-none select-none"
                                  >
                                    {/* Ana metin */}
                                    <tspan
                                      x="0"
                                      dy="-6"
                                      fill="white"
                                      fontSize="16"
                                      fontWeight="900"
                                      style={{ 
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.7)',
                                        paintOrder: 'stroke fill',
                                        stroke: 'rgba(0,0,0,0.5)',
                                        strokeWidth: '1px'
                                      }}
                                    >
                                      {prize.label}
                                    </tspan>
                                    {/* Alt metin */}
                                    <tspan
                                      x="0"
                                      dy="18"
                                      fill="white"
                                      fontSize="11"
                                      fontWeight="800"
                                      style={{ 
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.7)',
                                        paintOrder: 'stroke fill',
                                        stroke: 'rgba(0,0,0,0.5)',
                                        strokeWidth: '1px'
                                      }}
                                    >
                                      {prize.subtitle}
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                            );
                          })}
                          
                          {/* Merkez daire - Çevir Butonu */}
                          <circle cx="100" cy="100" r="28" fill="white" stroke="#1e293b" strokeWidth="4" />
                        </svg>

                        {/* Merkez Butonu - Çarkın üstünde ama dönmüyor */}
                        <button
                          onClick={spinWheel}
                          disabled={isSpinning}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white rounded-full shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-110 transition-all duration-200 flex items-center justify-center z-10 border-4 border-white"
                        >
                          {isSpinning ? (
                            <div className="text-xl">🎡</div>
                          ) : (
                            <div className="text-xs tracking-tight">ÇEVİR</div>
                          )}
                        </button>
                      </motion.div>
                    </div>
                  </div>

                  {/* Kazanılan Ödül */}
                  <AnimatePresence>
                    {wonPrize && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="mt-8"
                      >
                        <div className="text-center bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-400 p-6 rounded-2xl">
                          <div className="text-5xl mb-3">🎉</div>
                          <h3 className="text-2xl text-slate-900 mb-2">Tebrikler!</h3>
                          <p className="text-lg text-slate-700 mb-4">
                            <span className="text-xl">{wonPrize.label}</span> {wonPrize.subtitle} kazandınız!
                          </p>
                          <div className="bg-white p-4 rounded-xl border border-green-300">
                            <p className="text-xs text-slate-600 mb-1">Kampanya Kodu</p>
                            <p className="text-xl font-mono text-green-700 tracking-wider">{wonPrize.code}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Kampanyalar */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl text-slate-900 mb-2 tracking-tight">Aktif Kampanyalar</h2>
          </div>

          <div className="max-w-md mx-auto sm:max-w-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {campaigns.map((campaign, index) => {
              const Icon = campaign.icon;
              return (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="relative group overflow-hidden bg-white border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 rounded-3xl"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-slate-100 rounded-bl-full"></div>
                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl text-slate-900 mb-3">{campaign.title}</h3>
                        <Badge className="bg-gradient-to-r from-slate-600 to-slate-700 text-white border-0 rounded-full shadow-md">
                          {campaign.discount} İndirim
                        </Badge>
                      </div>
                      <div className="p-3 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl">
                        <Icon className="w-6 h-6 text-slate-700" />
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-6 leading-relaxed">{campaign.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar className="w-4 h-4 text-slate-600" />
                        <span>Geçerlilik: {campaign.validUntil}</span>
                      </div>
                      
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-2xl border border-slate-200">
                        <p className="text-xs text-slate-500 mb-1">Kampanya Kodu</p>
                        <p className="text-lg bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent font-mono tracking-wide">{campaign.code}</p>
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white border-0 rounded-full shadow-md">
                        Kampanyayı Kullan
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Kampanya Kuralları */}
        <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl text-slate-900 mb-6">Kampanya Kuralları</h2>
          <ul className="space-y-3 text-slate-600">
            <li className="flex gap-3">
              <span className="text-slate-600 flex-shrink-0">•</span>
              <span>Kampanyalar birbirleriyle birleştirilemez.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-600 flex-shrink-0">•</span>
              <span>Kampanya kodlarını siparişinizi tamamlamadan önce girmeyi unutmayın.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-600 flex-shrink-0">•</span>
              <span>Her kampanya belirtilen geçerlilik tarihleri içinde kullanılabilir.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-600 flex-shrink-0">•</span>
              <span>Kampanyalardan yararlanmak için üye girişi yapmanız gerekmektedir.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-slate-600 flex-shrink-0">•</span>
              <span>Fırsat çarkını günde bir kez çevirme hakkınız vardır.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
