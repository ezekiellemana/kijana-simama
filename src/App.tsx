import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ServicesPage } from "./components/ServicesPage";
import { CampaignsPage } from "./components/CampaignsPage";
import { EventsPage } from "./components/EventsPage";
import { GalleryPage } from "./components/GalleryPage";
import { DonatePage } from "./components/DonatePage";
import { ContactPage } from "./components/ContactPage";
import { FAQsPage } from "./components/FAQsPage";
import { SuccessPage } from "./components/SuccessPage";
import { NotFoundPage } from "./components/NotFoundPage";
import { PartnersPage } from "./components/PartnersPage";

type Page =
  | "home"
  | "about"
  | "services"
  | "campaigns"
  | "events"
  | "gallery"
  | "donate"
  | "contact"
  | "faqs"
  | "partners"
  | "success-donation"
  | "success-contact"
  | "success-newsletter"
  | "404";
type Language = "en" | "sw";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [language, setLanguage] = useState<Language>("en");

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "sw" : "en"));
  };

  const renderPage = () => {
    switch (currentPage) {
      case "success-donation":
        return (
          <SuccessPage
            type="donation"
            language={language}
            onNavigate={handleNavigate}
          />
        );
      case "success-contact":
        return (
          <SuccessPage
            type="contact"
            language={language}
            onNavigate={handleNavigate}
          />
        );
      case "success-newsletter":
        return (
          <SuccessPage
            type="newsletter"
            language={language}
            onNavigate={handleNavigate}
          />
        );
      case "404":
        return <NotFoundPage language={language} onNavigate={handleNavigate} />;
      case "home":
        return <HomePage language={language} onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage language={language} />;
      case "services":
        return <ServicesPage language={language} onNavigate={handleNavigate} />;
      case "campaigns":
        return (
          <CampaignsPage language={language} onNavigate={handleNavigate} />
        );
      case "events":
        return <EventsPage language={language} />;
      case "gallery":
        return <GalleryPage language={language} />;
      case "donate":
        return <DonatePage language={language} onNavigate={handleNavigate} />;
      case "contact":
        return <ContactPage language={language} onNavigate={handleNavigate} />;
      case "faqs":
        return <FAQsPage language={language} />;
      case "partners":
        return <PartnersPage language={language} onNavigate={handleNavigate} />;
      default:
        return <HomePage language={language} onNavigate={handleNavigate} />;
    }
  };

  const hideNavFooter =
    currentPage.startsWith("success-") || currentPage === "404";

  return (
    <div className="min-h-screen flex flex-col">
      {!hideNavFooter && (
        <Navigation
          currentPage={currentPage}
          onNavigate={handleNavigate}
          language={language}
          onLanguageToggle={toggleLanguage}
        />
      )}
      <main className="grow">{renderPage()}</main>
      {!hideNavFooter && (
        <Footer language={language} onNavigate={handleNavigate} />
      )}
    </div>
  );
}
