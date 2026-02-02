import React from "react";
import {
  BookOpen,
  Users,
  Briefcase,
  Award,
  GraduationCap,
  Heart,
  Lightbulb,
  Globe,
  HeartPulse,
  Laptop,
  DollarSign,
  UserCheck,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface ServicesPageProps {
  language: "en" | "sw";
  onNavigate: (page: string) => void;
}

export function ServicesPage({ language, onNavigate }: ServicesPageProps) {
  const translations = {
    en: {
      title: "Our Services",
      subtitle:
        "Holistic programs designed to empower in-school adolescents and youth",
      intro:
        "Kijana Simama offers comprehensive services and programs tailored to meet the unique needs of in-school adolescents across Tanzania. From mental health support to financial literacy, we provide holistic support for youth development and wellbeing.",
      services: [
        {
          icon: "GraduationCap",
          title: "Life Skills & Personal Development",
          description:
            "Building essential life skills to help adolescents navigate challenges and make informed decisions.",
          features: [
            "Decision-making and problem-solving",
            "Self-awareness and confidence building",
            "Communication & relationship skills",
          ],
        },
        {
          icon: "Users",
          title: "Mentorship & Guidance",
          description:
            "Connecting youth with positive role models who provide guidance and support.",
          features: [
            "One-on-one and group mentorship",
            "Academic and career guidance",
            "Positive role-model connections",
          ],
        },
        {
          icon: "Heart",
          title: "Mental Health & Wellness Support",
          description:
            "Providing mental health support and emotional wellbeing resources for adolescents.",
          features: [
            "Basic counselling and peer support",
            "Stress and emotional management",
            "Referrals for specialized care",
          ],
        },
        {
          icon: "HeartPulse",
          title: "Sexual & Reproductive Health Education",
          description:
            "Age-appropriate education to support healthy choices and informed decision-making.",
          features: [
            "Age-appropriate SRH information",
            "Menstrual health education",
            "Support for healthy, informed choices",
          ],
        },
        {
          icon: "Laptop",
          title: "Digital Literacy & ICT Skills",
          description:
            "Equipping youth with essential digital skills for the modern world.",
          features: [
            "Basic computer and smartphone skills",
            "Safe internet use",
            "Digital productivity tools",
          ],
        },
        {
          icon: "DollarSign",
          title: "Entrepreneurship & Financial Skills",
          description:
            "Teaching financial literacy and entrepreneurship for economic empowerment.",
          features: [
            "Simple business skills",
            "Budgeting and saving",
            "Income-generation ideas for youth",
          ],
        },
        {
          icon: "Award",
          title: "Community Engagement & Leadership",
          description:
            "Developing leadership skills and community involvement among youth.",
          features: [
            "Youth clubs and community service",
            "Leadership development",
            "Citizenship and volunteerism",
          ],
        },
        {
          icon: "UserCheck",
          title: "Parental & Teacher Support Programs",
          description:
            "Strengthening the support system around adolescents through parent and teacher engagement.",
          features: [
            "Positive parenting techniques",
            "Strengthening parent-adolescent communication",
            "Capacity building for teachers & youth champions",
          ],
        },
        {
          icon: "Smartphone",
          title: "Kijana Simama App",
          description:
            "Digital platform providing access to learning resources and support tools.",
          features: [
            "Digital access to learning resources",
            "Mental health and SRH guidance",
            "Real-time mentorship and support tools",
          ],
        },
      ],
      cta: {
        title: "Interested in Our Programs?",
        subtitle:
          "Contact us to learn more about how you or someone you know can benefit from our services.",
        button: "Contact Us",
      },
    },
    sw: {
      title: "Huduma Zetu",
      subtitle: "Programu za kina zilizoundwa kuwapa nguvu wanafunzi vijana",
      intro:
        "Kijana Simama inatoa huduma na programu mbalimbali zilizoundwa kukidhi mahitaji ya kipekee ya wanafunzi vijana kote Tanzania. Kutoka msaada wa afya ya akili hadi ujuzi wa kifedha, tunatoa msaada wa kina kwa maendeleo na ustawi wa vijana.",
      services: [
        {
          icon: "GraduationCap",
          title: "Ujuzi wa Maisha & Maendeleo ya Kibinafsi",
          description:
            "Kujenga ujuzi muhimu wa maisha kusaidia vijana kukabiliana na changamoto na kufanya maamuzi sahihi.",
          features: [
            "Kufanya maamuzi na kutatua matatizo",
            "Kujitambua na kujenga ujasiri",
            "Mawasiliano na ujuzi wa mahusiano",
          ],
        },
        {
          icon: "Users",
          title: "Ushauri & Mwongozo",
          description:
            "Kuunganisha vijana na mfano chanya ambao wanatoa mwongozo na msaada.",
          features: [
            "Ushauri wa mtu kwa mtu na wa kikundi",
            "Mwongozo wa masomo na kazi",
            "Mahusiano ya mfano chanya",
          ],
        },
        {
          icon: "Heart",
          title: "Msaada wa Afya ya Akili & Ustawi",
          description:
            "Kutoa msaada wa afya ya akili na rasilimali za ustawi wa kihisia kwa vijana.",
          features: [
            "Ushauri wa msingi na msaada wa rika",
            "Usimamizi wa msongo na kihisia",
            "Marejeo kwa huduma maalum",
          ],
        },
        {
          icon: "HeartPulse",
          title: "Elimu ya Afya ya Uzazi na Uzazi",
          description:
            "Elimu inayofaa kwa umri kusaidia uchaguzi wa kiafya na maamuzi ya habari.",
          features: [
            "Habari za SRH zinazofaa kwa umri",
            "Elimu ya afya ya hedhi",
            "Msaada kwa uchaguzi wa kiafya wa habari",
          ],
        },
        {
          icon: "Laptop",
          title: "Ujuzi wa Kidijitali & Ujuzi wa ICT",
          description:
            "Kuwapa vijana ujuzi muhimu wa kidijitali kwa ulimwengu wa kisasa.",
          features: [
            "Ujuzi wa kompyuta na simu ya mkononi wa msingi",
            "Matumizi salama ya mtandao",
            "Zana za uzalishaji wa kidijitali",
          ],
        },
        {
          icon: "DollarSign",
          title: "Ujasiriamali & Ujuzi wa Kifedha",
          description:
            "Kufundisha ujuzi wa kifedha na ujasiriamali kwa uwezeshaji wa kiuchumi.",
          features: [
            "Ujuzi wa biashara rahisi",
            "Bajeti na akiba",
            "Mawazo ya kuzalisha kipato kwa vijana",
          ],
        },
        {
          icon: "Award",
          title: "Ushiriki wa Jamii & Uongozi",
          description:
            "Kuendeleza ujuzi wa uongozi na ushiriki wa jamii kati ya vijana.",
          features: [
            "Viklabu vya vijana na huduma ya jamii",
            "Maendeleo ya uongozi",
            "Uraia na kujitolea",
          ],
        },
        {
          icon: "UserCheck",
          title: "Programu za Msaada kwa Wazazi na Walimu",
          description:
            "Kuimarisha mfumo wa msaada kuzunguka vijana kupitia ushiriki wa wazazi na walimu.",
          features: [
            "Mbinu za malezi chanya",
            "Kuimarisha mawasiliano ya mzazi-kijana",
            "Kujenga uwezo kwa walimu na mabingwa wa vijana",
          ],
        },
        {
          icon: "Smartphone",
          title: "Programu ya Kijana Simama",
          description:
            "Jukwaa la kidijitali linalotoa upatikanaji wa rasilimali za kujifunza na zana za msaada.",
          features: [
            "Upatikanaji wa kidijitali wa rasilimali za kujifunza",
            "Mwongozo wa afya ya akili na SRH",
            "Zana za ushauri na msaada wa wakati halisi",
          ],
        },
      ],
      cta: {
        title: "Unavutiwa na Programu Zetu?",
        subtitle:
          "Wasiliana nasi kujifunza zaidi jinsi wewe au mtu unayemjua anaweza kufaidika na huduma zetu.",
        button: "Wasiliana Nasi",
      },
    },
  };

  const t = translations[language];

  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-8 h-8" />,
    Users: <Users className="w-8 h-8" />,
    Briefcase: <Briefcase className="w-8 h-8" />,
    Award: <Award className="w-8 h-8" />,
    Heart: <Heart className="w-8 h-8" />,
    Lightbulb: <Lightbulb className="w-8 h-8" />,
    Globe: <Globe className="w-8 h-8" />,
    BookOpen: <BookOpen className="w-8 h-8" />,
    HeartPulse: <HeartPulse className="w-8 h-8" />,
    Laptop: <Laptop className="w-8 h-8" />,
    DollarSign: <DollarSign className="w-8 h-8" />,
    UserCheck: <UserCheck className="w-8 h-8" />,
    Smartphone: <Smartphone className="w-8 h-8" />,
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary to-blue-600 text-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl mb-4"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-6"
          >
            {t.subtitle}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-blue-100 max-w-3xl"
          >
            {t.intro}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {t.services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 text-secondary"
                    >
                      {iconMap[service.icon]}
                    </motion.div>
                    <h3 className="text-xl mb-3 text-primary">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="text-secondary mt-1">✓</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-secondary to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">{t.cta.title}</h2>
            <p className="text-xl mb-8">{t.cta.subtitle}</p>
            <Button
              size="lg"
              className="bg-white text-secondary hover:bg-gray-100 transform hover:scale-105 transition-transform duration-200"
              onClick={() => onNavigate("contact")}
            >
              {t.cta.button}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
