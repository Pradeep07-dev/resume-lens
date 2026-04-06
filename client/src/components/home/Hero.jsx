import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Menu, X } from "lucide-react";
import AppLogo from "./AppLogo";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="flex fixed top-0 left-0 items-center justify-between p-4 lg:px-10 xl:px-32 md:py-6 w-full bg-white/60 backdrop-blur-md z-50">
        <AppLogo />

        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#" className="hover:text-gray-600">
            Home
          </a>
          <a href="#features" className="hover:text-gray-600">
            Features
          </a>
          <a href="#testimonials" className="hover:text-gray-600">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-gray-600">
            Contact
          </a>
        </div>

        <Link
          to="/app?state=login"
          className="hidden md:block bg-gray-800 hover:bg-black text-white px-6 py-3 cursor-pointer rounded-full font-medium"
        >
          Login
        </Link>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md"
        >
          <Menu />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-white/90 backdrop-blur-md flex flex-col items-center justify-center gap-8 font-medium text-lg">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-600"
          >
            Home
          </a>
          <a
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-600"
          >
            Features
          </a>
          <a
            href="#testimonials"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-600"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-600"
          >
            Contact
          </a>

          <button
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-gray-800 hover:bg-black text-white p-2 rounded-md"
          >
            <X />
          </button>
        </div>
      )}

      <section
        className="w-full min-h-screen bg-no-repeat bg-cover bg-center text-sm pb-44 flex flex-col justify-center"
        style={{
          backgroundImage: `
      radial-gradient(ellipse at center, oklch(92.5% .024 155.995) 0%, transparent 70%),
      url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')
    `,
        }}
      >
        <div className="flex items-center gap-2 border border-slate-300 hover:border-slate-400/70 rounded-full mx-2 sm:w-max sm:mx-auto px-4 py-2 mt-40 md:mt-32">
          <span>Job market is competitive - Is your resume ready?</span>
          <button className="flex items-center gap-1 font-medium">
            <span>Check now →</span>
          </button>
        </div>

        <h5 className="text-4xl md:text-7xl font-medium max-w-212.5 text-center mx-auto mt-8">
          Land your dream job with AI-powered resumes
        </h5>

        <p className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2">
          Create, edit and download professional resumes with AI-powered
          assistance.
        </p>

        <div className="mx-auto w-full flex items-center justify-center gap-3 mt-4">
          <Link
            to="/app?state=register"
            className="bg-slate-800 hover:bg-black cursor-pointer text-white px-6 py-3 rounded-full font-medium"
          >
            Get Started
          </Link>

          <button className="flex items-center gap-2 border border-slate-300 hover:bg-slate-200/30 cursor-pointer rounded-full px-6 py-3">
            Learn More →
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
