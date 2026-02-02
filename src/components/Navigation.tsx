import { Menu, X, Globe } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { useState } from "react";

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

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  currentPage === item.id
                    ? "text-primary bg-blue-50"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onLanguageToggle}
              className="flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {language === "en" ? "EN" : "SW"}
            </Button>
            <Button
              onClick={() => onNavigate("donate")}
              className="bg-secondary hover:bg-secondary/90"
            >
              {t.donate}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onLanguageToggle}
              className="flex items-center gap-1"
            >
              <Globe className="w-4 h-4" />
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ease-in-out"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile menu sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Logo />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  currentPage === item.id
                    ? "text-primary bg-blue-50 shadow-sm"
                    : "text-gray-700 hover:bg-gray-50 hover:translate-x-1"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200 space-y-3">
            <Button
              variant="outline"
              onClick={onLanguageToggle}
              className="w-full flex items-center justify-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {language === "en"
                ? "Switch to Swahili"
                : "Badili kwa Kiingereza"}
            </Button>
            <Button
              onClick={() => {
                onNavigate("donate");
                setMobileMenuOpen(false);
              }}
              className="w-full bg-secondary hover:bg-secondary/90"
            >
              {t.donate}
            </Button>
          </div>
        </div>
      </aside>
    </nav>
  );
}
