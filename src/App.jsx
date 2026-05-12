import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 dark:from-emerald-950 dark:via-emerald-950 dark:to-emerald-900 min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
