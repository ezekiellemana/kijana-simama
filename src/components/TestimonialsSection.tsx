import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  TrendingUp,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedSection } from "./AnimatedSection";

interface TestimonialsSectionProps {
  language: "en" | "sw";
}

export function TestimonialsSection({ language }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = {
    en: {
      badge: "Success Stories",
      title: "Voices of Transformation",
      subtitle: "Real stories from youth whose lives have been changed",
      viewAll: "View All Stories",
      previous: "Previous",
      next: "Next",
      impact: "Impact",
    },
    sw: {
      badge: "Hadithi za Mafanikio",
      title: "Sauti za Mabadiliko",
      subtitle:
        "Hadithi za kweli kutoka kwa vijana ambao maisha yao yamebadilika",
      viewAll: "Angalia Hadithi Zote",
      previous: "Iliyotangulia",
      next: "Inayofuata",
      impact: "Athari",
    },
  };

  const t = content[language];

  const testimonials = [
    {
      id: 1,
      name: "Amina Hassan",
      age: 17,
      location: "Dar es Salaam",
      image:
        "https://images.unsplash.com/photo-1604072424771-7300bc5de457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIweW91dGglMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQyNjAyNzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      role:
        language === "en"
          ? "Secondary School Student"
          : "Mwanafunzi wa Sekondari",
      program:
        language === "en"
          ? "Mental Health & Wellness Support"
          : "Msaada wa Afya ya Akili",
      quote:
        language === "en"
          ? "Kijana Simama helped me understand and manage my stress during exams. The counseling sessions gave me tools to stay calm and focused. I feel more confident about my future now."
          : "Kijana Simama walinisaidia kuelewa na kudhibiti msongo wangu wakati wa mitihani. Vikao vya ushauri vilinipa zana za kukaa kimya na kuzingatia. Ninahisi ujasiri zaidi kuhusu mustakabali wangu sasa.",
      achievement:
        language === "en"
          ? "Improved mental wellbeing"
          : "Ustawi wa akili ulioboreshwa",
      rating: 5,
    },
    {
      id: 2,
      name: "David Mwinyi",
      age: 16,
      location: "Mwanza",
      image:
        "https://images.unsplash.com/photo-1730768813881-ba6135d13a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YW4lMjBzdHVkZW50fGVufDF8fHx8MTc2NDI2MDI3NHww&ixlib=rb-4.1.0&q=80&w=1080",
      role:
        language === "en" ? "Form 4 Student" : "Mwanafunzi wa Kidato cha Nne",
      program:
        language === "en"
          ? "Digital Literacy & ICT Skills"
          : "Ujuzi wa Kidijitali na ICT",
      quote:
        language === "en"
          ? "Through the Kijana Simama App and ICT training, I learned computer skills that will help me in the future. Now I can help my classmates with their assignments using technology."
          : "Kupitia Programu ya Kijana Simama na mafunzo ya ICT, nilijifunza ujuzi wa kompyuta utakaonisaidia siku za usoni. Sasa ninaweza kusaidia wanafunzi wenzangu na kazi zao kwa kutumia teknolojia.",
      achievement:
        language === "en"
          ? "Mastered basic digital skills"
          : "Ujuzi wa kimsingi wa kidijitali",
      rating: 5,
    },
    {
      id: 3,
      name: "Grace Komba",
      age: 18,
      location: "Arusha",
      image:
        "https://images.unsplash.com/photo-1692883702706-a50fc21da44f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZ3JhZHVhdGV8ZW58MXx8fHwxNzY0MjYwMjc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      role: language === "en" ? "Youth Leader" : "Kiongozi wa Vijana",
      program:
        language === "en"
          ? "Community Engagement & Leadership"
          : "Ushiriki wa Jamii na Uongozi",
      quote:
        language === "en"
          ? "The leadership program taught me how to stand tall and make a difference. I now lead a youth club at my school and we organize community service projects that help other students."
          : "Programu ya uongozi ilinifundisha jinsi ya kusimama wima na kufanya tofauti. Sasa ninaongoza klabu ya vijana shuleni kwangu na tunapanga miradi ya huduma ya jamii inayosaidia wanafunzi wengine.",
      achievement:
        language === "en"
          ? "Led youth club projects"
          : "Aliongoza miradi ya klabu ya vijana",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-linear-to-b from-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fadeIn">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              <Award className="w-4 h-4 mr-2" />
              {t.badge}
            </Badge>
            <h2 className="text-3xl md:text-5xl text-primary mb-4">
              {t.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </AnimatedSection>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left - Image */}
                <AnimatedSection
                  animation="slideRight"
                  className="relative h-96 md:h-auto"
                >
                  <ImageWithFallback
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl md:text-3xl mb-2">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-lg text-blue-100">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-sm text-blue-200 mt-1">
                      {currentTestimonial.location} •{" "}
                      {language === "en" ? "Age" : "Umri"}{" "}
                      {currentTestimonial.age}
                    </p>
                  </div>
                </AnimatedSection>

                {/* Right - Content */}
                <AnimatedSection
                  animation="slideLeft"
                  className="p-8 md:p-12 flex flex-col justify-center"
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-primary/20" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                    "{currentTestimonial.quote}"
                  </blockquote>

                  {/* Program Badge */}
                  <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4 w-fit">
                    {currentTestimonial.program}
                  </Badge>

                  {/* Achievement */}
                  <div className="flex items-center gap-2 text-primary mb-8">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm">
                      {currentTestimonial.achievement}
                    </span>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Button
                        onClick={previousTestimonial}
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary/10"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        {t.previous}
                      </Button>
                      <Button
                        onClick={nextTestimonial}
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary/10"
                      >
                        {t.next}
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="text-sm text-gray-500">
                      {currentIndex + 1} / {testimonials.length}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative overflow-hidden rounded-lg transition-all ${
                index === currentIndex
                  ? "ring-4 ring-primary shadow-lg scale-105"
                  : "opacity-60 hover:opacity-100 hover:scale-105"
              }`}
            >
              <div className="aspect-square">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-3">
                <div className="text-white text-left">
                  <p className="text-sm">{testimonial.name}</p>
                  <p className="text-xs text-blue-200">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Stats */}
        <AnimatedSection animation="fadeIn">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-linear-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <div className="text-center">
              <p className="text-3xl md:text-4xl mb-2">500+</p>
              <p className="text-sm text-blue-100">
                {language === "en" ? "Success Stories" : "Hadithi za Mafanikio"}
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl mb-2">95%</p>
              <p className="text-sm text-blue-100">
                {language === "en"
                  ? "Satisfaction Rate"
                  : "Kiwango cha Kuridhika"}
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl mb-2">200+</p>
              <p className="text-sm text-blue-100">
                {language === "en"
                  ? "Businesses Started"
                  : "Biashara Zilizoanzishwa"}
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl mb-2">85%</p>
              <p className="text-sm text-blue-100">
                {language === "en" ? "Employment Rate" : "Kiwango cha Ajira"}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
