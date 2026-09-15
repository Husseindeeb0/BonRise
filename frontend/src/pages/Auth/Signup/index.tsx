import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSignupMutation } from "../../../state/services/auth/authAPI";
import { motion } from "framer-motion";
import type { AxiosBaseQueryError } from "../../../lib/axiosBaseQuery";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signup, { isLoading, error }] = useSignupMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(formData).unwrap();
      navigate("/");
    } catch (err) {
      console.error("Signup failed", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary px-4 relative overflow-hidden">
      {/* Ambient Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vh] bg-accent-1/20 blur-[120px] -z-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vh] bg-secondary/10 blur-[100px] -z-10 rounded-full animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-sm z-10"
      >
        <div className="glass-morphism p-7 rounded-2xl border border-white/20 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
          <div className="text-center mb-5">
            <motion.h1
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-black text-primary uppercase tracking-tighter mb-1"
            >
              Join <span className="text-accent-3">BonRise</span>
            </motion.h1>
            <p className="text-primary/50 text-[10px] font-bold uppercase tracking-[0.2em]">
              Initialize your growth portal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="space-y-1">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-3">
                Username
              </label>
              <input
                type="text"
                required
                className="w-full bg-white/40 border border-primary/10 rounded-full px-5 py-2 text-sm text-primary placeholder-primary/30 focus:outline-none focus:border-secondary transition-all duration-300"
                placeholder="johndoe"
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-3">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full bg-white/40 border border-primary/10 rounded-full px-5 py-2 text-sm text-primary placeholder-primary/30 focus:outline-none focus:border-secondary transition-all duration-300"
                placeholder="name@example.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-3">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full bg-white/40 border border-primary/10 rounded-full px-5 py-2 text-sm text-primary placeholder-primary/30 focus:outline-none focus:border-secondary transition-all duration-300"
                placeholder="••••••••"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            {error && "data" in error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-red-500/10 border border-red-500/20 text-red-600 text-[10px] font-bold uppercase py-2 px-4 rounded-xl text-center tracking-widest"
              >
                {(error as AxiosBaseQueryError).data?.message ||
                  "Registration failed"}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full relative overflow-hidden py-3 rounded-full font-black uppercase tracking-[0.3em] text-xs transition-all duration-500 ${
                isLoading
                  ? "bg-primary/10 text-primary/40 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-secondary hover:shadow-[0_16px_32px_rgba(46,196,182,0.3)]"
              }`}
            >
              <span className="relative z-10">
                {isLoading ? "Creating..." : "Create Account"}
              </span>
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/40">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-accent-3 hover:text-primary transition-colors duration-300 ml-1 border-b border-accent-3/30"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
