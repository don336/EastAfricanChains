import React from "react";
import {
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-white">EAST</span>
              <span className="text-xl font-bold text-orange-400">AFRICAN</span>
              <span className="text-xl font-bold text-white">CHAINS</span>
            </div>
            <p className="text-blue-200 mb-4">
              Your trusted partner for high-quality industrial chains and
              components across East Africa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-orange-400">
                <FaFacebook />
              </a>
              <a href="#" className="text-blue-300 hover:text-orange-400">
                <FaTwitter />
              </a>
              <a href="#" className="text-blue-300 hover:text-orange-400">
                <FaLinkedin />
              </a>
              <a href="#" className="text-blue-300 hover:text-orange-400">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-sm mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-orange-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-orange-400">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-orange-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-orange-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-orange-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-sm mr-2"></span>
              Products
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-orange-400">
                  Industrial Chains
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-orange-400">
                  Conveyor Chains
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-orange-400">
                  Marine Chains
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-orange-400">
                  Agricultural Chains
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-orange-400">
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-sm mr-2"></span>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-orange-400" />
                <span>
                  Plot 123, Industrial Area
                  <br />
                  Kampala, Uganda
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-orange-400" />
                <span>+256 700 123456</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-orange-400" />
                <span>info@eastafricanchains.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 text-center">
          <p className="text-blue-200">
            &copy; {new Date().getFullYear()} East African Chains. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
