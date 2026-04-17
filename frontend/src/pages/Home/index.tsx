import { useEffect } from "react";
import { Hero } from "../../components/Landing/Hero"
import { About } from "../../components/Landing/About"
import { Services } from "../../components/Landing/Services"
import { ContactCTA } from "../../components/Landing/ContactCTA"

const Home = () => {
  useEffect(() => {
    // Enable smooth scroll only for Home page
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      // Restore default behavior on unmount
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <ContactCTA />
    </>
  )
}

export default Home