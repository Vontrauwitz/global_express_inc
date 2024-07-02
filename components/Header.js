// components/Header.js

import React from 'react';
import Link from 'next/link';
import { FacebookIcon, WhatsappIcon, HomeIcon } from './svgs';

const Header = () => {
  const whatsappNumber = '+1234567890'; // Reemplaza con el número de WhatsApp al que deseas enviar el mensaje
  const whatsappMessage = 'Hello, I would like to get more information.'; // Reemplaza con el mensaje predeterminado

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <header className="bg-dark-blue-transparent p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <div className="flex items-center space-x-4">
        <img
          src="/images/globallogo.jpg"
          alt="Company Logo"
          className="w-32 h-auto"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/">
          <HomeIcon className="w-6 h-6 text-white" />
        </Link>
        <Link href="https://www.facebook.com">
          <FacebookIcon className="w-6 h-6 text-white" />
        </Link>
        <Link href={whatsappLink}>
          <WhatsappIcon className="w-6 h-6 text-white" />
        </Link>
        <Link href="/admin/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Admin Login
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
