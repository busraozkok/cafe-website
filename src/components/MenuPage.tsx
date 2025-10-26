import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { motion } from 'framer-motion';

export function MenuPage() {
  const coffeeItems = [
    {
      name: 'Signature Espresso',
      description: 'Özel harmanlı, yoğun aromalı',
      price: '35 ₺',
      image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZXxlbnwxfHx8fDE3NjA1MDE4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      popular: true,
    },
    {
      name: 'Velvet Latte',
      description: 'Kremamsı mikroköpük, mükemmel denge',
      price: '48 ₺',
      image: 'https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBsYXR0ZXxlbnwxfHx8fDE3NjA1MjAzODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      popular: true,
    },
    {
      name: 'Cappuccino',
      description: 'Klasik İtalyan usulü hazırlık',
      price: '42 ₺',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vfGVufDF8fHx8MTc2MDQ2MDkxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      popular: false,
    },
    {
      name: 'Americano',
      description: 'Sade ve güçlü',
      price: '38 ₺',
      image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMGNvZmZlZXxlbnwxfHx8fDE3NjA1MDE4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      popular: false,
    },
    {
      name: 'Flat White',
      description: 'Avustralya klasiği',
      price: '50 ₺',
      image: 'https://images.unsplash.com/photo-1680489809506-d8def0e1631f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZXxlbnwxfHx8fDE3NjA0NDY5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      popular: false,
    },
    {
      name: 'Mocha',
      description: 'Çikolata ve espresso uyumu',
      price: '52 ₺',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBwdWNjaW5vfGVufDF8fHx8MTc2MDQ2MDkxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      popular: true,
    },
  ];

  const foodItems = [
    {
      name: 'Artisan Croissant',
      description: 'El yapımı, tereyağlı, günlük',
      price: '28 ₺',
      image: 'https://images.unsplash.com/photo-1729007183087-ee03230ab54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjcm9pc3NhbnR8ZW58MXx8fHwxNzYwNTI0ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      popular: true,
    },
    {
      name: 'Tiramisu',
      description: 'Klasik İtalyan tatlısı',
      price: '58 ₺',
      image: 'https://images.unsplash.com/photo-1548693563-25dc13e7b2c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwcGFzdHJ5JTIwZGVzc2VydHxlbnwxfHx8fDE3NjA1MjIyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      popular: true,
    },
    {
      name: 'Belgian Waffle',
      description: 'Çıtır dışı, yumuşak içi',
      price: '45 ₺',
      image: 'https://images.unsplash.com/photo-1548693563-25dc13e7b2c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwcGFzdHJ5JTIwZGVzc2VydHxlbnwxfHx8fDE3NjA1MjIyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      popular: false,
    },
    {
      name: 'Pain au Chocolat',
      description: 'Çikolatalı Fransız hamuru',
      price: '32 ₺',
      image: 'https://images.unsplash.com/photo-1618667060775-1fe102237f94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzYwNDYwNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      popular: false,
    },
  ];

  const MenuCard = ({ item, index }: { item: typeof coffeeItems[0]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group overflow-hidden bg-white border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 rounded-3xl"
    >
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {item.popular && (
          <Badge className="absolute top-4 right-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white border-0 text-xs tracking-wide rounded-full shadow-lg">
            Popüler
          </Badge>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg text-slate-900">{item.name}</h3>
          <span className="text-lg bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent whitespace-nowrap ml-3">{item.price}</span>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-stone-50">
      {/* Hero */}
      <div className="bg-white py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm text-slate-600 tracking-widest uppercase mb-4 block">Menu</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-4 tracking-tight">Lezzetlerimiz</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ustalıkla hazırlanmış kahveler ve el yapımı lezzetler
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <Tabs defaultValue="coffee" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-white border border-slate-200 p-1.5 rounded-full shadow-sm">
            <TabsTrigger 
              value="coffee" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-600 data-[state=active]:to-slate-700 data-[state=active]:text-white text-slate-700 rounded-full"
            >
              Kahveler
            </TabsTrigger>
            <TabsTrigger 
              value="food" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-600 data-[state=active]:to-slate-700 data-[state=active]:text-white text-slate-700 rounded-full"
            >
              Yiyecekler
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="coffee">
            <div className="max-w-md mx-auto sm:max-w-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {coffeeItems.map((item, index) => (
                <MenuCard key={item.name} item={item} index={index} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="food">
            <div className="max-w-md mx-auto sm:max-w-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {foodItems.map((item, index) => (
                <MenuCard key={item.name} item={item} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
