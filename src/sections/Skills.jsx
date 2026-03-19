import React from "react";

const skills = [
  { name: "React", img: "/images/logos/react.png" },
  { name: "React Native", img: "/images/logos/react.png" },
  { name: "Node.js", img: "/images/logos/node.png" },
  { name: "Python", img: "/images/logos/python.svg" },
  { name: "MongoDB", img: "/images/mongo.webp" },

  { name: "Three.js", img: "/images/logos/three.png" },
  { name: "API Integration", img: "/images/Api-integration-logo.jpg" },
  { name: "C++", img: "/images/C++.png" },
  { name: "PostgreSQL", img: "/images/postgres.png" },
    // 🔥 AI Layer
 
  { name: "RAG Pipelines", img: "/images/RAG.webp" },
  { name: "AI Integration", img: "/images/aicrop.png" },
];

const SkillRow = ({ reverse = false }) => {
  return (
    <div className="relative overflow-hidden w-full py-8 group">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <div
        className={`flex gap-12 w-max ${
          reverse ? "animate-scroll-right" : "animate-scroll-left"
        } group-hover:[animation-play-state:paused]`}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="group/card relative min-w-[160px] h-[160px] rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-800 flex flex-col items-center justify-center transition-all duration-500 hover:scale-110 hover:-translate-y-3 cursor-pointer"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />

            {/* Card content */}
            <div className="relative z-10 flex flex-col items-center">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-14 h-14 object-contain mb-3 transition-transform duration-500 group-hover/card:scale-110"
              />
              <p className="text-base text-gray-300 group-hover/card:text-white transition">
                {skill.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-4xl font-semibold mb-14">
        🚀 My Tech Stack
      </h2>

      <SkillRow />
    
    </section>
  );
};

export default Skills;