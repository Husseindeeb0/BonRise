import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogOut, User as UserIcon } from "lucide-react";
import {
  useLogoutMutation,
} from "../state/services/auth/authAPI";
import { useAuth } from "../hooks/useAuth";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const location = useLocation();

  const { user, isAuthenticated } = useAuth();

  const [logout] = useLogoutMutation();

  const isSolidPage = ["/about"].includes(location.pathname);
  const isCompact = scrolled || isOpen || isSolidPage;

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setShowUserMenu(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", path: "/about" },
    ...(!isAuthenticated
      ? [
          { name: "Signup", path: "/signup" },
          { name: "Login", path: "/login" },
        ]
      : []),
  ];

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      setIsOpen(false);
      setShowUserMenu(false);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 ${
        isCompact
          ? "py-4 glass-morphism shadow-2xl border-b border-primary/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
            <Link to="/" className="shrink-0 flex items-center">
            <img
              src="/logo.png"
              alt="BonRise Logo"
              className={`w-40 h-auto transition-all duration-500 ${
                !isCompact ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 text-xs font-black transition-all duration-300 relative group uppercase tracking-[0.2em] ${
                    isCompact
                      ? "text-primary hover:text-secondary"
                      : "text-neutral hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                      isCompact ? "bg-secondary" : "bg-white"
                    }`}
                  ></span>
                </Link>
              ))}

              {isAuthenticated && (
                <div 
                  className="relative ml-4 user-menu-container py-2"
                  onMouseEnter={() => setShowUserMenu(true)}
                  onMouseLeave={() => setShowUserMenu(false)}
                >
                  <button
                    className={`flex items-center gap-3 px-5 py-2.5 rounded-full border transition-all duration-300 ${
                      showUserMenu
                        ? "bg-secondary border-secondary text-white"
                        : isCompact
                        ? "border-primary/10 bg-primary/5 text-primary hover:border-secondary hover:text-secondary"
                        : "border-white/20 bg-white/10 text-white hover:border-white hover:bg-white/20"
                    }`}
                  >
                    <UserIcon size={14} className={showUserMenu ? "animate-pulse" : ""} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {user?.username}
                    </span>
                  </button>

                  <AnimatePresence>
                    {showUserMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute right-0 mt-2 w-48 py-2 glass-morphism rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
                      >
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center justify-between px-6 py-3 text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-500/10 transition-colors"
                        >
                          Logout
                          <LogOut size={14} />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 transition-all rounded-full border-2 active:scale-90 ${
                isCompact
                  ? "text-primary bg-primary/5 border-primary/10 hover:bg-secondary/10 hover:border-secondary"
                  : "text-white bg-white/5 border-white/20 hover:bg-white/10 hover:border-white"
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 transition-transform duration-300" />
              ) : (
                <Menu className="w-5 h-5 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 pt-8 pb-12 flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`group block w-full px-8 py-4 text-sm font-black rounded-full transition-all uppercase tracking-[0.2em] text-center ${
                      link.name === "Signup"
                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                        : "text-primary/70 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {isAuthenticated && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="flex flex-col gap-3 mt-4 pt-4 border-t border-primary/10"
                >
                  <div className="flex items-center gap-3 px-8 py-2 text-primary/50">
                    <UserIcon size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {user?.username}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="group block w-full px-8 py-4 text-sm font-black rounded-full transition-all uppercase tracking-[0.2em] text-center bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    Logout
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
