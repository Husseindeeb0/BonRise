import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import AboutUs from "./pages/About";
import { useAuth } from "./hooks/useAuth";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";

function App() {
  const { isLoading } = useAuth();

  return (
    <div className="min-h-screen bg-background selection:bg-secondary selection:text-white font-outfit">
      <ScrollToTop />
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      <Navbar />
      <main className="relative overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
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
