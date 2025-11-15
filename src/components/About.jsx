import HeroParticles from "./HeroParticles";

export default function About() {
  return (
    <section id="about" className="py-20 max-w-3xl mx-auto text-center">
        <HeroParticles />
      <h2 className="text-4xl font-bold mb-6 text-[#00e5ff]">About Me</h2>
      <p className="text-lg leading-relaxed">
        I'm Billal, a full-stack developer specializing in Node.js, Express,
        MongoDB and modern frontend technologies. I love building real-time
        applications, AI tools, and high-performance backend systems. I focus
        on clean architecture, reliable deployment (AWS / Render / Netlify), and
        developer experience.
      </p>
    </section>
  );
}