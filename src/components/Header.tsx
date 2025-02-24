'use client';
import { useRef, useState } from 'react';
import { FaBars, FaTimes, FaHome, FaBook, FaList, FaSearch, FaBell, FaUserCircle, FaSun, FaMoon } from 'react-icons/fa';
import gsap from 'gsap';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (isMenuOpen) {
      // Cerrar menú
      gsap.to(menuRef.current, { x: '-100%', duration: 0.5, ease: 'power3.out' });
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.5, ease: 'power3.out', onComplete: () => setIsMenuOpen(false) });
    } else {
      // Abrir menú
      setIsMenuOpen(true);
      gsap.fromTo(
        menuRef.current,
        { x: '-100%' },
        { x: '0%', duration: 0.5, ease: 'power3.out' }
      );
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-blue-900 p-4 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo y Eslogan */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-lg hover:bg-blue-800 transition duration-300"
            >
              <FaBars size={24} />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-white">Tales App</h1>
              <p className="text-sm text-blue-200">Donde las historias cobran vida</p>
            </div>
          </div>

          {/* Barra de Búsqueda y Acciones */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar cuentos..."
                className="bg-white bg-opacity-20 text-white placeholder-blue-200 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
            </div>
            <button className="text-white hover:text-yellow-400 transition duration-300">
              <FaBell size={24} />
            </button>
            <button
              onClick={toggleDarkMode}
              className="text-white hover:text-yellow-400 transition duration-300"
            >
              {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
            <button className="text-white hover:text-yellow-400 transition duration-300">
              <FaUserCircle size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay oscuro */}
      {isMenuOpen && (
        <div
          ref={overlayRef}
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}

      {/* Menú lateral */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 h-full w-64 bg-blue-900 text-white z-50 shadow-lg transform -translate-x-full"
      >
        {/* Botón para cerrar el menú */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white hover:text-yellow-400 transition duration-300"
        >
          <FaTimes size={24} />
        </button>

        {/* Logo y título */}
        <div className="p-6 border-b border-blue-800">
          <h1 className="text-2xl font-bold">Tales App</h1>
        </div>

        {/* Enlaces del menú */}
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <a
                href="/"
                className="flex items-center space-x-2 text-white hover:text-yellow-400 transition duration-300"
              >
                <FaHome size={20} />
                <span>Inicio</span>
              </a>
            </li>
            <li>
              <a
                href="/stories"
                className="flex items-center space-x-2 text-white hover:text-yellow-400 transition duration-300"
              >
                <FaBook size={20} />
                <span>Cuentos</span>
              </a>
            </li>
            <li>
              <a
                href="/categories"
                className="flex items-center space-x-2 text-white hover:text-yellow-400 transition duration-300"
              >
                <FaList size={20} />
                <span>Categorías</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}