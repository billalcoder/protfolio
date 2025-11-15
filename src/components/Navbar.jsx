export default function Navbar() {
  const links = ["hero", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#071025]/80 backdrop-blur px-6 py-3 rounded-full shadow-lg flex gap-6 z-50">
      {links.map((l) => (
        <a
          key={l}
          href={`#${l}`}
          className="capitalize text-sm hover:text-[#00e5ff] transition"
        >
          {l}
        </a>
      ))}
    </nav>
  );
}