import { Menu, X, Globe } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  language: "en" | "sw";
  onLanguageToggle: () => void;
}

export function Navigation({
  currentPage,
  onNavigate,
  language,
  onLanguageToggle,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const translations = {
    en: {
      home: "Home",
      about: "About Us",
      services: "Services",
      campaigns: "Campaigns",
      events: "Events",
      gallery: "Gallery",
      partners: "Partners",
      donate: "Donate",
      contact: "Contact",
      faqs: "FAQs",
      orgName: "Kijana Simama",
      tagline: "Empowering Youth to Stand Tall",
    },
    sw: {
      home: "Nyumbani",
      about: "Kuhusu Sisi",
      services: "Huduma",
      campaigns: "Kampeni",
      events: "Matukio",
      gallery: "Picha",
      partners: "Washirika",
      donate: "Changia",
      contact: "Wasiliana",
      faqs: "Maswali",
      orgName: "Kijana Simama",
      tagline: "Kuwapa Nguvu Vijana Kusimama Wima",
    },
  };

  const t = translations[language];

  const navItems = [
    { id: "home", label: t.home },
    { id: "about", label: t.about },
    { id: "services", label: t.services },
    { id: "campaigns", label: t.campaigns },
    { id: "events", label: t.events },
    { id: "gallery", label: t.gallery },
    { id: "partners", label: t.partners },
    { id: "contact", label: t.contact },
    { id: "faqs", label: t.faqs },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const gradientText: React.CSSProperties = {
    background:
      "linear-gradient(135deg, #00f260 0%, #0575e6 50%, #1fa2ff 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled
            ? "shadow-lg border-b border-gray-100"
            : "border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
            {/* Logo + org name */}
            <button
              onClick={() => handleNavigate("home")}
              className="shrink-0 flex items-center gap-2 sm:gap-3 focus:outline-none group"
            >
              <div className="ring-2 ring-primary ring-offset-2 rounded-xl">
                <Logo size="small" />
              </div>
              <div className="hidden md:flex flex-col items-start leading-snug">
                <span
                  className="text-base sm:text-lg font-extrabold tracking-tight"
                  style={gradientText}
                >
                  {t.orgName}
                </span>
                <span className="text-xs font-medium text-gray-400 tracking-wide uppercase">
                  {t.tagline}
                </span>
              </div>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`
                    px-3.5 py-1.5 text-sm font-medium rounded-full
                    transition-all duration-200
                    ${
                      currentPage === item.id
                        ? "bg-primary text-white shadow-sm shadow-primary/30"
                        : "text-gray-600 hover:bg-gray-100 hover:text-primary"
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={onLanguageToggle}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-primary border border-gray-200 hover:border-primary rounded-full transition-all duration-200"
              >
                <Globe className="w-3.5 h-3.5" />
                {language === "en" ? "EN" : "SW"}
              </button>
              <Button
                onClick={() => handleNavigate("donate")}
                className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-5 shadow-sm hover:shadow-md transition-all duration-200"
              >
                {t.donate}
              </Button>
            </div>

            {/* Mobile right */}
            <div className="lg:hidden flex items-center gap-1">
              <button
                onClick={onLanguageToggle}
                className="p-2 sm:p-2.5 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label={
                  language === "en" ? "Switch to Swahili" : "Switch to English"
                }
              >
                <Globe className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 sm:p-2.5 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-72 bg-white z-50 lg:hidden flex flex-col
          shadow-2xl transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-4 sm:py-5 border-b border-gray-100">
          <div className="flex items-center gap-2 sm:gap-3">
            <Logo size="small" />
            <div className="flex flex-col leading-snug">
              <span
                className="text-sm sm:text-base font-extrabold tracking-tight"
                style={gradientText}
              >
                {t.orgName}
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-400 tracking-wide uppercase">
                {t.tagline}
              </span>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 sm:p-2.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav items */}
        <div className="flex-1 overflow-y-auto py-3 px-2 sm:px-3 smooth-scroll">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`
                flex items-center w-full text-left px-3 sm:px-4 py-3 mb-1
                rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-200
                ${
                  currentPage === item.id
                    ? "bg-primary text-white shadow-sm shadow-primary/20"
                    : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                }
              `}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full mr-2 sm:mr-3 shrink-0 ${
                  currentPage === item.id ? "bg-white" : "bg-gray-300"
                }`}
              />
              {item.label}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-gray-100 space-y-2">
          <button
            onClick={onLanguageToggle}
            className="w-full flex items-center justify-center gap-2 py-3 sm:py-2.5 px-3 sm:px-4 text-sm sm:text-base font-medium text-gray-700 border border-gray-200 rounded-lg sm:rounded-xl hover:border-primary hover:text-primary transition-all duration-200"
          >
            <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
            {language === "en" ? "Switch to Swahili" : "Badili kwa Kiingereza"}
          </button>
          <Button
            onClick={() => handleNavigate("donate")}
            className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-lg sm:rounded-xl py-3 sm:py-2.5 text-sm sm:text-base"
          >
            {t.donate}
          </Button>
        </div>
      </aside>
    </>
  );
}
