export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 text-[#00e5ff]">Contact</h2>
      <p className="text-lg mb-4">Email me at:</p>
      <a
        href="mailto:billalshekhani23@gmail.com"
        className="text-[#00e5ff] underline hover:text-[#bf00ff]"
      >
        billalshekhani23@gmail.com
      </a>
      <form className="mt-8 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your name"
          className="bg-[#071025] px-4 py-2 rounded"
        />
        <input
          type="email"
          placeholder="Your email"
          className="bg-[#071025] px-4 py-2 rounded"
        />
        <textarea
          placeholder="Message"
          className="bg-[#071025] px-4 py-2 rounded h-32"
        />
        <button
          type="button"
          className="px-6 py-2 rounded-full self-center text-black bg-gradient-to-r from-[#00e5ff] to-[#bf00ff]"
        >
          Send
        </button>
      </form>
    </section>
  );
}