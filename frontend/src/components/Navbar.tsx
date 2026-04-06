import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogOut, User as UserIcon } from "lucide-react";
import {
  useLogoutMutation,
  useCheckAuthQuery,
} from "../state/services/auth/authAPI";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { data: authData } = useCheckAuthQuery();
  const user = authData?.data;
  const isAuthenticated = !!user;

  const [logout] = useLogoutMutation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
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
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 overflow-hidden ${
        scrolled || isOpen
          ? "py-4 glass-morphism shadow-2xl border-b border-primary/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo Section */}
          <Link to="/" className="shrink-0 flex items-center">
            <img
              src="/logo.png"
              alt="BonRise Logo"
              className={`w-40 h-auto transition-all duration-500 ${
                !scrolled && !isOpen ? "brightness-0 invert" : ""
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
                    scrolled
                      ? "text-primary hover:text-secondary"
                      : "text-neutral hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                      scrolled ? "bg-secondary" : "bg-white"
                    }`}
                  ></span>
                </Link>
              ))}

              {isAuthenticated && (
                <div className="flex items-center gap-4 ml-4">
                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                      scrolled
                        ? "border-primary/10 bg-primary/5 text-primary"
                        : "border-white/20 bg-white/10 text-white"
                    }`}
                  >
                    <UserIcon size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      {user?.username}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className={`p-2 rounded-full transition-all hover:scale-110 ${
                      scrolled
                        ? "text-primary hover:bg-primary/5"
                        : "text-white hover:bg-white/10"
                    }`}
                    title="Logout"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 transition-all rounded-full border-2 active:scale-90 ${
                scrolled || isOpen
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
                >
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
