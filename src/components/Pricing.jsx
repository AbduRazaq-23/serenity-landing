import { useState } from "react";
import { Check, Star } from "lucide-react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 0 : 0,
      period: "",
      description: "Perfect for getting started",
      features: [
        "Basic habit tracking",
        "Daily mood logging",
        "Limited insights",
        "Watermark on exports",
      ],
      buttonText: "Get Started Free",
      popular: false,
      buttonStyle:
        "border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900",
    },
    {
      name: "Premium",
      price: isAnnual ? 4.99 : 7.99,
      period: "/month",
      description: "Best for personal growth",
      features: [
        "Unlimited habit tracking",
        "Advanced mood insights",
        "Habit streaks & reminders",
        "Apple Health & Google Fit sync",
        "Guided audio sessions",
        "Ad-free experience",
      ],
      buttonText: "Start Premium",
      popular: true,
      buttonStyle: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg",
    },
    {
      name: "Pro",
      price: isAnnual ? 9.99 : 14.99,
      period: "/month",
      description: "For deep wellness seekers",
      features: [
        "Everything in Premium",
        "AI-powered insights",
        "Custom habit templates",
        "Priority support",
        "Family sharing (up to 4)",
        "Lifetime progress export",
      ],
      buttonText: "Go Pro",
      popular: false,
      buttonStyle:
        "border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900",
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-white dark:bg-emerald-950">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-light mb-4 text-emerald-950 dark:text-white">
          Simple pricing for lasting change
        </h2>
        <p className="text-xl text-emerald-600 dark:text-emerald-400 mb-12">
          14-day free trial on all paid plans • Cancel anytime
        </p>

        {/* Annual / Monthly Toggle */}
        <div className="inline-flex bg-emerald-100 dark:bg-emerald-900 rounded-full p-1 mb-12">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-8 py-3 rounded-full text-sm font-medium transition ${
              !isAnnual
                ? "bg-white dark:bg-emerald-800 shadow"
                : "text-emerald-700 dark:text-emerald-300"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-8 py-3 rounded-full text-sm font-medium transition ${
              isAnnual
                ? "bg-white dark:bg-emerald-800 shadow"
                : "text-emerald-700 dark:text-emerald-300"
            }`}
          >
            Annual <span className="text-emerald-500 text-xs">(Save 37%)</span>
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-emerald-900 rounded-3xl p-8 shadow-xl border transition-all hover:-translate-y-2 ${
                plan.popular
                  ? "border-emerald-500 shadow-emerald-500/20 scale-105"
                  : "border-emerald-100 dark:border-emerald-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-medium px-6 py-1.5 rounded-full flex items-center gap-1">
                  <Star size={16} /> MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-semibold mb-1 text-emerald-950 dark:text-white">
                {plan.name}
              </h3>
              <p className="text-emerald-600 dark:text-emerald-400 text-sm mb-6">
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-6xl font-light text-emerald-950 dark:text-white">
                  ${plan.price}
                </span>
                <span className="text-emerald-600 dark:text-emerald-400">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 text-left mb-10">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-emerald-700 dark:text-emerald-300"
                  >
                    <Check className="text-emerald-500 mt-0.5" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl text-base font-medium transition ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
