import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const handleStartNow = () => {
    console.log('Navigate to create invoice');
  };

  const handleLogin = () => {
    console.log('Navigate to login');
  };

  // Features Data
  const features = [
    {
      icon: "✅",
      title: "إنشاء فواتير ضريبية ومبسطة",
      description: "أنشئ فواتيرك الضريبية والمبسطة بسهولة وفقاً للمعايير السعودية"
    },
    {
      icon: "🧮",
      title: "حساب ضريبة القيمة المضافة تلقائيًا",
      description: "حساب دقيق لضريبة القيمة المضافة بنسبة 15% تلقائياً"
    },
    {
      icon: "📱",
      title: "توليد رمز QR للفواتير",
      description: "رموز QR متوافقة مع متطلبات هيئة الزكاة والضريبة"
    },
    {
      icon: "🔗",
      title: "جاهزية التكامل مع ZATCA",
      description: "نظام محدث ومتوافق مع أحدث متطلبات هيئة الزكاة"
    },
    {
      icon: "👥",
      title: "دعم جميع الفئات",
      description: "مناسب للأفراد، الفريلانسر، والمتاجر الإلكترونية"
    },
    {
      icon: "🌐",
      title: "واجهة باللغة العربية",
      description: "تصميم سهل الاستخدام ومحسن للمستخدم العربي"
    }
  ];

  // Target Audience Data
  const targetAudience = [
    {
      icon: "💼",
      title: "الأفراد المستقلون",
      description: "فريلانسرز ومقدمي الخدمات المستقلة"
    },
    {
      icon: "🏪",
      title: "المحلات والمتاجر الصغيرة",
      description: "أصحاب المتاجر والمحلات التجارية"
    },
    {
      icon: "🚀",
      title: "الشركات الناشئة",
      description: "الستارت أب والشركات الصغيرة"
    },
    {
      icon: "💻",
      title: "مقدمو الخدمات الإلكترونية",
      description: "خدمات التسويق الرقمي والتطوير"
    },
    {
      icon: "📋",
      title: "أي شخص يحتاج فواتير رسمية",
      description: "داخل المملكة العربية السعودية"
    }
  ];

  return (
    <div className="font-sans bg-gradient-to-br from-green-50 to-blue-50 min-h-screen" dir="rtl">
      
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-reverse space-x-2 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                متوافق مع ZATCA
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              نظام فواتير إلكتروني متوافق مع 
              <span className="text-green-600"> هيئة الزكاة والضريبة</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              نقدّم لك نظام فواتير إلكتروني بسيط وآمن، مصمم ليتماشى مع اللوائح السعودية للفوترة الإلكترونية، 
              ويدعم الأفراد، المحاسبين، والشركات الصغيرة. أنشئ فواتيرك الضريبية أو المبسطة في ثوانٍ، وتابع عملك بثقة.
            </p>
            
            <div className="flex space-x-reverse space-x-4">
              <button 
                onClick={handleStartNow}
                className="bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚀 ابدأ الآن مجاناً
              </button>
              <button 
                onClick={handleLogin}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-medium hover:border-green-600 hover:text-green-600 transition-colors"
              >
                👤 تسجيل الدخول
              </button>
            </div>
          </div>
          
          {/* Invoice Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="border-b-2 border-gray-200 pb-4 mb-6">
                <h3 className="text-xl font-bold text-gray-800">فاتورة ضريبية</h3>
                <p className="text-gray-600">رقم الفاتورة: INV-2024-001</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">المبلغ الأساسي:</span>
                  <span className="font-medium">1,000 ريال</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ضريبة القيمة المضافة (15%):</span>
                  <span className="font-medium">150 ريال</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                  <span>المجموع:</span>
                  <span className="text-green-600">1,150 ريال</span>
                </div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">رمز QR للفاتورة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            المميزات الرئيسية
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            من يستفيد من نظامنا؟
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudience.map((audience, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4">{audience.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {audience.title}
                </h3>
                <p className="text-gray-600">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ابدأ في إنشاء فواتيرك الإلكترونية الآن
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف المستخدمين الذين يثقون في نظامنا لإدارة فواتيرهم الإلكترونية
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-4">
            <button 
              onClick={handleStartNow}
              className="bg-white text-green-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 ابدأ الآن مجاناً
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-green-600 transition-all duration-300">
              💬 تواصل معنا
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;