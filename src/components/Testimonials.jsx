import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    text: "Serenity helped me build consistent meditation and journaling habits. My anxiety has reduced significantly.",
    avatar: "🧘‍♀️",
  },
  {
    name: "Marcus Chen",
    role: "Teacher",
    text: "The mood tracking is so insightful. I finally understand my emotional patterns.",
    avatar: "📚",
  },
  {
    name: "Aisha Khan",
    role: "Freelancer",
    text: "Beautiful design and actually works. Best wellness app I've used.",
    avatar: "🌿",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-emerald-50 dark:bg-emerald-950"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16 text-emerald-950 dark:text-white">
          Real people. Real calm.
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-emerald-900 p-8 rounded-3xl shadow-lg border border-emerald-100 dark:border-emerald-800"
            >
              <div className="text-4xl mb-6">{t.avatar}</div>
              <p className="text-lg leading-relaxed text-emerald-800 dark:text-emerald-100 mb-6">
                “{t.text}”
              </p>
              <div>
                <p className="font-medium text-emerald-950 dark:text-white">
                  {t.name}
                </p>
                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
