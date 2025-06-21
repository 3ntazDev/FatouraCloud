import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8" dir="rtl">
      <div className="container mx-auto px-4">
        
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-reverse space-x-2 mb-3">
              <span className="text-2xl">📄</span>
              <span className="text-xl font-bold">فواتير</span>
            </div>
            <p className="text-gray-400 text-sm">
              نظام فواتير إلكتروني متوافق مع هيئة الزكاة والضريبة
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-3">روابط سريعة</h3>
            <div className="space-y-2 text-sm">
              <div className="text-gray-400 hover:text-white cursor-pointer">الرئيسية</div>
              <div className="text-gray-400 hover:text-white cursor-pointer">المميزات</div>
              <div className="text-gray-400 hover:text-white cursor-pointer">التسعير</div>
              <div className="text-gray-400 hover:text-white cursor-pointer">الدعم</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-3">تواصل معنا</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div>📧 info@fawateer.sa</div>
              <div>📞 920000000</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © 2024 فواتير - جميع الحقوق محفوظة
        </div>
      </div>
    </footer>
  );
};

export default Footer;