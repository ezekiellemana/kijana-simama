import {
  Building2,
  Handshake,
  Award,
  Users,
  Mail,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface PartnersPageProps {
  language: "en" | "sw";
  onNavigate: (page: string) => void;
}

export function PartnersPage({ language, onNavigate }: PartnersPageProps) {
  const content = {
    en: {
      hero: {
        title: "Our Partners & Sponsors",
        subtitle: "Together we create lasting impact in youth empowerment",
        description:
          "We are grateful to our partners and sponsors who share our vision of empowering young people to reach their full potential.",
      },
      stats: {
        partners: { value: "50+", label: "Active Partners" },
        years: { value: "8+", label: "Years of Partnership" },
        projects: { value: "120+", label: "Joint Projects" },
        beneficiaries: { value: "10K+", label: "Youth Impacted" },
      },
      categories: {
        title: "Our Partner Categories",
        platinum: {
          title: "Platinum Sponsors",
          description:
            "Major contributors supporting our core programs and operations",
          partners: [
            {
              name: "Global Youth Foundation",
              type: "International NGO",
              support: "Education & Skills Training",
              logo: "🌍",
            },
            {
              name: "Tech For Good Initiative",
              type: "Technology Partner",
              support: "Digital Literacy Programs",
              logo: "💻",
            },
            {
              name: "Green Future Fund",
              type: "Environmental Partner",
              support: "Sustainability Projects",
              logo: "🌱",
            },
          ],
        },
        gold: {
          title: "Gold Sponsors",
          description:
            "Strategic partners supporting specific programs and initiatives",
          partners: [
            {
              name: "Community Bank Tanzania",
              type: "Financial Partner",
              support: "Financial Literacy & Entrepreneurship",
              logo: "🏦",
            },
            {
              name: "HealthFirst Alliance",
              type: "Healthcare Partner",
              support: "Youth Health & Wellness",
              logo: "🏥",
            },
            {
              name: "Education for All",
              type: "Education Partner",
              support: "Scholarship Programs",
              logo: "📚",
            },
            {
              name: "Sports Academy Tanzania",
              type: "Sports Partner",
              support: "Sports & Recreation",
              logo: "⚽",
            },
          ],
        },
        silver: {
          title: "Silver Sponsors",
          description:
            "Supporting partners contributing to our community programs",
          partners: [
            {
              name: "Local Business Association",
              type: "Business Network",
              support: "Internship Opportunities",
              logo: "💼",
            },
            {
              name: "Art & Culture Foundation",
              type: "Arts Partner",
              support: "Creative Arts Programs",
              logo: "🎨",
            },
            {
              name: "Community Radio Network",
              type: "Media Partner",
              support: "Youth Advocacy & Awareness",
              logo: "📻",
            },
            {
              name: "Farmers Cooperative",
              type: "Agriculture Partner",
              support: "Agribusiness Training",
              logo: "🌾",
            },
          ],
        },
        institutional: {
          title: "Institutional Partners",
          description: "Government agencies and educational institutions",
          partners: [
            {
              name: "Ministry of Youth, Culture, Arts and Sports",
              type: "Government",
              support: "Policy Development & Implementation",
              logo: "🏛️",
            },
            {
              name: "University of Dar es Salaam",
              type: "Educational Institution",
              support: "Research & Mentorship",
              logo: "🎓",
            },
            {
              name: "Regional Government",
              type: "Local Government",
              support: "Community Development",
              logo: "🏢",
            },
          ],
        },
      },
      benefits: {
        title: "Why Partner With Us?",
        items: [
          {
            icon: Users,
            title: "Direct Community Impact",
            description:
              "Your contribution directly benefits youth in underserved communities",
          },
          {
            icon: Award,
            title: "Recognition & Visibility",
            description:
              "Featured on our website, events, and communications materials",
          },
          {
            icon: Handshake,
            title: "Collaborative Projects",
            description:
              "Opportunity to co-create programs aligned with your mission",
          },
          {
            icon: Building2,
            title: "CSR Integration",
            description:
              "Align your corporate social responsibility goals with real outcomes",
          },
        ],
      },
      partnership: {
        title: "Become a Partner",
        subtitle: "Join us in transforming the lives of young people",
        description:
          "Whether you are a corporation, foundation, or individual, there are many ways to partner with Kijana Simama.",
        options: [
          {
            title: "Program Sponsorship",
            description:
              "Fund specific programs like education, skills training, or mentorship",
            min: "TZS 12,000,000/year",
          },
          {
            title: "In-Kind Support",
            description:
              "Provide equipment, materials, or professional services",
            min: "Flexible",
          },
          {
            title: "Employee Engagement",
            description:
              "Involve your team through volunteering and skill-sharing",
            min: "No minimum",
          },
          {
            title: "Event Sponsorship",
            description: "Support our annual events, workshops, and campaigns",
            min: "TZS 2,400,000/event",
          },
        ],
      },
      testimonials: {
        title: "What Our Partners Say",
        items: [
          {
            quote:
              "Partnering with Kijana Simama has allowed us to make a real difference in youth development. Their programs are well-structured and impactful.",
            author: "Sarah Johnson",
            role: "CSR Director, Tech For Good Initiative",
            company: "💻",
          },
          {
            quote:
              "The transparency and dedication of the Kijana Simama team is commendable. We have seen firsthand the positive transformation in young lives.",
            author: "James Mbwana",
            role: "Community Relations Manager, Community Bank Tanzania",
            company: "🏦",
          },
        ],
      },
      cta: {
        title: "Ready to Make a Difference?",
        description: "Contact us to discuss partnership opportunities",
        button: "Get in Touch",
        email: "Contact via Email",
      },
    },
    sw: {
      hero: {
        title: "Washirika na Wafadhili Wetu",
        subtitle:
          "Pamoja tunaunda athari ya kudumu katika uwezeshaji wa vijana",
        description:
          "Tunashukuru washirika na wafadhili wetu wanaoshiriki dira yetu ya kuwapa nguvu vijana kufikia uwezo wao kamili.",
      },
      stats: {
        partners: { value: "50+", label: "Washirika Hai" },
        years: { value: "8+", label: "Miaka ya Ushirikiano" },
        projects: { value: "120+", label: "Miradi ya Pamoja" },
        beneficiaries: { value: "10K+", label: "Vijana Walionufaika" },
      },
      categories: {
        title: "Aina za Washirika Wetu",
        platinum: {
          title: "Wafadhili wa Platinum",
          description:
            "Wachangiaji wakubwa wanaosaidia programu zetu kuu na shughuli",
          partners: [
            {
              name: "Msingi wa Vijana Ulimwenguni",
              type: "NGO ya Kimataifa",
              support: "Elimu na Mafunzo ya Ujuzi",
              logo: "🌍",
            },
            {
              name: "Mpango wa Teknolojia kwa Mazuri",
              type: "Mshirika wa Teknolojia",
              support: "Programu za Ujuzi wa Kidijitali",
              logo: "💻",
            },
            {
              name: "Mfuko wa Mustakabali wa Kijani",
              type: "Mshirika wa Mazingira",
              support: "Miradi ya Uendelevu",
              logo: "🌱",
            },
          ],
        },
        gold: {
          title: "Wafadhili wa Gold",
          description:
            "Washirika wa kimkakati wanaosaidia programu na mipango maalum",
          partners: [
            {
              name: "Benki ya Jamii Tanzania",
              type: "Mshirika wa Kifedha",
              support: "Ujuzi wa Kifedha na Ujasiriamali",
              logo: "🏦",
            },
            {
              name: "Muungano wa Afya Kwanza",
              type: "Mshirika wa Afya",
              support: "Afya na Ustawi wa Vijana",
              logo: "🏥",
            },
            {
              name: "Elimu kwa Wote",
              type: "Mshirika wa Elimu",
              support: "Programu za Ufadhili",
              logo: "📚",
            },
            {
              name: "Chuo cha Michezo Tanzania",
              type: "Mshirika wa Michezo",
              support: "Michezo na Burudani",
              logo: "⚽",
            },
          ],
        },
        silver: {
          title: "Wafadhili wa Silver",
          description:
            "Washirika wanaosaidia wanaochangia programu zetu za jamii",
          partners: [
            {
              name: "Chama cha Biashara za Mitaa",
              type: "Mtandao wa Biashara",
              support: "Fursa za Mafunzo",
              logo: "💼",
            },
            {
              name: "Msingi wa Sanaa na Utamaduni",
              type: "Mshirika wa Sanaa",
              support: "Programu za Sanaa za Ubunifu",
              logo: "🎨",
            },
            {
              name: "Mtandao wa Redio ya Jamii",
              type: "Mshirika wa Vyombo vya Habari",
              support: "Utetezi na Uelewa wa Vijana",
              logo: "📻",
            },
            {
              name: "Ushirika wa Wakulima",
              type: "Mshirika wa Kilimo",
              support: "Mafunzo ya Biashara ya Kilimo",
              logo: "🌾",
            },
          ],
        },
        institutional: {
          title: "Washirika wa Kitaasisi",
          description: "Mashirika ya serikali na taasisi za kielimu",
          partners: [
            {
              name: "Wizara ya Vijana, Utamaduni, Sanaa na Michezo",
              type: "Serikali",
              support: "Maendeleo na Utekelezaji wa Sera",
              logo: "🏛️",
            },
            {
              name: "Chuo Kikuu cha Dar es Salaam",
              type: "Taasisi ya Kielimu",
              support: "Utafiti na Ushauri",
              logo: "🎓",
            },
            {
              name: "Serikali ya Mkoa",
              type: "Serikali ya Mitaa",
              support: "Maendeleo ya Jamii",
              logo: "🏢",
            },
          ],
        },
      },
      benefits: {
        title: "Kwa Nini Kushirikiana Nasi?",
        items: [
          {
            icon: Users,
            title: "Athari ya Moja kwa Moja kwa Jamii",
            description:
              "Mchango wako unanufaisha moja kwa moja vijana katika jamii zilizopuuzwa",
          },
          {
            icon: Award,
            title: "Utambuzi na Mwonekano",
            description:
              "Kuoneshwa kwenye tovuti yetu, matukio, na nyenzo za mawasiliano",
          },
          {
            icon: Handshake,
            title: "Miradi ya Ushirikiano",
            description:
              "Fursa ya kuunda programu pamoja zinazolingana na dira yako",
          },
          {
            icon: Building2,
            title: "Ujumuishaji wa CSR",
            description:
              "Weka malengo yako ya wajibu wa kijamii na matokeo halisi",
          },
        ],
      },
      partnership: {
        title: "Kuwa Mshirika",
        subtitle: "Jiunge nasi katika kubadilisha maisha ya vijana",
        description:
          "Ikiwa wewe ni kampuni, msingi, au mtu binafsi, kuna njia nyingi za kushirikiana na Kijana Simama.",
        options: [
          {
            title: "Ufadhili wa Programu",
            description:
              "Fikiria programu maalum kama elimu, mafunzo ya ujuzi, au ushauri",
            min: "TZS 12,000,000/mwaka",
          },
          {
            title: "Msaada wa Aina",
            description: "Toa vifaa, nyenzo, au huduma za kitaalamu",
            min: "Inaweza kubadilika",
          },
          {
            title: "Ushiriki wa Wafanyakazi",
            description:
              "Husisha timu yako kupitia kujitolea na kushiriki ujuzi",
            min: "Hakuna kiwango cha chini",
          },
          {
            title: "Ufadhili wa Tukio",
            description:
              "Saidia matukio yetu ya kila mwaka, warsha, na kampeni",
            min: "TZS 2,400,000/tukio",
          },
        ],
      },
      testimonials: {
        title: "Washirika Wetu Wanasema Nini",
        items: [
          {
            quote:
              "Kushirikiana na Kijana Simama kumeturuhusu kuleta mabadiliko halisi katika maendeleo ya vijana. Programu zao zimepangwa vizuri na zina athari.",
            author: "Sarah Johnson",
            role: "Mkurugenzi wa CSR, Tech For Good Initiative",
            company: "💻",
          },
          {
            quote:
              "Uwazi na kujitolea kwa timu ya Kijana Simama ni wa kusifiwa. Tumeona kwa macho yetu mabadiliko mazuri katika maisha ya vijana.",
            author: "James Mbwana",
            role: "Meneja wa Uhusiano wa Jamii, Community Bank Tanzania",
            company: "🏦",
          },
        ],
      },
      cta: {
        title: "Tayari Kuleta Mabadiliko?",
        description: "Wasiliana nasi kujadili fursa za ushirikiano",
        button: "Wasiliana Nasi",
        email: "Wasiliana kwa Barua Pepe",
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary to-blue-700 text-white py-20 animate-in fade-in duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Handshake className="w-16 h-16 mx-auto mb-6 animate-in zoom-in duration-700 delay-200" />
            <h1 className="text-4xl md:text-6xl mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-300">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90 animate-in slide-in-from-bottom-4 duration-700 delay-400">
              {t.hero.subtitle}
            </p>
            <p className="text-lg opacity-80 animate-in slide-in-from-bottom-4 duration-700 delay-500">
              {t.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-linear-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.values(t.stats).map((stat, index) => (
              <Card
                key={index}
                className="hover-lift animate-in zoom-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl md:text-5xl text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center text-gray-900 mb-12">
            {t.categories.title}
          </h2>

          <div className="space-y-16">
            {/* Platinum Sponsors */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl text-gray-900">
                  {t.categories.platinum.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-8">
                {t.categories.platinum.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.categories.platinum.partners.map((partner, index) => (
                  <Card
                    key={index}
                    className="hover-lift border-2 border-purple-200"
                  >
                    <CardContent className="p-8">
                      <div className="text-6xl mb-4 text-center">
                        {partner.logo}
                      </div>
                      <h4 className="text-xl text-gray-900 mb-2">
                        {partner.name}
                      </h4>
                      <p className="text-sm text-purple-600 mb-3">
                        {partner.type}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        {partner.support}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {language === "en" ? "Learn More" : "Jifunze Zaidi"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Gold Sponsors */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-yellow-600" />
                <h3 className="text-2xl text-gray-900">
                  {t.categories.gold.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-8">
                {t.categories.gold.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.categories.gold.partners.map((partner, index) => (
                  <Card
                    key={index}
                    className="hover-lift border-2 border-yellow-200"
                  >
                    <CardContent className="p-6">
                      <div className="text-5xl mb-3 text-center">
                        {partner.logo}
                      </div>
                      <h4 className="text-lg text-gray-900 mb-2">
                        {partner.name}
                      </h4>
                      <p className="text-xs text-yellow-600 mb-2">
                        {partner.type}
                      </p>
                      <p className="text-gray-600 text-xs">{partner.support}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Silver Sponsors */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-gray-400" />
                <h3 className="text-2xl text-gray-900">
                  {t.categories.silver.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-8">
                {t.categories.silver.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {t.categories.silver.partners.map((partner, index) => (
                  <Card key={index} className="hover-lift">
                    <CardContent className="p-6">
                      <div className="text-5xl mb-3 text-center">
                        {partner.logo}
                      </div>
                      <h4 className="text-lg text-gray-900 mb-2">
                        {partner.name}
                      </h4>
                      <p className="text-xs text-gray-500 mb-2">
                        {partner.type}
                      </p>
                      <p className="text-gray-600 text-xs">{partner.support}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Institutional Partners */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-8 h-8 text-primary" />
                <h3 className="text-2xl text-gray-900">
                  {t.categories.institutional.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-8">
                {t.categories.institutional.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.categories.institutional.partners.map((partner, index) => (
                  <Card
                    key={index}
                    className="hover-lift border-2 border-primary/20"
                  >
                    <CardContent className="p-6">
                      <div className="text-5xl mb-3 text-center">
                        {partner.logo}
                      </div>
                      <h4 className="text-lg text-gray-900 mb-2">
                        {partner.name}
                      </h4>
                      <p className="text-xs text-primary mb-2">
                        {partner.type}
                      </p>
                      <p className="text-gray-600 text-xs">{partner.support}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center text-gray-900 mb-12">
            {t.benefits.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              {t.partnership.title}
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              {t.partnership.subtitle}
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t.partnership.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.partnership.options.map((option, index) => (
              <Card
                key={index}
                className="hover-lift border-2 border-gray-200 hover:border-primary"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg text-gray-900 mb-3">{option.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {option.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-sm text-primary">{option.min}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-linear-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center text-gray-900 mb-12">
            {t.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {t.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{testimonial.company}</div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-secondary to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">{t.cta.title}</h2>
          <p className="text-xl mb-8 opacity-90">{t.cta.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate("contact")}
              size="lg"
              className="bg-white text-secondary hover:bg-gray-100"
            >
              <Mail className="mr-2 w-5 h-5" />
              {t.cta.button}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <ExternalLink className="mr-2 w-5 h-5" />
              {t.cta.email}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
