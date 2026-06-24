import { Calendar, MapPin, Users, TrendingUp, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import educationImage from "../assets/educationImage.jpg";
import familyImage from "../assets/familyImage.jpg";
import mentorChildImage from "../assets/mentorChildImage.jpg";
import studentsImage from "../assets/studentsImage.jpg";
import { useState } from "react";

interface CampaignsPageProps {
  language: "en" | "sw";
  onNavigate: (page: string) => void;
}

export function CampaignsPage({ language, onNavigate }: CampaignsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const translations = {
    en: {
      title: "Our Campaigns & Projects",
      subtitle: "Active, completed, and upcoming initiatives for adolescents",
      categories: {
        all: "All Campaigns",
        active: "Active",
        completed: "Completed",
        upcoming: "Upcoming",
      },
      campaigns: [
        {
          id: 1,
          title: "Simama na Elimu Initiative",
          status: "active",
          description:
            "Supporting learning and resilience among adolescents through school-based education support, mentorship, and essential learning materials.",
          image: studentsImage,
          location: "Partner Schools",
          date: "Active",
          beneficiaries: "Adolescents",
        },
        {
          id: 2,
          title: "Binti Jiamini Campaign",
          status: "active",
          description:
            "A dignity and menstrual health campaign with the message Hedhi sio kikwazo, providing dignity kits and practical education support for girls.",
          image: educationImage,
          location: "Schools and Communities",
          date: "Active",
          beneficiaries: "Girls and Adolescents",
        },
        {
          id: 3,
          title: "Sauti Yetu Mashuleni",
          status: "active",
          description:
            "A youth voice initiative collecting student recommendations on health and wellbeing through guided school dialogue and suggestion channels.",
          image: mentorChildImage,
          location: "Secondary Schools",
          date: "Active",
          beneficiaries: "Students",
        },
        {
          id: 4,
          title: "Afya Yetu, Future Yetu",
          status: "upcoming",
          description:
            "An upcoming campaign for strong minds, informed choices, and brighter futures through youth wellbeing and health awareness activities.",
          image: familyImage,
          location: "Schools and Youth Spaces",
          date: "Upcoming",
          beneficiaries: "Youth",
        },
        {
          id: 5,
          title: "Jijali Campaign",
          status: "upcoming",
          description:
            "A school-based hygiene and mental wellbeing campaign for adolescents, focused on self-care, confidence, and healthy routines.",
          image: mentorChildImage,
          location: "Schools",
          date: "Upcoming",
          beneficiaries: "Adolescents",
        },
        {
          id: 6,
          title: "Sauti za Vijana 2026",
          status: "upcoming",
          description:
            "A youth policy dialogue for health, wellbeing, and opportunities, creating space for young people to contribute practical recommendations.",
          image: studentsImage,
          location: "Dar es Salaam",
          date: "2026",
          beneficiaries: "Youth Representatives",
        },
      ],
      statusLabels: {
        active: "Active",
        completed: "Completed",
        upcoming: "Upcoming",
      },
      learnMore: "Learn More",
      support: "Support This Campaign",
    },
    sw: {
      title: "Kampeni na Miradi Yetu",
      subtitle: "Mipango inayoendelea, iliyokamilika, na inayokuja kwa vijana",
      categories: {
        all: "Kampeni Zote",
        active: "Zinazoendelea",
        completed: "Zilizokamilika",
        upcoming: "Zijazo",
      },
      campaigns: [
        {
          id: 1,
          title: "Simama na Elimu Initiative",
          status: "active",
          description:
            "Mpango wa kusaidia ujifunzaji na ustahimilivu wa vijana balehe kupitia msaada wa elimu, ushauri, na vifaa muhimu vya kujifunzia.",
          image: studentsImage,
          location: "Shule Washirika",
          date: "Inaendelea",
          beneficiaries: "Vijana Balehe",
        },
        {
          id: 2,
          title: "Binti Jiamini Campaign",
          status: "active",
          description:
            "Kampeni ya staha na afya ya hedhi yenye ujumbe Hedhi sio kikwazo, ikitoa dignity kits na elimu ya vitendo kwa wasichana.",
          image: educationImage,
          location: "Shule na Jamii",
          date: "Inaendelea",
          beneficiaries: "Wasichana na Vijana Balehe",
        },
        {
          id: 3,
          title: "Sauti Yetu Mashuleni",
          status: "active",
          description:
            "Mpango wa sauti ya vijana unaokusanya mapendekezo ya wanafunzi kuhusu afya na ustawi kupitia majadiliano ya shule na njia za kutoa maoni.",
          image: mentorChildImage,
          location: "Shule za Sekondari",
          date: "Inaendelea",
          beneficiaries: "Wanafunzi",
        },
        {
          id: 4,
          title: "Afya Yetu, Future Yetu",
          status: "upcoming",
          description:
            "Kampeni ijayo ya akili imara, maamuzi sahihi, na mustakabali bora kupitia shughuli za afya na ustawi wa vijana.",
          image: familyImage,
          location: "Shule na Maeneo ya Vijana",
          date: "Ijayo",
          beneficiaries: "Vijana",
        },
        {
          id: 5,
          title: "Jijali Campaign",
          status: "upcoming",
          description:
            "Kampeni ya shule kuhusu usafi na ustawi wa akili kwa vijana balehe, ikilenga kujijali, kujiamini, na tabia bora za afya.",
          image: mentorChildImage,
          location: "Shule",
          date: "Ijayo",
          beneficiaries: "Vijana Balehe",
        },
        {
          id: 6,
          title: "Sauti za Vijana 2026",
          status: "upcoming",
          description:
            "Jukwaa la mazungumzo ya sera kwa vijana kuhusu afya, ustawi, na fursa, likitoa nafasi kwa vijana kuwasilisha mapendekezo ya vitendo.",
          image: studentsImage,
          location: "Dar es Salaam",
          date: "2026",
          beneficiaries: "Wawakilishi wa Vijana",
        },
      ],
      statusLabels: {
        active: "Inaendelea",
        completed: "Imekamilika",
        upcoming: "Ijayo",
      },
      learnMore: "Jifunze Zaidi",
      support: "Unga Mkono Kampeni Hii",
    },
  };

  const t = translations[language];
  const filteredCampaigns =
    selectedCategory === "all"
      ? t.campaigns
      : t.campaigns.filter((campaign) => campaign.status === selectedCategory);

  const getStatusColor = (status: string) => {
    if (status === "active") return "bg-secondary text-white";
    if (status === "completed") return "bg-primary text-white";
    return "bg-gray-500 text-white";
  };

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

      <section className="py-6 sm:py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {Object.entries(t.categories).map(([key, label]) => (
              <Button
                key={key}
                variant={selectedCategory === key ? "default" : "outline"}
                onClick={() => setSelectedCategory(key)}
                className={selectedCategory === key ? "bg-primary hover:bg-primary/90" : ""}
              >
                {label}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCampaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 h-full">
                  <div className="relative h-56 overflow-hidden group">
                    <ImageWithFallback
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={getStatusColor(campaign.status)}>
                        {t.statusLabels[campaign.status as keyof typeof t.statusLabels]}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-3 text-primary">{campaign.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {campaign.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-secondary" />
                        {campaign.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-secondary" />
                        {campaign.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-secondary" />
                        {campaign.beneficiaries}
                      </div>
                    </div>

                    {campaign.status === "completed" ? (
                      <div className="flex items-center gap-2 text-secondary mb-4">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm">{t.statusLabels.completed}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-gray-500 mb-4">
                        <TrendingUp className="w-5 h-5" />
                        <span className="text-sm">
                          {t.statusLabels[campaign.status as keyof typeof t.statusLabels]}
                        </span>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        {t.learnMore}
                      </Button>
                      {campaign.status !== "completed" && (
                        <Button
                          className="flex-1 bg-secondary hover:bg-secondary/90"
                          onClick={() => onNavigate("donate")}
                        >
                          {t.support}
                        </Button>
                      )}
                    </div>
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
