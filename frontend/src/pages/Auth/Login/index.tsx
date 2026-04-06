import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLoginMutation } from "../../../state/services/auth/authAPI";
import { motion } from "framer-motion";
import type { AxiosBaseQueryError } from "../../../lib/axiosBaseQuery";

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(credentials).unwrap();
      navigate("/");
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary px-4 relative overflow-hidden py-32">
      {/* Ambient Background Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vh] bg-accent-1/20 blur-[120px] -z-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-secondary/10 blur-[100px] -z-10 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-accent-2/5 blur-[150px] -z-20 rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md z-10"
      >
        <div className="glass-morphism p-10 rounded-[2.5rem] border border-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
          <div className="text-center mb-10">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-black text-primary uppercase tracking-tighter mb-3"
            >
              Welcome <span className="text-accent-3">Back</span>
            </motion.h1>
            <p className="text-primary/60 text-[10px] font-bold uppercase tracking-[0.2em]">
              Access your BonRise account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="space-y-2">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-5">
                Email Address
              </label>
              <div className="relative group">
                <input
                  type="email"
                  required
                  className="w-full bg-white/40 border border-primary/10 rounded-full px-7 py-4.5 text-primary placeholder-primary/30 focus:outline-none focus:border-secondary transition-all duration-300"
                  placeholder="name@example.com"
                  onChange={(e) =>
                    setCredentials({ ...credentials, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-primary/80 ml-5">
                Password
              </label>
              <div className="relative group">
                <input
                  type="password"
                  required
                  className="w-full bg-white/40 border border-primary/10 rounded-full px-7 py-4.5 text-primary placeholder-primary/30 focus:outline-none focus:border-secondary transition-all duration-300"
                  placeholder="••••••••"
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="bg-red-500/10 border border-red-500/20 text-red-600 text-[10px] font-bold uppercase py-3 px-5 rounded-2xl text-center tracking-widest"
              >
                {(error as AxiosBaseQueryError).data?.message ||
                  "Authentication failed"}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full relative overflow-hidden group py-5 rounded-full font-black uppercase tracking-[0.3em] text-xs transition-all duration-500 ${
                isLoading
                  ? "bg-primary/10 text-primary/40 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-secondary hover:shadow-[0_20px_40px_rgba(46,196,182,0.3)]"
              }`}
            >
              <span className="relative z-10">
                {isLoading ? "Logging in..." : "Login"}
              </span>
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/40">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-accent-3 hover:text-primary transition-colors duration-300 ml-1 border-b border-accent-3/30"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
