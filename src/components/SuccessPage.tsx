import { useEffect } from "react";
import { CheckCircle, ArrowLeft, Home, Mail, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

type SuccessType = "donation" | "contact" | "newsletter" | "volunteer";

interface SuccessPageProps {
  type: SuccessType;
  language: "en" | "sw";
  onNavigate: (page: string) => void;
}

export function SuccessPage({ type, language, onNavigate }: SuccessPageProps) {
  const content = {
    donation: {
      en: {
        title: "Thank You for Your Generous Donation!",
        subtitle: "Your support makes a real difference",
        message:
          "Your contribution will help empower youth in our community. We have received your donation request and will process it shortly. A confirmation email has been sent to your email address.",
        points: [
          "Your donation helps fund youth education programs",
          "Enables skills training and mentorship opportunities",
          "Supports community development initiatives",
          "Creates lasting impact in young lives",
        ],
        cta: "What happens next?",
        next: "You will receive a payment confirmation email within 24 hours. Our team will reach out if we need any additional information.",
      },
      sw: {
        title: "Asante kwa Mchango Wako Mkuu!",
        subtitle: "Msaada wako unaleta mabadiliko halisi",
        message:
          "Mchango wako utasaidia kuwapa nguvu vijana katika jamii yetu. Tumepokea ombi lako la mchango na tutaliandaa hivi karibuni. Barua pepe ya uthibitisho imetumwa kwa anwani yako ya barua pepe.",
        points: [
          "Mchango wako unasaidia kufadhili programu za elimu kwa vijana",
          "Huwezesha mafunzo ya ujuzi na fursa za ushauri",
          "Inasaidia miradi ya maendeleo ya jamii",
          "Huunda athari ya kudumu katika maisha ya vijana",
        ],
        cta: "Nini kitafuata?",
        next: "Utapokea barua pepe ya uthibitisho wa malipo ndani ya masaa 24. Timu yetu itawasiliana ukihitaji maelezo zaidi.",
      },
    },
    contact: {
      en: {
        title: "Message Received!",
        subtitle: "Thank you for reaching out",
        message:
          "We have received your message and our team will get back to you within 24-48 hours. We appreciate your interest in Kijana Simama.",
        points: [
          "Your message has been forwarded to our team",
          "We typically respond within 24-48 hours",
          "Check your email for our response",
          "Feel free to explore our programs while you wait",
        ],
        cta: "While you wait...",
        next: "Explore our programs, read success stories, or learn more about how you can get involved with Kijana Simama.",
      },
      sw: {
        title: "Ujumbe Umepokelewa!",
        subtitle: "Asante kwa kuwasiliana nasi",
        message:
          "Tumepokea ujumbe wako na timu yetu itakurudishia jibu ndani ya masaa 24-48. Tunashukuru nia yako katika Kijana Simama.",
        points: [
          "Ujumbe wako umetumwa kwa timu yetu",
          "Kwa kawaida tunajibu ndani ya masaa 24-48",
          "Angalia barua pepe yako kwa jibu letu",
          "Jisikie huru kuchunguza programu zetu unaposubiri",
        ],
        cta: "Unaposubiri...",
        next: "Chunguza programu zetu, soma hadithi za mafanikio, au jifunze zaidi jinsi unavyoweza kujihusisha na Kijana Simama.",
      },
    },
    newsletter: {
      en: {
        title: "Welcome to Our Community!",
        subtitle: "Successfully subscribed to our newsletter",
        message:
          "Thank you for subscribing! You will now receive updates about our programs, success stories, upcoming events, and opportunities to make a difference.",
        points: [
          "Monthly updates on our programs and impact",
          "Early access to event announcements",
          "Success stories from empowered youth",
          "Volunteer and partnership opportunities",
        ],
        cta: "Stay connected",
        next: "Follow us on social media and check your inbox for our welcome email with exclusive content!",
      },
      sw: {
        title: "Karibu kwenye Jamii Yetu!",
        subtitle: "Umejiunga na jarida letu kwa mafanikio",
        message:
          "Asante kwa kujiunga! Sasa utapokea masasisho kuhusu programu zetu, hadithi za mafanikio, matukio yajayo, na fursa za kuleta mabadiliko.",
        points: [
          "Masasisho ya kila mwezi kuhusu programu na athari zetu",
          "Ufikiaji wa mapema wa tangazo la matukio",
          "Hadithi za mafanikio kutoka kwa vijana waliopewa nguvu",
          "Fursa za kujitolea na ushirikiano",
        ],
        cta: "Endelea kuunganika",
        next: "Tufuate kwenye mitandao ya kijamii na angalia sanduku lako la barua pepe kwa barua pepe yetu ya kukaribisha yenye maudhui ya kipekee!",
      },
    },
    volunteer: {
      en: {
        title: "Thank You for Volunteering!",
        subtitle: "Your commitment to youth empowerment is inspiring",
        message:
          "We have received your volunteer application. Our team will review your information and contact you within 5-7 business days to discuss next steps.",
        points: [
          "Application under review by our team",
          "Expect a response within 5-7 business days",
          "Background check and orientation will follow",
          "Get ready to make a real impact!",
        ],
        cta: "Get prepared",
        next: "Learn more about our programs and the communities we serve. We will reach out soon with volunteer opportunities that match your skills.",
      },
      sw: {
        title: "Asante kwa Kujitolea!",
        subtitle: "Kujitolea kwako kwa uwezeshaji wa vijana ni msisimko",
        message:
          "Tumepokea maombi yako ya kujitolea. Timu yetu itapitia maelezo yako na kuwasiliana nawe ndani ya siku 5-7 za kazi kujadili hatua zinazofuata.",
        points: [
          "Maombi yanapitwa na timu yetu",
          "Tarajia jibu ndani ya siku 5-7 za kazi",
          "Ukaguzi wa nyuma na mwongozo utafuata",
          "Jiandae kuleta athari halisi!",
        ],
        cta: "Jiandae",
        next: "Jifunze zaidi kuhusu programu zetu na jamii tunazotumikia. Tutawasiliana hivi karibuni na fursa za kujitolea zinazofaa ujuzi wako.",
      },
    },
  };

  const t = content[type][language];

  const icons = {
    donation: Heart,
    contact: Mail,
    newsletter: Mail,
    volunteer: Heart,
  };

  const Icon = icons[type];

  useEffect(() => {
    // Confetti effect on mount
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-primary/5 via-blue-50 to-secondary/5 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Success Icon Animation */}
        <div className="text-center mb-8 animate-in fade-in zoom-in duration-500">
          <div className="inline-block relative">
            <CheckCircle className="w-24 h-24 text-primary mx-auto mb-4 animate-in zoom-in duration-700" />
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl text-gray-900 mb-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            {t.subtitle}
          </p>
        </div>

        {/* Main Message Card */}
        <Card className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-gray-700 flex-1">{t.message}</p>
            </div>

            <div className="bg-linear-to-r from-primary/5 to-secondary/5 rounded-lg p-6 mb-6">
              <h3 className="text-lg text-gray-900 mb-4">{t.cta}</h3>
              <ul className="space-y-3">
                {t.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-secondary p-4 rounded">
              <p className="text-gray-700">{t.next}</p>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Button
            onClick={() => onNavigate("home")}
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            <Home className="mr-2 w-5 h-5" />
            {language === "en" ? "Back to Home" : "Rudi Mwanzoni"}
          </Button>
          <Button
            onClick={() =>
              onNavigate(
                type === "donation"
                  ? "campaigns"
                  : type === "contact"
                    ? "about"
                    : "events",
              )
            }
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            {language === "en" ? "Explore More" : "Chunguza Zaidi"}
          </Button>
        </div>

        {/* Social Share Section */}
        <div className="mt-12 text-center animate-in fade-in duration-700 delay-700">
          <p className="text-gray-600 mb-4">
            {language === "en"
              ? "Help us spread the word!"
              : "Tusaidie kueneza neno!"}
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              Twitter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
