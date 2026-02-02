import { Calendar, MapPin, Users, TrendingUp, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import educationImage from "../assets/educationImage.jpg";
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
      subtitle: "Initiatives creating lasting impact in communities",
      categories: {
        all: "All Campaigns",
        active: "Active",
        completed: "Completed",
        upcoming: "Upcoming",
      },
      campaigns: [
        {
          id: 1,
          title: "Youth Leadership Summit 2024",
          category: "active",
          description:
            "A three-day intensive program bringing together 200 young leaders from across Tanzania for training, networking, and action planning.",
          image: studentsImage,
          location: "Dar es Salaam, Tanzania",
          date: "Jan - Mar 2024",
          beneficiaries: "200+ Youth",
          progress: 65,
          status: "active",
        },
        {
          id: 2,
          title: "Education Access Initiative",
          category: "active",
          description:
            "Providing scholarships and learning materials to 500 underprivileged students across 10 communities.",
          image: educationImage,
          location: "Multiple Locations",
          date: "Ongoing",
          beneficiaries: "500+ Students",
          progress: 80,
          status: "active",
        },
        {
          id: 3,
          title: "Digital Skills Training Program",
          category: "active",
          description:
            "Teaching coding, digital marketing, and graphic design to 150 youth over 6 months.",
          image:
            "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRyYWluaW5nfGVufDF8fHx8MTc2NDE4NjA5OHww&ixlib=rb-4.1.0&q=80&w=1080",
          location: "Dar es Salaam Tech Hub",
          date: "Feb - Jul 2024",
          beneficiaries: "150+ Youth",
          progress: 45,
          status: "active",
        },
        {
          id: 4,
          title: "Community Clean-Up Campaign",
          category: "completed",
          description:
            "Engaged 300 youth volunteers in environmental conservation activities across 5 communities.",
          image:
            "https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZ3xlbnwxfHx8fDE3NjQyMjY2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
          location: "Dar es Salaam Region",
          date: "Nov 2023",
          beneficiaries: "300+ Volunteers",
          progress: 100,
          status: "completed",
        },
        {
          id: 5,
          title: "Girls in STEM Initiative",
          category: "completed",
          description:
            "Empowered 100 young girls with science, technology, engineering, and mathematics skills.",
          image: mentorChildImage,
          location: "Multiple Schools",
          date: "Sep - Dec 2023",
          beneficiaries: "100+ Girls",
          progress: 100,
          status: "completed",
        },
        {
          id: 6,
          title: "Youth Entrepreneurship Bootcamp",
          category: "upcoming",
          description:
            "A 4-week intensive program teaching business skills and providing seed funding for youth startups.",
          image:
            "https://images.unsplash.com/photo-1759922378187-11a435837df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3JzaGlwJTIwcHJvZ3JhbXxlbnwxfHx8fDE3NjQyMjg3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
          location: "Dar es Salaam",
          date: "Apr - May 2024",
          beneficiaries: "80+ Aspiring Entrepreneurs",
          progress: 0,
          status: "upcoming",
        },
      ],
      statusLabels: {
        active: "Active",
        completed: "Completed",
        upcoming: "Upcoming",
      },
      progress: "Progress",
      learnMore: "Learn More",
      support: "Support This Campaign",
    },
    sw: {
      title: "Kampeni na Miradi Yetu",
      subtitle: "Mipango inayounda athari ya kudumu katika jamii",
      categories: {
        all: "Kampeni Zote",
        active: "Zinazoendelea",
        completed: "Zilizokamilika",
        upcoming: "Zijazo",
      },
      campaigns: [
        {
          id: 1,
          title: "Mkutano wa Uongozi wa Vijana 2024",
          category: "active",
          description:
            "Programu ya siku tatu ya kina inayoleta pamoja viongozi vijana 200 kutoka Tanzania nzima kwa mafunzo, upatanishi, na upangaji wa hatua.",
          image: studentsImage,
          location: "Dar es Salaam, Tanzania",
          date: "Jan - Mar 2024",
          beneficiaries: "Vijana 200+",
          progress: 65,
          status: "active",
        },
        {
          id: 2,
          title: "Mpango wa Upatikanaji wa Elimu",
          category: "active",
          description:
            "Kutoa ufadhili na vifaa vya kujifunzia kwa wanafunzi 500 wasiostawi katika jamii 10.",
          image: educationImage,
          location: "Maeneo Mengi",
          date: "Inaendelea",
          beneficiaries: "Wanafunzi 500+",
          progress: 80,
          status: "active",
        },
        {
          id: 3,
          title: "Programu ya Mafunzo ya Ujuzi wa Kidijitali",
          category: "active",
          description:
            "Kufundisha usimbaji, uuzaji wa kidijitali, na ubunifu wa picha kwa vijana 150 kwa miezi 6.",
          image:
            "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRyYWluaW5nfGVufDF8fHx8MTc2NDE4NjA5OHww&ixlib=rb-4.1.0&q=80&w=1080",
          location: "Kituo cha Teknolojia Dar es Salaam",
          date: "Feb - Jul 2024",
          beneficiaries: "Vijana 150+",
          progress: 45,
          status: "active",
        },
        {
          id: 4,
          title: "Kampeni ya Usafi wa Jamii",
          category: "completed",
          description:
            "Kushirikisha wafadhili vijana 300 katika shughuli za uhifadhi wa mazingira katika jamii 5.",
          image:
            "https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZ3xlbnwxfHx8fDE3NjQyMjY2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
          location: "Mkoa wa Dar es Salaam",
          date: "Nov 2023",
          beneficiaries: "Wafadhili 300+",
          progress: 100,
          status: "completed",
        },
        {
          id: 5,
          title: "Mpango wa Wasichana katika STEM",
          category: "completed",
          description:
            "Kuwapa nguvu wasichana vijana 100 kwa ujuzi wa sayansi, teknolojia, uhandisi, na hisabati.",
          image: mentorChildImage,
          location: "Shule Mbalimbali",
          date: "Sep - Dec 2023",
          beneficiaries: "Wasichana 100+",
          progress: 100,
          status: "completed",
        },
        {
          id: 6,
          title: "Bootcamp ya Ujasiriamali wa Vijana",
          category: "upcoming",
          description:
            "Programu ya wiki 4 ya kina inayofundisha ujuzi wa biashara na kutoa ufadhili wa awali kwa biashara za vijana.",
          image:
            "https://images.unsplash.com/photo-1759922378187-11a435837df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3JzaGlwJTIwcHJvZ3JhbXxlbnwxfHx8fDE3NjQyMjg3MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
          location: "Dar es Salaam",
          date: "Apr - May 2024",
          beneficiaries: "Wajasiriamali 80+ Wanaotarajia",
          progress: 0,
          status: "upcoming",
        },
      ],
      statusLabels: {
        active: "Inaendelea",
        completed: "Imekamilika",
        upcoming: "Ijayo",
      },
      progress: "Maendeleo",
      learnMore: "Jifunze Zaidi",
      support: "Unga Mkono Kampeni Hii",
    },
  };

  const t = translations[language];

  const filteredCampaigns =
    selectedCategory === "all"
      ? t.campaigns
      : t.campaigns.filter((c) => c.status === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-secondary text-white";
      case "completed":
        return "bg-primary text-white";
      case "upcoming":
        return "bg-gray-500 text-white";
      default:
        return "bg-gray-200";
    }
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
            className="text-xl md:text-2xl text-blue-100"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className={`transform hover:scale-105 transition-transform duration-200 ${
                  selectedCategory === key
                    ? "bg-primary hover:bg-primary/90"
                    : ""
                }`}
              >
                {label}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Campaigns Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        {
                          t.statusLabels[
                            campaign.status as keyof typeof t.statusLabels
                          ]
                        }
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl mb-3 text-primary">
                      {campaign.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {campaign.description}
                    </p>

                    <div className="space-y-2 mb-4">
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

                    {campaign.status === "active" && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>{t.progress}</span>
                          <span>{campaign.progress}%</span>
                        </div>
                        <Progress value={campaign.progress} className="h-2" />
                      </div>
                    )}

                    {campaign.status === "completed" && (
                      <div className="flex items-center gap-2 text-secondary mb-4">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm">
                          {t.statusLabels.completed}
                        </span>
                      </div>
                    )}

                    {campaign.status === "upcoming" && (
                      <div className="flex items-center gap-2 text-gray-500 mb-4">
                        <TrendingUp className="w-5 h-5" />
                        <span className="text-sm">
                          {t.statusLabels.upcoming}
                        </span>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-white transform hover:scale-105 transition-transform duration-200"
                      >
                        {t.learnMore}
                      </Button>
                      {campaign.status !== "completed" && (
                        <Button
                          className="flex-1 bg-secondary hover:bg-secondary/90 transform hover:scale-105 transition-transform duration-200"
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
