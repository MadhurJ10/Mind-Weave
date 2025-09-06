import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ className }) => {
  return (
    // The key change for the look is here: bg-black/50, backdrop-blur-lg, and a top border
    <footer className={`w-full bg-black/30 backdrop-blur-lg border-t border-white/10 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main content grid */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-16 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Brand and Newsletter */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-white">MindWeave</h2>
            <h3 className="mt-8 text-lg font-semibold text-white">Join our newsletter</h3>
            <p className="mt-2 text-sm text-gray-400">
              Sign up to our mailing list below and be the first to know about new updates. Don't worry, we hate spam too.
            </p>
            <form className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"jnjnj
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#FF4533] sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-[#FF4533] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#FF2410] focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-[#FF4533] transition-colors"
              >
                Notify Me
              </button>
            </form>
          </div>

          {/* Column 2: Pages Links */}
          <div>
            <h3 className="text-md font-semibold text-white">Pages</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <Link to="/" className="text-sm leading-6 text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/features" className="text-sm leading-6 text-gray-300 hover:text-white">Features</Link>
              </li>
               <li>
                <Link to="/chat" className="text-sm leading-6 text-gray-300 hover:text-white">Start Mapping</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Information Links */}
          <div>
            <h3 className="text-md font-semibold text-white">Information</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Legal</a>
              </li>
              <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Privacy Policy</a>
              </li>
               <li>
                <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Terms of Service</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar with copyright and social links */}
        <div className="mt-8 border-t border-white/10 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs leading-5 text-gray-400 md:order-1">
            &copy; {new Date().getFullYear()} MindWeave. All rights reserved.
          </p>
          <div className="flex space-x-6 md:order-2 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-400">
              <span className="sr-only">Twitter</span>
              <i className="ri-twitter-x-line text-xl"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400">
              <span className="sr-only">GitHub</span>
              <i className="ri-github-fill text-xl"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400">
              <span className="sr-only">LinkedIn</span>
              <i className="ri-linkedin-box-fill text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;