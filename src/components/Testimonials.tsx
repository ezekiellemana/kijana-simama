import { Quote, Star, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface TestimonialsProps {
  language: "en" | "sw";
  variant?: "full" | "compact";
  showTitle?: boolean;
}

export function Testimonials({
  language,
  variant = "full",
  showTitle = true,
}: TestimonialsProps) {
  const content = {
    en: {
      title: "Success Stories & Testimonials",
      subtitle: "Hear from the youth and communities we have empowered",
      stories: [
        {
          name: "Amina Hassan",
          age: 22,
          role: "Program Graduate",
          location: "Dar es Salaam",
          image: "👩",
          story:
            "Kijana Simama changed my life. Through their education program, I completed my secondary education and received a scholarship for university. Now I'm studying computer science and giving back to my community.",
          impact: "Received scholarship, Now mentoring 15 younger students",
          rating: 5,
        },
        {
          name: "John Mwakasege",
          age: 24,
          role: "Entrepreneur",
          location: "Mwanza",
          image: "👨",
          story:
            "The skills training program taught me entrepreneurship and business management. I started my own small business and now employ three other young people from my community.",
          impact: "Started successful business, Created 3 jobs",
          rating: 5,
        },
        {
          name: "Grace Moshi",
          age: 20,
          role: "Youth Leader",
          location: "Arusha",
          image: "👩",
          story:
            "I joined Kijana Simama's leadership program when I was 17. Today, I lead youth advocacy initiatives in my region and have helped launch two community projects.",
          impact: "Leading 2 community projects, Mentoring 30+ youth",
          rating: 5,
        },
        {
          name: "David Mwinyi",
          age: 23,
          role: "IT Professional",
          location: "Dodoma",
          image: "👨",
          story:
            "The digital literacy program opened doors I never knew existed. I learned coding and web development, and now I work as a junior developer at a tech company.",
          impact: "Secured professional employment, Teaching coding to peers",
          rating: 5,
        },
        {
          name: "Mary Kitila",
          age: 21,
          role: "Teacher",
          location: "Mbeya",
          image: "👩",
          story:
            "Thanks to Kijana Simama's mentorship program, I gained confidence and clarity about my career path. I'm now a certified teacher inspiring the next generation.",
          impact: "Teaching 45 students, Running after-school program",
          rating: 5,
        },
        {
          name: "Michael Makoye",
          age: 25,
          role: "Social Worker",
          location: "Dar es Salaam",
          image: "👨",
          story:
            "I was once a beneficiary, now I'm a mentor. Kijana Simama not only helped me complete my education but also showed me the importance of giving back.",
          impact: "Mentoring 20 at-risk youth, Volunteer coordinator",
          rating: 5,
        },
      ],
    },
    sw: {
      title: "Hadithi za Mafanikio na Ushuhuda",
      subtitle: "Sikia kutoka kwa vijana na jamii tulizowapa nguvu",
      stories: [
        {
          name: "Amina Hassan",
          age: 22,
          role: "Mhitimu wa Programu",
          location: "Dar es Salaam",
          image: "👩",
          story:
            "Kijana Simama ilibadilisha maisha yangu. Kupitia programu yao ya elimu, nilikamilisha elimu yangu ya sekondari na kupata ufadhili wa chuo kikuu. Sasa ninasoma sayansi ya kompyuta na kurudisha kwa jamii yangu.",
          impact: "Alipata ufadhili, Sasa anashauri wanafunzi 15 wadogo",
          rating: 5,
        },
        {
          name: "John Mwakasege",
          age: 24,
          role: "Mjasiriamali",
          location: "Mwanza",
          image: "👨",
          story:
            "Programu ya mafunzo ya ujuzi ilinifundisha ujasiriamali na usimamizi wa biashara. Nilianzisha biashara yangu ndogo na sasa ninaajiri vijana wengine watatu kutoka jamii yangu.",
          impact: "Alianzisha biashara yenye mafanikio, Aliunda kazi 3",
          rating: 5,
        },
        {
          name: "Grace Moshi",
          age: 20,
          role: "Kiongozi wa Vijana",
          location: "Arusha",
          image: "👩",
          story:
            "Nilijiunga na programu ya uongozi ya Kijana Simama nilipokuwa na umri wa miaka 17. Leo, ninaongoza mipango ya utetezi wa vijana katika mkoa wangu na nimesaidia kuzindua miradi miwili ya jamii.",
          impact: "Anaongoza miradi 2 ya jamii, Anashauri vijana 30+",
          rating: 5,
        },
        {
          name: "David Mwinyi",
          age: 23,
          role: "Mtaalamu wa IT",
          location: "Dodoma",
          image: "👨",
          story:
            "Programu ya ujuzi wa kidijitali ilifungua milango ambayo sikujua ilikuwepo. Nilijifunza coding na utengenezaji wa tovuti, na sasa ninafanya kazi kama msanidi programu mdogo katika kampuni ya teknolojia.",
          impact: "Alipata ajira ya kitaalamu, Anafundisha coding kwa wenzake",
          rating: 5,
        },
        {
          name: "Mary Kitila",
          age: 21,
          role: "Mwalimu",
          location: "Mbeya",
          image: "👩",
          story:
            "Shukrani kwa programu ya ushauri ya Kijana Simama, nilipata ujasiri na uwazi kuhusu njia yangu ya kazi. Sasa ni mwalimu aliye na cheti wa kuhamasisha kizazi kijacho.",
          impact:
            "Anafundisha wanafunzi 45, Anaendesha programu ya baada ya shule",
          rating: 5,
        },
        {
          name: "Michael Makoye",
          age: 25,
          role: "Mfanyakazi wa Kijamii",
          location: "Dar es Salaam",
          image: "👨",
          story:
            "Nilikuwa mara moja mstahili, sasa ni mshauri. Kijana Simama siyo tu ilinisaidia kukamilisha elimu yangu lakini pia ilionyesha umuhimu wa kurudisha.",
          impact: "Anashauri vijana 20 walio hatarini, Mratibu wa kujitolea",
          rating: 5,
        },
      ],
    },
  };

  const t = content[language];
  const displayStories =
    variant === "compact" ? t.stories.slice(0, 3) : t.stories;

  return (
    <div className="py-20 bg-linear-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <Quote className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
              {t.title}
            </h2>
            <p className="text-xl text-gray-600">{t.subtitle}</p>
          </div>
        )}

        <div
          className={`grid grid-cols-1 ${variant === "compact" ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"} gap-8`}
        >
          {displayStories.map((story, index) => (
            <Card
              key={index}
              className="hover-lift animate-in zoom-in duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Header with avatar and rating */}
                <div className="bg-linear-to-br from-primary to-blue-600 p-6 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-5xl">{story.image}</div>
                      <div>
                        <h3 className="text-xl">{story.name}</h3>
                        <p className="text-sm opacity-90">
                          {story.age}{" "}
                          {language === "en" ? "years old" : "miaka"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: story.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-300 text-yellow-300"
                      />
                    ))}
                  </div>
                  <div className="text-sm opacity-90">
                    <p>{story.role}</p>
                    <p>{story.location}</p>
                  </div>
                </div>

                {/* Story content */}
                <div className="p-6">
                  <div className="relative mb-4">
                    <Quote className="w-6 h-6 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic pl-4">{story.story}</p>
                  </div>

                  {/* Impact badge */}
                  <div className="bg-linear-to-r from-secondary/10 to-primary/10 rounded-lg p-4 border-l-4 border-secondary">
                    <div className="flex items-start gap-2">
                      <Heart className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-secondary mb-1">
                          {language === "en" ? "Impact:" : "Athari:"}
                        </p>
                        <p className="text-sm text-gray-700">{story.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {variant === "compact" && (
          <div className="text-center mt-12">
            <p className="text-gray-600">
              {language === "en"
                ? "These are just a few of the many success stories from our programs."
                : "Hizi ni chache tu kati ya hadithi nyingi za mafanikio kutoka programu zetu."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Compact testimonial card for embedding in other pages
export function TestimonialCard({
  name,
  role,
  quote,
  image,
}: {
  name: string;
  role: string;
  quote: string;
  image: string;
}) {
  return (
    <Card className="hover-lift h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl">{image}</div>
          <div>
            <h4 className="text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
        <Quote className="w-6 h-6 text-primary/20 mb-2" />
        <p className="text-gray-700 italic">"{quote}"</p>
      </CardContent>
    </Card>
  );
}
