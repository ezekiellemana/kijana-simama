import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import familyImage from "../assets/familyImage.jpg";

interface EventsPageProps {
  language: "en" | "sw";
}

export function EventsPage({ language }: EventsPageProps) {
  const translations = {
    en: {
      title: "Events",
      subtitle: "Join us at our upcoming events and activities",
      upcoming: "Upcoming Events",
      past: "Past Events",
      events: {
        upcoming: [
          {
            id: 1,
            title: "Youth Leadership Summit 2024",
            date: "March 15-17, 2024",
            time: "9:00 AM - 5:00 PM",
            location: "Julius Nyerere International Convention Centre",
            attendees: "200+ Expected",
            description:
              "Three days of intensive training, networking, and inspiration for young leaders across Tanzania.",
            image:
              "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRyYWluaW5nfGVufDF8fHx8MTc2NDE4NjA5OHww&ixlib=rb-4.1.0&q=80&w=1080",
          },
          {
            id: 2,
            title: "Digital Skills Workshop",
            date: "February 20, 2024",
            time: "2:00 PM - 6:00 PM",
            location: "Dar es Salaam Tech Hub",
            attendees: "50+ Expected",
            description:
              "Learn coding, web design, and digital marketing from industry professionals.",
            image:
              "https://images.unsplash.com/photo-1759922378123-a1f4f1e39bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NDI0NTExNXww&ixlib=rb-4.1.0&q=80&w=1080",
          },
          {
            id: 3,
            title: "Community Clean-Up Day",
            date: "February 28, 2024",
            time: "7:00 AM - 12:00 PM",
            location: "Uhuru Park",
            attendees: "100+ Expected",
            description:
              "Join us for a morning of environmental conservation and community service.",
            image: familyImage,
          },
        ],
        past: [
          {
            id: 4,
            title: "Annual Fundraising Gala 2023",
            date: "December 10, 2023",
            location: "Serena Hotel",
            attendees: "300+ Attended",
            description:
              "A successful evening of celebration and fundraising that raised TZS 120,000,000 for youth programs.",
            image:
              "https://images.unsplash.com/photo-1559315558-6fbcbd3cf22d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIweW91dGglMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NjQyNTg3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          },
          {
            id: 5,
            title: "Career Fair 2023",
            date: "October 15, 2023",
            location: "University of Dar es Salaam",
            attendees: "500+ Attended",
            description:
              "Connected youth with potential employers and career opportunities.",
            image:
              "https://images.unsplash.com/photo-1759922378187-11a435837df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3JzaGlwJTIwcHJvZ3JhbXxlbnwxfHx8fDE3NjQyMjg3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
          },
        ],
      },
      register: "Register Now",
      viewDetails: "View Details",
    },
    sw: {
      title: "Matukio",
      subtitle: "Jiunge nasi katika matukio yetu yanayokuja na shughuli",
      upcoming: "Matukio Yanayokuja",
      past: "Matukio Yaliyopita",
      events: {
        upcoming: [
          {
            id: 1,
            title: "Mkutano wa Uongozi wa Vijana 2024",
            date: "Machi 15-17, 2024",
            time: "9:00 Asubuhi - 5:00 Jioni",
            location: "Kituo cha Mikutano cha Kimataifa cha Julius Nyerere",
            attendees: "Wanatarajiwa 200+",
            description:
              "Siku tatu za mafunzo ya kina, upatanishi, na msukumo kwa viongozi vijana kote Tanzania.",
            image:
              "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRyYWluaW5nfGVufDF8fHx8MTc2NDE4NjA5OHww&ixlib=rb-4.1.0&q=80&w=1080",
          },
          {
            id: 2,
            title: "Warsha ya Ujuzi wa Kidijitali",
            date: "Februari 20, 2024",
            time: "2:00 Mchana - 6:00 Jioni",
            location: "Kituo cha Teknolojia Dar es Salaam",
            attendees: "Wanatarajiwa 50+",
            description:
              "Jifunze usimbaji, ubunifu wa wavuti, na uuzaji wa kidijitali kutoka kwa wataalamu wa tasnia.",
            image:
              "https://images.unsplash.com/photo-1759922378123-a1f4f1e39bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NDI0NTExNXww&ixlib=rb-4.1.0&q=80&w=1080",
          },
          {
            id: 3,
            title: "Siku ya Usafi wa Jamii",
            date: "Februari 28, 2024",
            time: "7:00 Asubuhi - 12:00 Mchana",
            location: "Bustani ya Uhuru",
            attendees: "Wanatarajiwa 100+",
            description:
              "Jiunge nasi kwa asubuhi ya uhifadhi wa mazingira na huduma ya jamii.",
            image: familyImage,
          },
        ],
        past: [
          {
            id: 4,
            title: "Karamu ya Kukusanya Fedha 2023",
            date: "Desemba 10, 2023",
            location: "Hoteli ya Serena",
            attendees: "Waliohudhuria 300+",
            description:
              "Jioni yenye mafanikio ya kusherehekea na kukusanya fedha ambayo ilikusanya TZS 120,000,000 kwa programu za vijana.",
            image:
              "https://images.unsplash.com/photo-1559315558-6fbcbd3cf22d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIweW91dGglMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NjQyNTg3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          },
          {
            id: 5,
            title: "Maonyesho ya Kazi 2023",
            date: "Oktoba 15, 2023",
            location: "Chuo Kikuu cha Dar es Salaam",
            attendees: "Waliohudhuria 500+",
            description:
              "Kuunganisha vijana na waajiri watarajiwa na fursa za kazi.",
            image:
              "https://images.unsplash.com/photo-1759922378187-11a435837df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3JzaGlwJTIwcHJvZ3JhbXxlbnwxfHx8fDE3NjQyMjg3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
          },
        ],
      },
      register: "Jisajili Sasa",
      viewDetails: "Tazama Maelezo",
    },
  };

  const t = translations[language];

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
            className="text-xl md:text-2xl text-blue-100"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {t.events.upcoming.map((event, index) => (
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
                      <Badge className="bg-secondary text-white">
                        {t.upcoming}
                      </Badge>
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

                    <Button className="w-full bg-secondary hover:bg-secondary/90 transform hover:scale-105 transition-transform duration-200">
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

      {/* Past Events */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl mb-12 text-primary"
          >
            {t.past}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {t.events.past.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-auto overflow-hidden group">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl mb-3 text-primary">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {event.description}
                        </p>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4 text-secondary" />
                            {event.date}
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
                      </div>

                      <Button
                        variant="outline"
                        className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white transform hover:scale-105 transition-transform duration-200"
                      >
                        {t.viewDetails}
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
