
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdFavoriteBorder } from 'react-icons/md';
import { TiShoppingCart } from 'react-icons/ti';
import Icon from '../../Icon';
import Footer from '../../Templates/Footer';

const Layout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onClickLinkPage = (routeName: string) => {
    navigate(routeName);
    setMenuOpen(false); // Close the menu after navigation
  };

  const isActive = (route: string): string =>
    location.pathname === route ? 'text-blue-600 font-bold' : 'text-gray-700 font-medium';

  return (
    <div>
      <div className={`w-full bg-[#fafafa] sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="w-[90%] mx-auto py-4 sm:px-10 flex justify-between items-center">
          <div className="w-8 sm:w-12">
            <img src="images/image.png" alt="Logo" />
          </div>
          <div className="hidden md:flex flex-row gap-9">
            <button
              className={`${isActive('/')} hover:font-semibold hover:text-white transition-all duration-300 text-xl`}
              onClick={() => onClickLinkPage('/')}
            >
              Home
            </button>
            <button
              className={`${isActive('/food')} hover:font-semibold hover:text-white transition-all duration-300 text-xl`}
              onClick={() => onClickLinkPage('/food')}
            >
              Foods
            </button>
            <button
              className={`${isActive('/about')} hover:font-semibold hover:text-white transition-all duration-300 text-xl`}
              onClick={() => onClickLinkPage('/about')}
            >
              About
            </button>
            <button
              className={`${isActive('/faq')} hover:font-semibold hover:text-white transition-all duration-300 text-xl`}
              onClick={() => onClickLinkPage('/faq')}
            >
              FAQ
            </button>
            <button
              className={`${isActive('/blog')} hover:font-semibold hover:text-white transition-all duration-300 text-xl`}
              onClick={() => onClickLinkPage('/blog')}
            >
              Blog
            </button>
            <button
              className={`${isActive('/contact')} hover:font-semibold hover:text-white transition-all duration-300 text-xl`}
              onClick={() => onClickLinkPage('/contact')}
            >
              Contact
            </button>
            <button
              className={`${isActive('/login')} hover:font-semibold hover:text-white transition-all duration-300 text-xl`}
              onClick={() => onClickLinkPage('/login')}
            >
              Login
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button
              className={`${isActive('/favorite')}`}
              onClick={() => onClickLinkPage('/favorite')}
            >
              <Icon IconComponent={MdFavoriteBorder} />
            </button>
            <button
              className={`${isActive('/add-card')}`}
              onClick={() => onClickLinkPage('/add-card')}
            >
              <Icon IconComponent={TiShoppingCart} />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none md:hidden"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        <div
          className={`fixed inset-0 bg-purple-500 bg-opacity-95 z-50 flex flex-col gap-9 items-center justify-center text-white transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white focus:outline-none hover:text-red-600"
          >
            <FaTimes size={24} />
          </button>
          <button
            className={`${isActive('/')} hover:font-semibold hover:text-white transition-all duration-300 text-xl`}
            onClick={() => onClickLinkPage('/')}
          >
            Home
          </button>
          <button
            className={`${isActive('/food')} hover:font-semibold hover:text-white transition-all duration-300 text-xl`}
            onClick={() => onClickLinkPage('/food')}
          >
            Foods
          </button>
          <button
            className={`${isActive('/about')} hover:font-semibold hover:text-white transition-all duration-300 text-xl`}
            onClick={() => onClickLinkPage('/about')}
          >
            About
          </button>
          <button
            className={`${isActive('/contact')} hover:font-semibold hover:text-white transition-all duration-300 text-xl`}
            onClick={() => onClickLinkPage('/contact')}
          >
            Contact
          </button>
          <button
            className={`${isActive('/login')} hover:font-semibold hover:text-white transition-all duration-300 text-xl`}
            onClick={() => onClickLinkPage('/login')}
          >
            Login
          </button>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
