import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
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

type Language = "en" | "sw";

function AppContent() {
  const [language, setLanguage] = useState<Language>("en");
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (page: string) => {
    navigate(`/${page === "home" ? "" : page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "sw" : "en"));
  };

  const currentPage =
    location.pathname === "/" ? "home" : location.pathname.slice(1) || "home";

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
      <main className="grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage language={language} onNavigate={handleNavigate} />
            }
          />
          <Route path="/about" element={<AboutPage language={language} />} />
          <Route
            path="/services"
            element={
              <ServicesPage language={language} onNavigate={handleNavigate} />
            }
          />
          <Route
            path="/campaigns"
            element={
              <CampaignsPage language={language} onNavigate={handleNavigate} />
            }
          />
          <Route path="/events" element={<EventsPage language={language} />} />
          <Route
            path="/gallery"
            element={<GalleryPage language={language} />}
          />
          <Route
            path="/donate"
            element={
              <DonatePage language={language} onNavigate={handleNavigate} />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage language={language} onNavigate={handleNavigate} />
            }
          />
          <Route path="/faqs" element={<FAQsPage language={language} />} />
          <Route
            path="/partners"
            element={
              <PartnersPage language={language} onNavigate={handleNavigate} />
            }
          />
          <Route
            path="/success-donation"
            element={
              <SuccessPage
                type="donation"
                language={language}
                onNavigate={handleNavigate}
              />
            }
          />
          <Route
            path="/success-contact"
            element={
              <SuccessPage
                type="contact"
                language={language}
                onNavigate={handleNavigate}
              />
            }
          />
          <Route
            path="/success-newsletter"
            element={
              <SuccessPage
                type="newsletter"
                language={language}
                onNavigate={handleNavigate}
              />
            }
          />
          <Route
            path="*"
            element={
              <NotFoundPage language={language} onNavigate={handleNavigate} />
            }
          />
        </Routes>
      </main>
      {!hideNavFooter && (
        <Footer language={language} onNavigate={handleNavigate} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
