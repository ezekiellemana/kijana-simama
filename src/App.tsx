import { useEffect, useState } from "react";
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
import { MaintenancePage } from "./components/MaintenancePage";

type Language = "en" | "sw";

type SeoConfig = {
  title: string;
  description: string;
  keywords: string;
  path: string;
  noindex?: boolean;
};

const SITE_URL = "https://kijanasimama.org";
const SITE_NAME = "Kijana Simama";
const DEFAULT_IMAGE = `${SITE_URL}/logoImage.svg`;

const seoByPage: Record<string, SeoConfig> = {
  home: {
    title: "Kijana Simama | Youth Empowerment and Mental Health Support Tanzania",
    description:
      "Kijana Simama empowers Tanzanian youth through mentorship, education, mental health awareness, life skills and community support.",
    keywords:
      "Kijana Simama, youth empowerment organization Tanzania, youth mentorship Tanzania, mental health support for students Tanzania, stress management for students, entrepreneurship opportunities for Tanzanian youth, Dar es Salaam NGO",
    path: "/",
  },
  about: {
    title: "About Kijana Simama - Mission, Vision, Founders and Leadership",
    description:
      "Learn about Kijana Simama, our mission, vision, founders council, governance team, and commitment to empowering in-school adolescents across Tanzania.",
    keywords:
      "about Kijana Simama, Kijana Simama founders, youth NGO Tanzania, adolescent wellbeing Tanzania, governance team",
    path: "/about",
  },
  services: {
    title: "Youth Mentorship Programs in Tanzania - Mental Health, SRH and Life Skills",
    description:
      "Explore Kijana Simama services including mental health and wellness support, sexual and reproductive health education, mentorship, life skills, ICT, leadership, and financial literacy.",
    keywords:
      "youth services Tanzania, youth mentorship programs in Tanzania, adolescent mental health services, SRH education Tanzania, life skills training, financial literacy youth",
    path: "/services",
  },
  campaigns: {
    title: "Campaigns and Projects - Kijana Simama Youth Initiatives",
    description:
      "Discover Kijana Simama campaigns and school-based projects supporting adolescent wellbeing, hygiene, mental health, self-care, leadership, and financial confidence.",
    keywords:
      "Kijana Simama campaigns, youth projects Tanzania, school campaigns, adolescent wellbeing campaigns, mental health campaign Tanzania",
    path: "/campaigns",
  },
  events: {
    title: "Mental Health Awareness and Stress Management Events for Students in Tanzania",
    description:
      "View upcoming Kijana Simama events including suicide prevention awareness workshops, mental health awareness seminars, youth leadership activities, and financial literacy training.",
    keywords:
      "Kijana Simama events, youth workshops Tanzania, mental health seminar, stress management for students, suicide prevention workshop, youth leadership summit",
    path: "/events",
  },
  gallery: {
    title: "Gallery - Kijana Simama Photos and Youth Activities",
    description:
      "See photos from Kijana Simama school programs, campaigns, youth activities, community engagement, and adolescent empowerment initiatives.",
    keywords:
      "Kijana Simama gallery, youth activities photos, Tanzania school programs, adolescent empowerment gallery",
    path: "/gallery",
  },
  donate: {
    title: "Donate and Get Involved - Support Kijana Simama",
    description:
      "Support Kijana Simama through official NMB bank transfer, volunteering, partnership, or fundraising to empower in-school adolescents in Tanzania.",
    keywords:
      "donate Kijana Simama, support youth Tanzania, NMB donation, youth NGO donation, volunteer Kijana Simama",
    path: "/donate",
  },
  partners: {
    title: "Partners - Collaborate with Kijana Simama",
    description:
      "Partner with Kijana Simama to support youth empowerment, adolescent mental health, SRH education, school programs, and community wellbeing in Tanzania.",
    keywords:
      "Kijana Simama partners, NGO partnership Tanzania, corporate social responsibility Tanzania, youth empowerment partnership",
    path: "/partners",
  },
  contact: {
    title: "Contact Kijana Simama - Dar es Salaam, Tanzania",
    description:
      "Contact Kijana Simama in Dar es Salaam, Tanzania. Reach us by phone, email, Facebook, Instagram, or the website contact form.",
    keywords:
      "contact Kijana Simama, Kijana Simama phone, Kijana Simama email, Dar es Salaam youth NGO, info@kijanasimama.org",
    path: "/contact",
  },
  faqs: {
    title: "FAQs - Kijana Simama Questions and Answers",
    description:
      "Find answers to common questions about Kijana Simama, our programs, services, donations, partnerships, and support for in-school adolescents.",
    keywords:
      "Kijana Simama FAQs, youth NGO questions, adolescent support Tanzania, Kijana Simama programs",
    path: "/faqs",
  },
  "site-down": {
    title: "Kijana Simama - We Will Be Back Soon",
    description: "Kijana Simama website maintenance page.",
    keywords: "Kijana Simama maintenance",
    path: "/site-down",
    noindex: true,
  },
};

const setMeta = (selector: string, attr: "content" | "href", value: string) => {
  const element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (element) {
    element.setAttribute(attr, value);
  }
};

const upsertMeta = (attribute: "name" | "property", key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

function SeoManager({ currentPage, language }: { currentPage: string; language: Language }) {
  useEffect(() => {
    const normalizedPage = currentPage.startsWith("success-") ? "donate" : currentPage;
    const config = seoByPage[normalizedPage] ?? {
      title: "Page Not Found - Kijana Simama",
      description: "The requested Kijana Simama page could not be found.",
      keywords: "Kijana Simama, page not found",
      path: location.pathname,
      noindex: true,
    };
    const canonicalUrl = `${SITE_URL}${config.path === "/" ? "/" : config.path}`;
    const robots = config.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";

    document.documentElement.lang = language;
    document.title = config.title;
    upsertMeta("name", "description", config.description);
    upsertMeta("name", "keywords", config.keywords);
    upsertMeta("name", "robots", robots);
    upsertMeta("name", "author", SITE_NAME);
    upsertMeta("name", "theme-color", "#1e40af");
    upsertMeta("property", "og:title", config.title);
    upsertMeta("property", "og:description", config.description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:image", DEFAULT_IMAGE);
    upsertMeta("property", "og:locale", language === "sw" ? "sw_TZ" : "en_US");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", config.title);
    upsertMeta("name", "twitter:description", config.description);
    upsertMeta("name", "twitter:image", DEFAULT_IMAGE);
    setMeta('link[rel="canonical"]', "href", canonicalUrl);

    const existingJsonLd = document.getElementById("page-jsonld");
    existingJsonLd?.remove();
    const script = document.createElement("script");
    script.id = "page-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: config.title,
      description: config.description,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
      inLanguage: language === "sw" ? "sw-TZ" : "en-US",
    });
    document.head.appendChild(script);
  }, [currentPage, language]);

  return null;
}

function AppContent() {
  const [language, setLanguage] = useState<Language>("en");
  const navigate = useNavigate();
  const location = useLocation();
  const isSiteDown = import.meta.env.VITE_SITE_DOWN === "true";

  const handleNavigate = (page: string) => {
    navigate(`/${page === "home" ? "" : page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "sw" : "en"));
  };

  const currentPage =
    location.pathname === "/" ? "home" : location.pathname.slice(1) || "home";

  if (isSiteDown && location.pathname !== "/site-down") {
    return (
      <>
        <SeoManager currentPage="site-down" language={language} />
        <MaintenancePage />
      </>
    );
  }

  const hideNavFooter =
    currentPage.startsWith("success-") ||
    currentPage === "404" ||
    currentPage === "site-down";

  return (
    <div className="min-h-screen flex flex-col">
      <SeoManager currentPage={currentPage} language={language} />
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
          <Route path="/site-down" element={<MaintenancePage />} />
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
