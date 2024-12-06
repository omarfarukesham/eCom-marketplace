// components/Footer.js

import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1: Company Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul>
                <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
                <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                <li><a href="/careers" className="hover:text-gray-400">Careers</a></li>
              </ul>
            </div>
  
            {/* Column 2: Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul>
                <li><a href="/faq" className="hover:text-gray-400">FAQ</a></li>
                <li><a href="/returns" className="hover:text-gray-400">Returns</a></li>
                <li><a href="/shipping" className="hover:text-gray-400">Shipping</a></li>
              </ul>
            </div>
  
            {/* Column 3: Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <ul className="flex space-x-4">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <Facebook />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                    <Twitter />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <Instagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  