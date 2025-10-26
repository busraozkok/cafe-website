import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Table } from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  LogOut, 
  TrendingUp, 
  Users, 
  Coffee, 
  DollarSign, 
  ShoppingCart,
  Star,
  Edit,
  Trash2,
  Plus,
  Package,
  BarChart3,
  Calendar,
  Home
} from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Demo verileri
  const stats = [
    {
      title: 'Günlük Satış',
      value: '₺12,450',
      change: '+12.5%',
      icon: DollarSign,
      color: 'from-green-600 to-green-700',
    },
    {
      title: 'Toplam Sipariş',
      value: '156',
      change: '+8.2%',
      icon: ShoppingCart,
      color: 'from-blue-600 to-blue-700',
    },
    {
      title: 'Aktif Müşteri',
      value: '1,234',
      change: '+15.3%',
      icon: Users,
      color: 'from-purple-600 to-purple-700',
    },
    {
      title: 'Ürün Sayısı',
      value: '45',
      change: '+2',
      icon: Coffee,
      color: 'from-slate-600 to-slate-700',
    },
  ];

  const recentOrders = [
    { id: '#001', customer: 'Ayşe Yılmaz', items: 'Latte, Cheesecake', total: '₺125', status: 'Tamamlandı', time: '10:30' },
    { id: '#002', customer: 'Mehmet Demir', items: 'Cappuccino, Brownie', total: '₺98', status: 'Hazırlanıyor', time: '10:45' },
    { id: '#003', customer: 'Zeynep Kaya', items: 'Espresso x2, Tiramisu', total: '₺156', status: 'Bekliyor', time: '11:00' },
    { id: '#004', customer: 'Ali Çelik', items: 'Mocha, Cookie', total: '₺82', status: 'Tamamlandı', time: '11:15' },
    { id: '#005', customer: 'Fatma Öz', items: 'Filter Coffee, Croissant', total: '₺67', status: 'Hazırlanıyor', time: '11:20' },
  ];

  const topProducts = [
    { name: 'Latte', sales: 245, revenue: '₺6,125', trend: '+15%' },
    { name: 'Cappuccino', sales: 198, revenue: '₺4,950', trend: '+12%' },
    { name: 'Espresso', sales: 176, revenue: '₺3,520', trend: '+8%' },
    { name: 'Cheesecake', sales: 145, revenue: '₺5,075', trend: '+20%' },
    { name: 'Brownie', sales: 132, revenue: '₺3,300', trend: '+10%' },
  ];

  const customers = [
    { name: 'Ayşe Yılmaz', email: 'ayse@email.com', points: 450, orders: 28, spent: '₺3,450' },
    { name: 'Mehmet Demir', email: 'mehmet@email.com', points: 320, orders: 22, spent: '₺2,890' },
    { name: 'Zeynep Kaya', email: 'zeynep@email.com', points: 280, orders: 19, spent: '₺2,340' },
    { name: 'Ali Çelik', email: 'ali@email.com', points: 215, orders: 15, spent: '₺1,890' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Tamamlandı':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Hazırlanıyor':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Bekliyor':
        return 'bg-slate-100 text-slate-800 border-slate-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-stone-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-slate-900">Yönetici Paneli</h1>
              <p className="text-sm text-slate-600">CuCu's Coffee & Cake</p>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/">
                <Button 
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-100 rounded-full"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Anasayfa
                </Button>
              </Link>
              <Button 
                onClick={onLogout}
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-100 rounded-full"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Çıkış Yap
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-white border border-slate-200 p-1.5 rounded-full shadow-sm">
            <TabsTrigger 
              value="dashboard" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-600 data-[state=active]:to-slate-700 data-[state=active]:text-white rounded-full"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Genel Bakış
            </TabsTrigger>
            <TabsTrigger 
              value="orders" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-600 data-[state=active]:to-slate-700 data-[state=active]:text-white rounded-full"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Siparişler
            </TabsTrigger>
            <TabsTrigger 
              value="products" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-600 data-[state=active]:to-slate-700 data-[state=active]:text-white rounded-full"
            >
              <Coffee className="w-4 h-4 mr-2" />
              Ürünler
            </TabsTrigger>
            <TabsTrigger 
              value="customers" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-600 data-[state=active]:to-slate-700 data-[state=active]:text-white rounded-full"
            >
              <Users className="w-4 h-4 mr-2" />
              Müşteriler
            </TabsTrigger>
          </TabsList>

          {/* Genel Bakış */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* İstatistik Kartları */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-2xl`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        {stat.change}
                      </Badge>
                    </div>
                    <h3 className="text-sm text-slate-600 mb-1">{stat.title}</h3>
                    <p className="text-3xl text-slate-900">{stat.value}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* En Çok Satan Ürünler */}
              <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl text-slate-900">En Çok Satan Ürünler</h2>
                  <Package className="w-5 h-5 text-slate-600" />
                </div>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center text-white">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-slate-900">{product.name}</p>
                          <p className="text-sm text-slate-600">{product.sales} satış</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-900">{product.revenue}</p>
                        <p className="text-sm text-green-600">{product.trend}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Son Siparişler */}
              <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl text-slate-900">Son Siparişler</h2>
                  <Calendar className="w-5 h-5 text-slate-600" />
                </div>
                <div className="space-y-3">
                  {recentOrders.slice(0, 5).map((order) => (
                    <div key={order.id} className="p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-slate-900">{order.customer}</p>
                          <p className="text-sm text-slate-600">{order.items}</p>
                        </div>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">{order.id} • {order.time}</span>
                        <span className="text-slate-900">{order.total}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Siparişler */}
          <TabsContent value="orders">
            <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-2xl text-slate-900">Tüm Siparişler</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm text-slate-600">Sipariş No</th>
                      <th className="px-6 py-4 text-left text-sm text-slate-600">Müşteri</th>
                      <th className="px-6 py-4 text-left text-sm text-slate-600">Ürünler</th>
                      <th className="px-6 py-4 text-left text-sm text-slate-600">Tutar</th>
                      <th className="px-6 py-4 text-left text-sm text-slate-600">Durum</th>
                      <th className="px-6 py-4 text-left text-sm text-slate-600">Saat</th>
                      <th className="px-6 py-4 text-left text-sm text-slate-600">İşlemler</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="px-6 py-4 text-slate-900">{order.id}</td>
                        <td className="px-6 py-4 text-slate-900">{order.customer}</td>
                        <td className="px-6 py-4 text-slate-600">{order.items}</td>
                        <td className="px-6 py-4 text-slate-900">{order.total}</td>
                        <td className="px-6 py-4">
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-slate-600">{order.time}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="rounded-full">
                              <Edit className="w-3 h-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Ürünler */}
          <TabsContent value="products">
            <div className="bg-white border border-slate-200 rounded-3xl shadow-sm">
              <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                <h2 className="text-2xl text-slate-900">Ürün Yönetimi</h2>
                <Button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white border-0 rounded-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Yeni Ürün Ekle
                </Button>
              </div>
              <div className="p-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="border border-slate-200 p-4 rounded-2xl hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg text-slate-900">{product.name}</h3>
                          <p className="text-sm text-slate-600">{product.sales} satış</p>
                        </div>
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                        <span className="text-slate-900">{product.revenue}</span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="rounded-full">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="rounded-full text-red-600 hover:bg-red-50">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Müşteriler */}
          <TabsContent value="customers">
            <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-2xl text-slate-900">Müşteri Listesi</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm text-slate-600">Müşteri</th>
                      <th className="px-6 py-4 text-left text-sm text-slate-600">E-posta</th>
                      <th className="px-6 py-4 text-left text-sm text-slate-600">Puan</th>
                      <th className="px-6 py-4 text-left text-sm text-slate-600">Sipariş</th>
                      <th className="px-6 py-4 text-left text-sm text-slate-600">Toplam Harcama</th>
                      <th className="px-6 py-4 text-left text-sm text-slate-600">İşlemler</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer, index) => (
                      <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center text-white">
                              {customer.name.charAt(0)}
                            </div>
                            <span className="text-slate-900">{customer.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-600">{customer.email}</td>
                        <td className="px-6 py-4">
                          <Badge className="bg-gradient-to-r from-slate-600 to-slate-700 text-white border-0">
                            {customer.points} puan
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-slate-900">{customer.orders}</td>
                        <td className="px-6 py-4 text-slate-900">{customer.spent}</td>
                        <td className="px-6 py-4">
                          <Button size="sm" variant="outline" className="rounded-full">
                            Detay
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
