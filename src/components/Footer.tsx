import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Logo } from "./Logo";

interface FooterProps {
  language: "en" | "sw";
  onNavigate: (page: string) => void;
}

export function Footer({ language, onNavigate }: FooterProps) {
  const translations = {
    en: {
      about: "About Kijana Simama",
      aboutText:
        "Empowering youth to stand up and create positive change in their communities through education, mentorship, and opportunity.",
      quickLinks: "Quick Links",
      home: "Home",
      aboutUs: "About Us",
      services: "Services",
      campaigns: "Campaigns",
      events: "Events",
      contact: "Contact",
      getInvolved: "Get Involved",
      donate: "Make a Donation",
      volunteer: "Volunteer",
      partner: "Become a Partner",
      newsletter: "Newsletter",
      contactUs: "Contact Us",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    sw: {
      about: "Kuhusu Kijana Simama",
      aboutText:
        "Kuwapa nguvu vijana kusimama na kuunda mabadiliko mazuri katika jamii zao kupitia elimu, ushauri, na fursa.",
      quickLinks: "Viungo vya Haraka",
      home: "Nyumbani",
      aboutUs: "Kuhusu Sisi",
      services: "Huduma",
      campaigns: "Kampeni",
      events: "Matukio",
      contact: "Wasiliana",
      getInvolved: "Jiunga Nasi",
      donate: "Toa Mchango",
      volunteer: "Kuwa Mtoa Muda",
      partner: "Kuwa Mshirika",
      newsletter: "Jarida",
      contactUs: "Wasiliana Nasi",
      rights: "Haki zote zimehifadhiwa.",
      privacy: "Sera ya Faragha",
      terms: "Masharti ya Huduma",
    },
  };

  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <Logo variant="white" className="mb-4" />
            <p className="text-sm leading-relaxed">{t.aboutText}</p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-secondary transition-colors"
                >
                  {t.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-secondary transition-colors"
                >
                  {t.aboutUs}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="hover:text-secondary transition-colors"
                >
                  {t.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("campaigns")}
                  className="hover:text-secondary transition-colors"
                >
                  {t.campaigns}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("events")}
                  className="hover:text-secondary transition-colors"
                >
                  {t.events}
                </button>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-white mb-4">{t.getInvolved}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("donate")}
                  className="hover:text-secondary transition-colors"
                >
                  {t.donate}
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  {t.volunteer}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  {t.partner}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">{t.contactUs}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">+255 700 000 000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm">info@kijanasimama.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} Kijana Simama. {t.rights}
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm hover:text-secondary transition-colors"
              >
                {t.privacy}
              </a>
              <a
                href="#"
                className="text-sm hover:text-secondary transition-colors"
              >
                {t.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
