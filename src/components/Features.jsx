import { motion } from "framer-motion";
import { Leaf, Heart, TrendingUp, Bell, BookOpen, Users } from "lucide-react";

const features = [
  {
    icon: <Leaf className="w-10 h-10" />,
    title: "Habit Tracker",
    desc: "Build meaningful routines with smart streaks and gentle reminders.",
    color: "emerald",
  },
  {
    icon: <Heart className="w-10 h-10" />,
    title: "Mood Journal",
    desc: "Daily emotional check-ins with insightful reflections.",
    color: "rose",
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Wellness Insights",
    desc: "Beautiful visualizations of your progress and patterns.",
    color: "amber",
  },
  {
    icon: <Bell className="w-10 h-10" />,
    title: "Mindful Reminders",
    desc: "Supportive notifications that never feel overwhelming.",
    color: "sky",
  },
  {
    icon: <BookOpen className="w-10 h-10" />,
    title: "Guided Sessions",
    desc: "Expert meditations and breathing exercises.",
    color: "violet",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Private Community",
    desc: "Connect with others on the same journey.",
    color: "teal",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white dark:bg-emerald-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-light text-emerald-950 dark:text-white mb-4"
          >
            Designed for real life
          </motion.h2>
          <p className="text-xl text-emerald-600 dark:text-emerald-400 max-w-2xl mx-auto">
            Thoughtfully crafted tools that help you build lasting wellness
            habits
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-emerald-900 border border-emerald-100 dark:border-emerald-800 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 bg-${feature.color}-100 dark:bg-${feature.color}-950 text-${feature.color}-600 dark:text-${feature.color}-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-medium mb-3 text-emerald-950 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-emerald-600 dark:text-emerald-300 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
