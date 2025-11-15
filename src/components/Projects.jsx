import madad from "../assets/madad.png";
import sport from "../assets/sport.png";
import shoe from "../assets/shoe.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const projects = [
    {
      name: "Madad App",
      link: "https://madad-frontend.onrender.com/",
      img: madad,
    },
    {
      name: "ShowCrew",
      link: "https://showcrew.netlify.app/",
      img: shoe,
    },
    {
      name: "21 Sports Club",
      link: "https://21sportclub.netlify.app/",
      img: sport,
    },
    // {
    //   name: "Upcoming Project",
    //   link: "#",
    //   img: "https://via.placeholder.com/600x400?text=Coming+Soon",
    // },
  ];

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1", "1 1"],
  });

  const parallax = useTransform(scrollYProgress, [0, 1], [60, 0]);

  const cardVariant = {
    hidden: { opacity: 0, filter: "blur(20px)", y: 50 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 max-w-3xl mx-auto text-center"
    >
      <h2 className="text-4xl font-bold mb-10 text-[#00e5ff]">Projects</h2>

      {/* Only ONE card per row */}
      <motion.div style={{ y: parallax }} className="flex flex-col gap-10 px-4">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            variants={cardVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.25 }}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#0f1724] p-6 rounded-2xl shadow-xl transition hover:scale-[1.02] hover:shadow-[0_0_40px_#00e5ff]/30"
          >
            <div className="overflow-hidden rounded-xl mb-5">
              <motion.img
                src={p.img}
                alt={p.name}
                className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition"
              />
            </div>
            <h3 className="text-2xl font-semibold">{p.name}</h3>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
