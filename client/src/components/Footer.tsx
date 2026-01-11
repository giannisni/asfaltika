import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 bg-primary flex items-center justify-center font-display font-bold text-white text-lg rounded-sm">
                A
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                YANNOS ASFALTIKA
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading the way in asphalt production and road construction since
              1995. Quality, durability, and innovation in every project.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-8 w-8 rounded bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-8 w-8 rounded bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-8 w-8 rounded bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display text-lg mb-6 border-l-4 border-primary pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/equipment"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/certifications"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Certifications
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display text-lg mb-6 border-l-4 border-primary pl-3">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  123 Construction Ave,
                  <br />
                  Industrial Zone, Thessaloniki, Greece
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+30 231000000</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>info@yannos.gr</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white font-display text-lg mb-6 border-l-4 border-primary pl-3">
              Working Hours
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-white font-medium">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white font-medium">09:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-primary font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} YANNOS ASFALTIKA LTD. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
