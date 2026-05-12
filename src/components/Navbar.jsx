import { useState } from "react";
import { Leaf, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-emerald-950/80 backdrop-blur-lg border-b border-emerald-100 dark:border-emerald-800">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-600 rounded-2xl flex items-center justify-center">
              <Leaf className="text-white" size={24} />
            </div>
            <span className="text-2xl font-semibold tracking-tight text-emerald-950 dark:text-white">
              Serenity
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-emerald-700 dark:text-emerald-300">
            <a
              href="#features"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              Stories
            </a>
            <a
              href="#pricing"
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              Pricing
            </a>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-2xl hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-all active:scale-95"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun size={20} className="text-amber-400" />
              ) : (
                <Moon size={20} className="text-emerald-700" />
              )}
            </button>

            <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-sm font-medium transition shadow-lg">
              Get Started Free
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-3 rounded-2xl hover:bg-emerald-100 dark:hover:bg-emerald-900 transition"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-6 border-t border-emerald-100 dark:border-emerald-800 bg-white dark:bg-emerald-950 rounded-3xl">
            <div className="flex flex-col gap-6 px-6 text-lg">
              <a
                href="#features"
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Stories
              </a>
              <a
                href="#pricing"
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>

              <div className="pt-4 border-t border-emerald-100 dark:border-emerald-800 flex flex-col gap-4">
                {/* Theme Toggle in Mobile */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 text-left py-3"
                >
                  {isDark ? <Sun size={24} /> : <Moon size={24} />}
                  <span>Switch to {isDark ? "Light" : "Dark"} Mode</span>
                </button>

                <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-base font-medium transition">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
