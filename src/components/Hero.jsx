import { motion } from "framer-motion";
import { Heart, Users, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50 dark:from-emerald-950 dark:via-emerald-900 dark:to-emerald-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-7xl font-light leading-tight text-emerald-950 dark:text-white">
            Calm begins with
            <br />
            <span className="text-emerald-600 dark:text-emerald-400">
              awareness
            </span>
          </h1>
          <p className="text-xl text-emerald-700 dark:text-emerald-300 max-w-md">
            Track habits, understand your mood, and build a more peaceful,
            balanced life.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-3xl text-lg font-medium transition shadow-xl shadow-emerald-600/30">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-emerald-300 dark:border-emerald-700 hover:bg-white dark:hover:bg-emerald-900 rounded-3xl text-lg font-medium transition">
              Watch Demo
            </button>
          </div>

          <div className="flex gap-8 text-sm text-emerald-600 dark:text-emerald-400">
            <div className="flex items-center gap-2">
              <Users className="text-emerald-500" />{" "}
              <span>50,000+ members</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="text-emerald-500" />{" "}
              <span>4.9 on App Store</span>
            </div>
          </div>
        </motion.div>

        {/* Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, rotate: -12, y: 50 }}
          animate={{ opacity: 1, rotate: 0, y: 0 }}
          transition={{ duration: 1.1 }}
          className="relative flex justify-center"
        >
          <div className="relative z-10 bg-black rounded-[3.5rem] p-4 shadow-2xl shadow-black/70">
            <div className="bg-[#0a0f1c] w-[310px] h-[620px] rounded-[2.8rem] overflow-hidden relative border border-white/10">
              <div className="p-6 h-full text-white">
                <p className="text-emerald-400 text-sm">
                  Good morning, Abdu Razaq
                </p>
                <p className="text-2xl font-medium mt-1">
                  How are you feeling today?
                </p>

                <div className="mt-10 flex justify-center">
                  <div className="relative w-52 h-52">
                    <svg viewBox="0 0 100 100" className="w-52 h-52">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="#1e2937"
                        strokeWidth="9"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="#34d399"
                        strokeWidth="9"
                        strokeDasharray="264"
                        strokeDashoffset="70"
                        initial={{ strokeDashoffset: 264 }}
                        animate={{ strokeDashoffset: 70 }}
                        transition={{ duration: 2 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-6xl font-light">82</span>
                      <span className="text-xs tracking-widest text-emerald-400">
                        WELLNESS SCORE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-12 bg-emerald-500/20 dark:bg-emerald-400/10 blur-3xl rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
