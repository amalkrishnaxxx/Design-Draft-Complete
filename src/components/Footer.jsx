import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { companyInfo } from '../data/mock';
import logo from "../assets/design_draft_text_logo.svg"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Builders in Thrissur', path: '/builders-in-thrissur' },
    { name: 'Developers in Thrissur', path: '/developers-in-thrissur' },
    { name: 'Architects in Thrissur', path: '/architects-in-thrissur' },
    { name: 'Interior Designers in Thrissur', path: '/interior-designers-in-thrissur' },
    { name: 'Contractors in Thrissur', path: '/contractors-in-thrissur' },
    { name: 'Villa Developers in Thrissur', path: '/villa-developers-in-thrissur' },
    { name: 'Construction Cost Thrissur', path: '/construction-cost-thrissur' },
    { name: 'Builders in Irinjalakuda', path: '/builders-in-irinjalakuda' },
    { name: 'Builders in Chalakudy', path: '/builders-in-chalakudy' },
    { name: 'Builders in Kodungallur', path: '/builders-in-kodungallur' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { name: 'Architectural Design', path: '/architects-in-thrissur' },
    { name: 'Interior Design', path: '/interior-designers-in-thrissur' },
    { name: 'Exterior Design', path: '/designers-in-thrissur' },
    { name: 'Construction & Contracting', path: '/contractors-in-thrissur' },
    { name: 'Home Development', path: '/home-developers-in-thrissur' },
    { name: 'Villa Development', path: '/villa-developers-in-thrissur' }
  ];

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <img
              src={logo?.src || logo}
              alt="Design Draft Logo"
              className="h-10 md:h-12 w-auto"
            />
            <p className="text-sm leading-relaxed">
              Thrissur's leading home builders and developers with 25+ years of trusted experience.
              Delivering quality residential and commercial projects across Kerala.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Designdraft13"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
                aria-label="Design Draft on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/_design_draft/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-500 transition-colors duration-200"
                aria-label="Design Draft on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-sm hover:text-orange-500 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm">{companyInfo.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-sm hover:text-orange-500 transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm hover:text-orange-500 transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-gray-400">
              Copyright {currentYear} Design Draft. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="#" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
