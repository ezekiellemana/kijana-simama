import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import heroImage from "../assets/heroImage.jpg";

interface HomePageProps {
  language: "en" | "sw";
  onNavigate: (page: string) => void;
}

export function HomePage({ language, onNavigate }: HomePageProps) {
  const translations = {
    en: {
      hero: {
        title: "Empowering In-School Adolescents to",
        titleHighlight: "Stand Tall & Thrive",
        subtitle:
          "Join us in nurturing a generation of informed, confident, and resilient young people. Through mental health support, sexual and reproductive health education, and financial capacity building, we equip adolescents with the skills and guidance they need to make responsible choices and reach their full potential.",
        cta: "Get Involved",
        learn: "Learn More",
      },
      mission: {
        title: "Our Mission",
        subtitle: "Building a brighter future for the youth of today",
        description:
          "Kijana Simama is dedicated to empowering young people across communities by providing access to quality education, mentorship programs, and life skills training. We believe every young person deserves the opportunity to stand up and create positive change.",
      },
      impact: {
        title: "Our Impact",
        youth: "Youth Empowered",
        youthCount: "",
        programs: "Active Programs",
        programsCount: "",
        communities: "Communities Reached",
        communitiesCount: "",
        volunteers: "Volunteers",
        volunteersCount: "",
      },
      campaigns: {
        title: "Featured Campaigns",
        subtitle: "Making a difference one initiative at a time",
        campaign1: {
          title: "Youth Leadership Program",
          description:
            "Developing the next generation of community leaders through intensive training and mentorship.",
        },
        campaign2: {
          title: "Education Access Initiative",
          description:
            "Providing scholarships and learning resources to underprivileged students.",
        },
        campaign3: {
          title: "Skills Development Workshop",
          description:
            "Equipping youth with practical skills for employment and entrepreneurship.",
        },
        viewAll: "View All Campaigns",
      },
      values: {
        title: "Our Core Values",
        empowerment: "Empowerment",
        empowermentDesc:
          "We believe in giving youth the tools and confidence to create change.",
        integrity: "Integrity",
        integrityDesc:
          "We operate with transparency and accountability in all our activities.",
        community: "Community",
        communityDesc: "We strengthen communities by bringing people together.",
        excellence: "Excellence",
        excellenceDesc:
          "We strive for the highest quality in our programs and services.",
      },
      cta: {
        title: "Ready to Make a Difference?",
        subtitle: "Join us in empowering the next generation",
        button: "Donate Now",
      },
    },
    sw: {
      hero: {
        title: "Kuwapa Nguvu Wanafunzi Vijana",
        titleHighlight: "Kusimama Wima & Kustawi",
        subtitle:
          "Jiunge nasi katika kulea kizazi cha vijana wenye taarifa, ujasiri, na ustahimilivu. Kupitia msaada wa afya ya akili, elimu ya afya ya uzazi na uzazi, na kujenga uwezo wa kifedha, tunawapa vijana ujuzi na mwongozo wanaohitaji kufanya uchaguzi wenye uwajibikaji na kufikia uwezo wao kamili.",
        cta: "Jiunga Nasi",
        learn: "Jifunze Zaidi",
      },
      mission: {
        title: "Dhamira Yetu",
        subtitle: "Kujenga mustakabali mzuri kwa vijana wa leo",
        description:
          "Kijana Simama imejitolea kuwapa nguvu vijana katika jamii kwa kutoa fursa za elimu bora, programu za ushauri, na mafunzo ya maisha. Tunaamini kila kijana anastahili fursa ya kusimama na kuunda mabadiliko chanya.",
      },
      impact: {
        title: "Athari Yetu",
        youth: "Vijana Waliopewa Nguvu",
        youthCount: "",
        programs: "Programu Zinazoendelea",
        programsCount: "",
        communities: "Jamii Zilizofikwa",
        communitiesCount: "",
        volunteers: "Wajitoleaji",
        volunteersCount: "",
      },
      campaigns: {
        title: "Kampeni Zilizoangaziwa",
        subtitle: "Kufanya tofauti kwa mpango mmoja kwa wakati",
        campaign1: {
          title: "Programu ya Uongozi wa Vijana",
          description:
            "Kukuza kizazi kijacho cha viongozi wa jamii kupitia mafunzo makali na ushauri.",
        },
        campaign2: {
          title: "Mpango wa Ufikiaji wa Elimu",
          description:
            "Kutoa ufadhili na rasilimali za kujifunzia kwa wanafunzi wasio na uwezo.",
        },
        campaign3: {
          title: "Warsha ya Maendeleo ya Ujuzi",
          description:
            "Kuwapa vijana ujuzi wa vitendo kwa ajili ya ajira na ujasiriamali.",
        },
        viewAll: "Tazama Kampeni Zote",
      },
      values: {
        title: "Maadili Yetu Ya Msingi",
        empowerment: "Uwezeshaji",
        empowermentDesc:
          "Tunaamini katika kuwapa vijana zana na ujasiri wa kuunda mabadiliko.",
        integrity: "Uadilifu",
        integrityDesc:
          "Tunafanya kazi kwa uwazi na uwajibikaji katika shughuli zetu zote.",
        community: "Jamii",
        communityDesc: "Tunaimarisha jamii kwa kuleta watu pamoja.",
        excellence: "Ubora",
        excellenceDesc:
          "Tunajitahidi kwa ubora wa juu zaidi katika programu na huduma zetu.",
      },
      cta: {
        title: "Uko Tayari Kufanya Tofauti?",
        subtitle: "Jiunge nasi katika kuwapa nguvu kizazi kijacho",
        button: "Changia Sasa",
      },
    },
  };

  const t = translations[language];

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center bg-blue-950 text-white overflow-hidden">
        {/* Hero background image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Youth empowerment"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay — keeps text readable while showing the image */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-900/70 to-blue-900/40" />
        </motion.div>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6"
            >
              {t.hero.title}
              <span className="block text-secondary mt-1 sm:mt-2">
                {t.hero.titleHighlight}
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-200"
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white transform hover:scale-105 transition-transform duration-200"
                onClick={() => onNavigate("donate")}
              >
                {t.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-200"
                onClick={() => onNavigate("about")}
              >
                {t.hero.learn}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
