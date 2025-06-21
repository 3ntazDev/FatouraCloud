import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b" dir="rtl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-reverse space-x-2">
          <span className="text-2xl">📄</span>
          <span className="text-xl font-bold text-gray-900">فواتير</span>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-reverse space-x-4">
          <button className="text-gray-600 hover:text-green-600 px-3 py-2">
            الرئيسية
          </button>
          <button className="text-gray-600 hover:text-green-600 px-3 py-2">
            المميزات
          </button>
          <button className="text-gray-600 hover:text-green-600 px-3 py-2">
            التسعير
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            تسجيل الدخول
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;