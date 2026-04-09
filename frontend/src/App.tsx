import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Landing/Hero";
import About from "./components/Landing/About";
import Services from "./components/Landing/Services";
import ContactCTA from "./components/Landing/ContactCTA";
import Footer from "./components/Footer";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import AboutUs from "./pages/About";
import { useAuth } from "./hooks/useAuth";
import Loader from "./components/Loader";
import { AnimatePresence } from "framer-motion";

function App() {
  const { isLoading } = useAuth();

  return (
    <div className="min-h-screen bg-background selection:bg-secondary selection:text-white font-outfit">
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>
      
      <Navbar />
      <main className="relative overflow-hidden">
        {/* Subtle background glow effects */}
        <div className="fixed top-0 left-0 w-[50vw] h-[50vh] bg-secondary/10 blur-[150px] -z-10 rounded-full animate-pulse"></div>
        <div className="fixed bottom-0 right-0 w-[40vw] h-[40vh] bg-accent-1/5 blur-[120px] -z-10 rounded-full"></div>

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Services />
              <ContactCTA />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
