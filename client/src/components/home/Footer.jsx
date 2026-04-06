import AppLogo from "./AppLogo";

const Footer = () => {
  return (
    <footer className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-gradient-to-r from-white via-green-200/15 to-white mt-40">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
        <div className="flex flex-col gap-4 max-w-xs">
          <AppLogo />
          <p className="leading-relaxed">
            Making every customer feel valued — no matter the size of the
            audience.
          </p>
          <div className="flex items-center gap-4 mt-1">
            <a href="#" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 hover:text-green-500 transition"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/pradeep-reddy-1461201b3/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 hover:text-green-500 transition"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 hover:text-green-500 transition"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 sm:gap-12">
          <div>
            <p className="text-slate-800 font-semibold mb-3">Product</p>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Support
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Affiliate
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-slate-800 font-semibold mb-3">Resources</p>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Company
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Community
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-slate-800 font-semibold mb-3">Legal</p>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© 2026 Resume Lens. All rights reserved.</p>
        <p>Built with ❤️ for job seekers</p>
      </div>
    </footer>
  );
};

export default Footer;
