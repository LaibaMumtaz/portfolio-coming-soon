import React from "react";

const benefits = [
  {
    icon: "💻",
    title: "Clean UI",
    description: "Minimal, aesthetic and modern user interface design.",
    color: "from-pink-300 via-pink-200 to-pink-100",
  },
  {
    icon: "✨",
    title: "Smooth UX",
    description: "Simple, intuitive navigation and seamless user experience.",
    color: "from-teal-300 via-teal-200 to-teal-100",
  },
  {
    icon: "🎨",
    title: "Creative Work",
    description: "Real-world projects designed with care and detail.",
    color: "from-indigo-300 via-indigo-200 to-indigo-100",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-white px-8">
      <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
        What to Expect
      </h3>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-2xl shadow-md border border-gray-200 bg-gradient-to-br ${benefit.color} transition hover:scale-105`}
          >
            <div className="text-5xl mb-4">{benefit.icon}</div>
            <h4 className="text-xl font-semibold mb-2 text-gray-900">
              {benefit.title}
            </h4>
            <p className="text-gray-700">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
