import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import familyImage from "../assets/familyImage.jpg";
import studentsImage from "../assets/studentsImage.jpg";
import educationImage from "../assets/educationImage.jpg";
import mentorChildImage from "../assets/mentorChildImage.jpg";

interface EventsPageProps {
  language: "en" | "sw";
}

export function EventsPage({ language }: EventsPageProps) {
  const translations = {
    en: {
      title: "Events",
      subtitle: "Upcoming activities and youth-focused programs",
      upcoming: "Upcoming Events",
      events: [
        {
          id: 1,
          title: "Suicide Prevention Awareness Campaign Workshop",
          date: "October 2026",
          time: "To be announced",
          location: "Partner Schools",
          attendees: "Open to students and school communities",
          description:
            "A school-based awareness workshop focused on suicide prevention, mental health literacy, early support, and safe referral pathways for adolescents.",
          image: studentsImage,
        },
        {
          id: 2,
          title: "Mental Health Awareness Session",
          date: "October 2026",
          time: "To be announced",
          location: "Partner Schools and Youth Spaces",
          attendees: "Open to adolescents and educators",
          description:
            "A practical mental health awareness session helping young people understand emotions, stress, peer support, and when to seek help.",
          image: mentorChildImage,
        },
        {
          id: 3,
          title: "Youth Leadership Summit",
          date: "December 2026",
          time: "To be announced",
          location: "Dar es Salaam",
          attendees: "Youth leaders and student representatives",
          description:
            "A youth leadership summit by Kijana Simama under the Hongoza Vizazi theme, designed to build confidence, responsibility, and peer leadership.",
          image: educationImage,
        },
        {
          id: 4,
          title: "Youth Financial Literacy Training",
          date: "December 2026",
          time: "To be announced",
          location: "Dar es Salaam",
          attendees: "Adolescents and young people",
          description:
            "Simama Kijedha is a practical training on money habits, saving, planning, and everyday financial confidence for young people.",
          image: familyImage,
        },
      ],
      register: "Register Interest",
    },
    sw: {
      title: "Matukio",
      subtitle: "Matukio yanayokuja na programu zinazolenga vijana",
      upcoming: "Matukio Yanayokuja",
      events: [
        {
          id: 1,
          title: "Warsha ya Uelewa wa Kuzuia Kujiua",
          date: "Oktoba 2026",
          time: "Itatangazwa",
          location: "Shule Washirika",
          attendees: "Wanafunzi na jamii za shule",
          description:
            "Warsha ya shule kuhusu kuzuia kujiua, uelewa wa afya ya akili, msaada wa mapema, na njia salama za kupata huduma kwa vijana balehe.",
          image: studentsImage,
        },
        {
          id: 2,
          title: "Kikao cha Uelewa wa Afya ya Akili",
          date: "Oktoba 2026",
          time: "Itatangazwa",
          location: "Shule Washirika na Maeneo ya Vijana",
          attendees: "Vijana balehe na walimu",
          description:
            "Kikao cha vitendo kinachowasaidia vijana kuelewa hisia, msongo, msaada wa rika, na wakati wa kutafuta msaada.",
          image: mentorChildImage,
        },
        {
          id: 3,
          title: "Youth Leadership Summit",
          date: "Desemba 2026",
          time: "Itatangazwa",
          location: "Dar es Salaam",
          attendees: "Viongozi vijana na wawakilishi wa wanafunzi",
          description:
            "Mkutano wa uongozi wa vijana wa Kijana Simama chini ya kaulimbiu Hongoza Vizazi, ukijenga ujasiri, uwajibikaji, na uongozi wa rika.",
          image: educationImage,
        },
        {
          id: 4,
          title: "Mafunzo ya Ujuzi wa Fedha kwa Vijana",
          date: "Desemba 2026",
          time: "Itatangazwa",
          location: "Dar es Salaam",
          attendees: "Vijana balehe na vijana",
          description:
            "Simama Kijedha ni mafunzo ya vitendo kuhusu tabia za fedha, kuweka akiba, kupanga matumizi, na kujiamini kifedha kwa vijana.",
          image: familyImage,
        },
      ],
      register: "Onyesha Nia ya Kushiriki",
    },
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-linear-to-br from-primary to-blue-600 text-white py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
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
            className="text-xl md:text-2xl text-blue-100"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl mb-12 text-primary"
          >
            {t.upcoming}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {t.events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 h-full">
                  <div className="relative h-56 overflow-hidden group">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-secondary text-white">{t.upcoming}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-3 text-primary">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-secondary" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-secondary" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-secondary" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-secondary" />
                        {event.attendees}
                      </div>
                    </div>

                    <Button className="w-full bg-secondary hover:bg-secondary/90">
                      {t.register}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
