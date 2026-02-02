import { Home, ArrowLeft, Search, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface NotFoundPageProps {
  language: "en" | "sw";
  onNavigate: (page: string) => void;
}

export function NotFoundPage({ language, onNavigate }: NotFoundPageProps) {
  const content = {
    en: {
      title: "404",
      subtitle: "Page Not Found",
      message:
        "Oops! The page you're looking for doesn't exist or has been moved.",
      description:
        "Don't worry, you can find plenty of helpful content on our website.",
      suggestions: "Here are some helpful links:",
      links: [
        { label: "Home Page", page: "home", icon: Home },
        { label: "Our Programs", page: "services", icon: Search },
        { label: "Active Campaigns", page: "campaigns", icon: MapPin },
        { label: "Contact Us", page: "contact", icon: ArrowLeft },
      ],
      backHome: "Back to Home",
      explore: "Explore Programs",
    },
    sw: {
      title: "404",
      subtitle: "Ukurasa Haupatikani",
      message: "Lo! Ukurasa unaoutafuta haupo au umehamishwa.",
      description:
        "Usijali, unaweza kupata maudhui mengi ya kusaidia kwenye tovuti yetu.",
      suggestions: "Hapa kuna viungo vya kusaidia:",
      links: [
        { label: "Ukurasa wa Mwanzo", page: "home", icon: Home },
        { label: "Programu Zetu", page: "services", icon: Search },
        { label: "Kampeni Zinazoendelea", page: "campaigns", icon: MapPin },
        { label: "Wasiliana Nasi", page: "contact", icon: ArrowLeft },
      ],
      backHome: "Rudi Mwanzoni",
      explore: "Chunguza Programu",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50/30 to-primary/5 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          {/* Animated 404 */}
          <div className="relative inline-block mb-8">
            <h1 className="text-[150px] md:text-[200px] text-primary/10 select-none animate-in zoom-in duration-1000">
              {t.title}
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative animate-in fade-in zoom-in duration-700 delay-300">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
                  <Search className="w-16 h-16 md:w-20 md:h-20 text-white animate-pulse" />
                </div>
                {/* Orbiting dots */}
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-secondary rounded-full -translate-x-1/2 -translate-y-2 animate-bounce" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full animate-bounce delay-150" />
                <div className="absolute bottom-0 left-0 w-3 h-3 bg-secondary rounded-full animate-bounce delay-300" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <h2 className="text-3xl md:text-5xl text-gray-900 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            {t.subtitle}
          </h2>
          <p className="text-xl text-gray-600 mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-600">
            {t.message}
          </p>
          <p className="text-gray-500 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            {t.description}
          </p>
        </div>

        {/* Quick Links Card */}
        <Card className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-800 shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-xl text-gray-900 mb-6 text-center">
              {t.suggestions}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.links.map((link, index) => {
                const Icon = link.icon;
                return (
                  <button
                    key={index}
                    onClick={() => onNavigate(link.page)}
                    className="flex items-center gap-4 p-4 rounded-lg border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-gray-700 group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000">
          <Button
            onClick={() => onNavigate("home")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-8"
          >
            <Home className="mr-2 w-5 h-5" />
            {t.backHome}
          </Button>
          <Button
            onClick={() => onNavigate("services")}
            size="lg"
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary/5 text-lg px-8"
          >
            <Search className="mr-2 w-5 h-5" />
            {t.explore}
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-3 opacity-40">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" />
          <div className="w-3 h-3 bg-secondary rounded-full animate-bounce delay-150" />
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-300" />
        </div>
      </div>
    </div>
  );
}
