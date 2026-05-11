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
  locationLabel: string;
  phoneLabel: string;
  emailLabel: string;
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
      phone: "+255 713 415 316",
      email: "info@kijanasimama.org",
      tagline: "Empowering Youth to Stand Tall",
      locationLabel: "Location",
      phoneLabel: "Phone",
      emailLabel: "Email",
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
      phone: "+255 713 415 316",
      email: "info@kijanasimama.org",
      tagline: "Kuwapa Nguvu Vijana Kusimama Wima",
      locationLabel: "Mahali",
      phoneLabel: "Simu",
      emailLabel: "Barua Pepe",
    },
  };

  const t: Translations = translations[language];

  const gradientBar: CSSProperties = {
    background: "linear-gradient(90deg, #00f260 0%, #0575e6 50%, #1fa2ff 100%)",
  };

  const quickNavLinks: NavLink[] = [
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

  const SectionHeader = ({ title }: { title: string }) => (
    <div className="flex items-center gap-2 mb-5">
      <div className="w-1 h-4 bg-secondary rounded-full shrink-0" />
      <h3 className="text-white font-semibold text-xs uppercase tracking-wider">
        {title}
      </h3>
    </div>
  );

  const LinkItem = ({ id, label }: NavLink) => (
    <li>
      <button
        onClick={() => onNavigate(id)}
        className="group flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors duration-200"
      >
        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-secondary shrink-0" />
        {label}
      </button>
    </li>
  );

  return (
    <footer className="relative bg-gray-950 text-gray-400 overflow-hidden">
      {/* Top gradient accent bar */}
      <div className="h-1 w-full" style={gradientBar} />

      {/* Background glow decorations */}
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

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center gap-3 group w-fit focus:outline-none"
            >
              <div className="bg-white rounded-xl p-1.5 shrink-0">
                <Logo size="small" />
              </div>
              <div className="flex flex-col items-start leading-snug">
                <span
                  className="text-lg font-extrabold tracking-tight"
                  style={{
                    color: "white",
                    fontFamily: "'Hachi Maru Pop', cursive",
                  }}
                >
                  Kijana Simama
                </span>
                <span
                  className="text-[10px] text-gray-500 uppercase tracking-widest font-bold"
                  style={{ fontFamily: "'Hachi Maru Pop', cursive" }}
                >
                  {t.tagline}
                </span>
              </div>
            </button>

            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              {t.aboutText}
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              {socials.map((social: SocialLink) => {
                const Icon: LucideIcon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <Icon className="w-4 h-4 text-gray-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <SectionHeader title={t.quickLinks} />
            <ul className="space-y-2.5">
              {quickNavLinks.map((link) => (
                <LinkItem key={link.id} {...link} />
              ))}
            </ul>
          </div>

          {/* Column 3 — Get Involved */}
          <div>
            <SectionHeader title={t.getInvolved} />
            <ul className="space-y-2.5">
              {involvedLinks.map((link, i) => (
                <LinkItem key={`${link.id}-${i}`} {...link} />
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Us */}
          <div>
            <SectionHeader title={t.contactUs} />
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                    {t.locationLabel}
                  </p>
                  <span className="text-sm text-gray-300">{t.address}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                    {t.phoneLabel}
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
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">
                    {t.emailLabel}
                  </p>
                  <a
                    href={`mailto:${t.email}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors break-all"
                  >
                    {t.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-5" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span
              className="font-semibold"
              style={{
                color: "white",
                fontFamily: "'Hachi Maru Pop', cursive",
              }}
            >
              Kijana Simama
            </span>
            . {t.rights}
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <a
              href="#"
              className="hover:text-white transition-colors hover:underline"
            >
              {t.privacy}
            </a>
            <span className="text-gray-700">·</span>
            <a
              href="#"
              className="hover:text-white transition-colors hover:underline"
            >
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
