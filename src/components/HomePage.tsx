import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Coffee, Award, Clock, Star, ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function HomePage() {
  const heroImages = [
    'https://images.unsplash.com/photo-1611653683150-cb048456cc4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBtb2Rlcm58ZW58MXx8fHwxNzYwNDc5NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBtaW5pbWFsfGVufDF8fHx8MTc2MDUyNTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1501959915551-4e8d30928317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwd29ya3NwYWNlJTIwYWVzdGhldGljfGVufDF8fHx8MTc2MDUyNTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicmV3aW5nJTIwcG91cnxlbnwxfHx8fDE3NjA1MjUzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const features = [
    {
      icon: Coffee,
      title: 'Özel Kahveler',
      description: 'Her fincan özenle hazırlanır',
    },
    {
      icon: Award,
      title: 'Ödüllü Lezzetler',
      description: 'Şef yapımı tatlılar',
    },
    {
      icon: Clock,
      title: 'Her Gün Taze',
      description: 'Günlük kavrum garantisi',
    },
    {
      icon: Heart,
      title: 'Sıcak Atmosfer',
      description: 'Kendinizi evinizde hissedin',
    },
  ];

  const menuHighlights = [
    {
      name: 'Signature Espresso',
      description: 'Özel harmanlı, single origin',
      price: '35 ₺',
      tag: 'Yeni',
      image: 'https://images.unsplash.com/photo-1587402933159-9bb954a0ff9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMG1pbmltYWx8ZW58MXx8fHwxNzYwNDY4MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Velvet Latte',
      description: 'Kremamsı mikroköpük',
      price: '48 ₺',
      tag: 'Popüler',
      image: 'https://images.unsplash.com/photo-1680489809506-d8def0e1631f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZXxlbnwxfHx8fDE3NjA0NDY5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Artisan Croissant',
      description: 'El yapımı, tereyağlı',
      price: '28 ₺',
      tag: 'Şef Önerisi',
      image: 'https://images.unsplash.com/photo-1729007183087-ee03230ab54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjcm9pc3NhbnR8ZW58MXx8fHwxNzYwNTI0ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-stone-50">
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={heroImages[currentImageIndex]}
              alt="Cafe"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-800/60 to-transparent"></div>
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="inline-block mb-4 px-5 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                <span className="text-sm bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent tracking-wide">Premium Coffee & Cake</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white mb-6 tracking-tight leading-tight">
                Her An<br />
                Bir <span className="text-slate-300">Tatlı Anı</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
                Ustalıkla seçilmiş kahveler ve el yapımı tatlılar. CuCu's'ta her fincan, her dilim özel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/menu">
                  <Button size="lg" className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white border-0 px-8 shadow-lg shadow-slate-900/30 rounded-full">
                    Menüyü İncele
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/kampanyalar">
                  <Button size="lg" className="bg-white/90 hover:bg-white text-slate-900 border-0 px-8 shadow-lg rounded-full">
                    Kampanyalar
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Image indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-gradient-to-r from-slate-400 to-slate-600 w-8'
                  : 'bg-white/50 w-1.5 hover:bg-white/75'
              }`}
              aria-label={`Görsel ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm text-slate-600 tracking-widest uppercase mb-4 block">Neden CuCu's?</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 tracking-tight">Fark Yaratan Detaylar</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-8 bg-white hover:bg-gradient-to-br hover:from-slate-50 hover:to-slate-100 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 rounded-3xl text-center"
                >
                  <div className="inline-flex p-4 bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-slate-200 group-hover:to-slate-300 rounded-2xl mb-4 transition-colors">
                    <Icon className="w-7 h-7 text-slate-700" />
                  </div>
                  <h3 className="text-lg text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
            <div>
              <span className="text-sm text-slate-600 tracking-widest uppercase mb-2 block">Menü</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">Öne Çıkanlar</h2>
            </div>
            <Link to="/menu">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 rounded-full">
                Tüm Menü
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="max-w-md mx-auto sm:max-w-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {menuHighlights.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden bg-white border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 rounded-3xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-slate-700 text-xs tracking-wide border border-slate-200 rounded-full shadow-sm">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl text-slate-900">{item.name}</h3>
                    <span className="text-lg bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent ml-2">{item.price}</span>
                  </div>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-slate-600 fill-slate-600" />
              <span className="text-sm text-slate-700 tracking-widest uppercase">Exclusive</span>
              <Star className="w-5 h-5 text-slate-600 fill-slate-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 tracking-tight">
              Özel Ayrıcalıklara Sahip Olun
            </h2>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
              Üye olun, ilk siparişinizde %20 indirim kazanın ve özel kampanyalardan haberdar olun
            </p>
            <Link to="/profil">
              <Button size="lg" className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white border-0 px-8 shadow-lg shadow-slate-900/30 rounded-full">
                Hemen Üye Ol
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
