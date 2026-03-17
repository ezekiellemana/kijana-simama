import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Logo } from "./Logo";

interface FooterProps {
  language: "en" | "sw";
  onNavigate: (page: string) => void;
}

interface NavLink {
  id: string;
  label: string;
}

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

interface Translations {
  aboutText: string;
  quickLinks: string;
  home: string;
  aboutUs: string;
  services: string;
  campaigns: string;
  events: string;
  gallery: string;
  partners: string;
  faqs: string;
  getInvolved: string;
  donate: string;
  volunteer: string;
  partner: string;
  contact: string;
  contactUs: string;
  rights: string;
  privacy: string;
  terms: string;
  address: string;
  phone: string;
  email: string;
  tagline: string;
}

export function Footer({ language, onNavigate }: FooterProps) {
  const translations: Record<"en" | "sw", Translations> = {
    en: {
      aboutText:
        "Empowering youth to stand up and create positive change in their communities through education, mentorship, and opportunity.",
      quickLinks: "Quick Links",
      home: "Home",
      aboutUs: "About Us",
      services: "Services",
      campaigns: "Campaigns",
      events: "Events",
      gallery: "Gallery",
      partners: "Partners",
      faqs: "FAQs",
      getInvolved: "Get Involved",
      donate: "Make a Donation",
      volunteer: "Volunteer",
      partner: "Become a Partner",
      contact: "Contact",
      contactUs: "Contact Us",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      address: "Dar es Salaam, Tanzania",
      phone: "+255 700 000 000",
      email: "info@kijanasimama.org",
      tagline: "Empowering Youth to Stand Tall",
    },
    sw: {
      aboutText:
        "Kuwapa nguvu vijana kusimama na kuunda mabadiliko mazuri katika jamii zao kupitia elimu, ushauri, na fursa.",
      quickLinks: "Viungo vya Haraka",
      home: "Nyumbani",
      aboutUs: "Kuhusu Sisi",
      services: "Huduma",
      campaigns: "Kampeni",
      events: "Matukio",
      gallery: "Picha",
      partners: "Washirika",
      faqs: "Maswali",
      getInvolved: "Jiunga Nasi",
      donate: "Toa Mchango",
      volunteer: "Kuwa Mtoa Muda",
      partner: "Kuwa Mshirika",
      contact: "Wasiliana",
      contactUs: "Wasiliana Nasi",
      rights: "Haki zote zimehifadhiwa.",
      privacy: "Sera ya Faragha",
      terms: "Masharti ya Huduma",
      address: "Dar es Salaam, Tanzania",
      phone: "+255 700 000 000",
      email: "info@kijanasimama.org",
      tagline: "Kuwapa Nguvu Vijana Kusimama Wima",
    },
  };

  const t: Translations = translations[language];

  const gradientText: CSSProperties = {
    background:
      "linear-gradient(135deg, #00f260 0%, #0575e6 50%, #1fa2ff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const quickLinks: NavLink[] = [
    { id: "home", label: t.home },
    { id: "about", label: t.aboutUs },
    { id: "services", label: t.services },
    { id: "campaigns", label: t.campaigns },
    { id: "events", label: t.events },
    { id: "gallery", label: t.gallery },
    { id: "partners", label: t.partners },
    { id: "faqs", label: t.faqs },
  ];

  const involvedLinks: NavLink[] = [
    { id: "donate", label: t.donate },
    { id: "contact", label: t.volunteer },
    { id: "contact", label: t.partner },
    { id: "contact", label: t.contact },
  ];

  const socials: SocialLink[] = [
    { icon: FacebookIcon, href: "#", label: "Facebook" },
    { icon: TwitterIcon, href: "#", label: "Twitter" },
    { icon: InstagramIcon, href: "#", label: "Instagram" },
    { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-gray-950 text-gray-400 overflow-hidden">
      {/* Top gradient accent bar */}
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, #00f260 0%, #0575e6 50%, #1fa2ff 100%)",
        }}
      />

      {/* Background glows */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #0575e6, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00f260, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-4 group w-fit focus:outline-none"
            >
              <Logo size="medium" />
              <div className="flex flex-col items-start leading-snug">
                <span
                  className="text-xl font-extrabold tracking-tight"
                  style={gradientText}
                >
                  Kijana Simama
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">
                  {t.tagline}
                </span>
              </div>
            </button>

            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              {t.aboutText}
            </p>

            {/* Social icons */}
            <div className="flex gap-2 mt-1">
              {socials.map((social: SocialLink) => {
                const Icon: LucideIcon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <Icon className="w-4 h-4 text-gray-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              {t.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link: NavLink) => (
                <li key={link.id + link.label}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="group flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-secondary" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              {t.getInvolved}
            </h3>
            <ul className="space-y-2.5">
              {involvedLinks.map((link: NavLink) => (
                <li key={link.id + link.label}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="group flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-secondary" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              {t.contactUs}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                    Location
                  </p>
                  <span className="text-sm text-gray-300">{t.address}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                    Phone
                  </p>
                  <a
                    href={`tel:${t.phone}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {t.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                    Email
                  </p>
                  <a
                    href={`mailto:${t.email}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {t.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold" style={gradientText}>
              Kijana Simama
            </span>
            . {t.rights}
          </p>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <a
              href="#"
              className="hover:text-white transition-colors px-3 py-1 rounded-full hover:bg-gray-800"
            >
              {t.privacy}
            </a>
            <span className="text-gray-700">·</span>
            <a
              href="#"
              className="hover:text-white transition-colors px-3 py-1 rounded-full hover:bg-gray-800"
            >
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
