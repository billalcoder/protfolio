import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

export default function Skills() {
  // MAIN DEVELOPMENT SKILLS
  const mainSkills = [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 85 },
    { name: "JavaScript", value: 92 },
    { name: "Node.js", value: 88 },
    { name: "Express.js", value: 87 },
    { name: "MongoDB", value: 86 },
    { name: "React.js", value: 80 },
  ];

  // TOOLS
  const tools = [
    { name: "AWS", value: 70 },
    { name: "Docker", value: 60 },
    { name: "Git", value: 85 },
    { name: "Linux", value: 75 },
    { name: "Firebase", value: 65 },
    { name: "Nginx", value: 70 },
  ];

  const barVariant = {
    hidden: { opacity: 0, filter: "blur(15px)", width: "0%" },
    show: (value) => ({
      opacity: 1,
      filter: "blur(0px)",
      width: `${value}%`,
      transition: { duration: 1.2, ease: "easeOut" },
    }),
  };

  // 🔥 PARALLAX SCROLL
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1", "1 1"],
  });

  const parallax = useTransform(scrollYProgress, [0, 1], [100, 0]); // Moves down → up

  return (
    <motion.section
      id="skills"
      ref={sectionRef}
      style={{ y: parallax }}
      className="py-20 max-w-4xl mx-auto"
    >
      {/* ----------------- MAIN SKILLS ----------------- */}
      <h2 className="text-4xl font-bold mb-10 text-center text-[#00e5ff]">
        My Skills
      </h2>

      {/* Radar Chart */}
      <div className="w-full h-96 px-4 mb-20">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={mainSkills}>
            <PolarGrid stroke="#1e2a47" />
            <PolarAngleAxis dataKey="name" tick={{ fill: "#fff" }} />
            <PolarRadiusAxis stroke="#00e5ff" tick={{ fill: "#aaa" }} />
            <Radar
              name="Skills"
              dataKey="value"
              stroke="#00e5ff"
              fill="#00e5ff"
              fillOpacity={0.45}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* ----------------- TOOLS SECTION ----------------- */}
      <h2 className="text-4xl font-bold mb-10 text-center text-[#00e5ff]">
        Tools I Use
      </h2>

      <div className="space-y-6 px-4">
        {tools.map((tool) => (
          <div key={tool.name} className="mb-4">
            <div className="flex justify-between mb-1">
              <span>{tool.name}</span>
              <span>{tool.value}%</span>
            </div>

            <div className="w-full bg-[#071025] rounded h-4 overflow-hidden">
              <motion.div
                className="h-4 rounded-lg"
                style={{
                  background: "linear-gradient(90deg, #00e5ff, #bf00ff)",
                  boxShadow: "0 0 14px rgba(0,229,255,0.35)",
                }}
                variants={barVariant}
                initial="hidden"
                whileInView="show"
                custom={tool.value}
                viewport={{ once: true }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
