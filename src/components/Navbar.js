import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [ismenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-max bg-gradient-to-r from-indigo-600 via purple-600 to-teal-500  shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* logo and brand */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white bg-opacity-20 bg-white px-3 py-1 rounded-lg">
                NRA
              </span>
              <span className="hidden md:block ml-4 text-white font-semibold text-lg">
                Nimsara Ravindu Aluthgedara
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Tracer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!ismenuOpen)}
                className="text-white hover:text-teal-200 focus:outline-none transition duration-200"
              >
                {ismenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          {ismenuOpen && (
            <div className="md:hidden bg-gradient-to-b from-indigo-600 to-purple-600 px-4 pt-4 pb-2">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="block text-white hover:text-teal-200 px-3 py-2 rounded-md transition-color duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-white hover:text-teal-200 px-3 py-2 rounded-md transition-color duration-200"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-white hover:text-teal-200 px-3 py-2 rounded-md transition-color duration-200"
                  >
                    Tracer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-white hover:text-teal-200 px-3 py-2 rounded-md transition-color duration-200"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-white hover:text-teal-200 px-3 py-2 rounded-md transition-color duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
