import { Leaf, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 pt-20 pb-12 border-t border-emerald-100 dark:border-emerald-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand & Description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-2xl flex items-center justify-center">
                <Leaf className="text-white" size={28} />
              </div>
              <span className="text-3xl font-semibold tracking-tight text-emerald-950 dark:text-white">
                Serenity
              </span>
            </div>

            <p className="text-emerald-600 dark:text-emerald-400 max-w-md text-lg leading-relaxed mb-8">
              Helping you build a calmer, healthier, and more mindful life — one
              gentle habit at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-emerald-950 dark:text-white font-medium mb-6">
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#features"
                  className="hover:text-emerald-900 dark:hover:text-white transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-emerald-900 dark:hover:text-white transition"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-emerald-900 dark:hover:text-white transition"
                >
                  Stories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-900 dark:hover:text-white transition"
                >
                  How it Works
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-emerald-950 dark:text-white font-medium mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-900 dark:hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-900 dark:hover:text-white transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-900 dark:hover:text-white transition"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-emerald-900 dark:hover:text-white transition"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-emerald-950 dark:text-white font-medium mb-6">
              Get in Touch
            </h4>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Mail size={20} className="mt-1 text-emerald-500" />
                <div>
                  <p className="text-sm">abdurazaq.dev23@gmail.com</p>
                  <p className="text-xs text-emerald-500">
                    We reply within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={20} className="mt-1 text-emerald-500" />
                <p className="text-sm">+92 306 5011190</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 text-emerald-500" />
                <p className="text-sm">San Francisco, California</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-10">
              <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-3">
                Stay updated with mindful tips
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-emerald-50 dark:bg-emerald-900 border border-emerald-200 dark:border-emerald-700 focus:border-emerald-500 rounded-l-2xl px-5 py-3 text-sm flex-1 outline-none"
                />
                <button className="bg-emerald-600 hover:bg-emerald-700 px-6 rounded-r-2xl text-white text-sm font-medium transition">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-100 dark:border-emerald-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-emerald-600 dark:text-emerald-400">
            © 2026 Serenity • Built with calm in mind
          </p>

          <div className="flex gap-6 text-xs">
            <a
              href="#"
              className="hover:text-emerald-900 dark:hover:text-white transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-emerald-900 dark:hover:text-white transition"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-emerald-900 dark:hover:text-white transition"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
