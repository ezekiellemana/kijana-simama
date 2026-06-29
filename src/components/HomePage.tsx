import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import educationImage from "../assets/educationImage.jpg";
import familyImage from "../assets/familyImage.jpg";
import mentorChildImage from "../assets/mentorChildImage.jpg";
import studentsImage from "../assets/studentsImage.jpg";

interface HomePageProps {
  language: "en" | "sw";
  onNavigate: (page: string) => void;
}

const heroSlides = [
  { src: studentsImage, alt: "Students at a school campaign" },
  { src: educationImage, alt: "Education support campaign" },
  { src: mentorChildImage, alt: "Youth wellbeing mentorship" },
  { src: familyImage, alt: "Community youth support" },
];

function TypewriterText({
  text,
  className = "",
  speed = 32,
  delay = 0,
  cursorClassName = "bg-white",
  keepCursor = false,
}: {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursorClassName?: string;
  keepCursor?: boolean;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setHasStarted(false);
    setIsTyping(false);
    setIsComplete(false);
    let typingTimer: number | undefined;

    const startTimer = window.setTimeout(() => {
      let index = 0;
      setHasStarted(true);
      setIsTyping(true);
      typingTimer = window.setInterval(() => {
        index += 1;
        setDisplayedText(text.slice(0, index));

        if (index >= text.length) {
          window.clearInterval(typingTimer);
          setIsTyping(false);
          setIsComplete(true);
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      if (typingTimer) {
        window.clearInterval(typingTimer);
      }
    };
  }, [text, speed, delay]);

  const shouldShowCursor = hasStarted && (isTyping || keepCursor || !isComplete);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{displayedText}</span>
      {shouldShowCursor && (
        <motion.span
          aria-hidden="true"
          animate={{
            opacity: [1, 0.2, 1],
            scaleY: [1, 0.72, 1],
            boxShadow: [
              "0 0 8px currentColor",
              "0 0 22px currentColor",
              "0 0 8px currentColor",
            ],
          }}
          transition={{ duration: 0.85, repeat: Infinity, ease: "easeInOut" }}
          className={`ml-1 inline-block h-[0.9em] w-[0.14em] translate-y-[0.1em] rounded-full ${cursorClassName}`}
        />
      )}
    </span>
  );
}

export function HomePage({ language, onNavigate }: HomePageProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [heroSlides.length]);

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
  const titleSpeed = 34;
  const highlightSpeed = 40;
  const subtitleSpeed = 12;
  const titleDelay = 250;
  const highlightDelay = titleDelay + t.hero.title.length * titleSpeed + 260;
  const subtitleDelay =
    highlightDelay + t.hero.titleHighlight.length * highlightSpeed + 420;
  const buttonsDelay =
    (subtitleDelay + t.hero.subtitle.length * subtitleSpeed + 250) / 1000;

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
          {heroSlides.map((slide, index) => (
            <motion.img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              initial={false}
              animate={{
                opacity: index === activeSlide ? 1 : 0,
                scale: index === activeSlide ? 1 : 1.08,
              }}
              transition={{
                opacity: { duration: 1, ease: "easeInOut" },
                scale: { duration: 4.5, ease: "easeOut" },
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
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
              <TypewriterText
                text={t.hero.title}
                speed={titleSpeed}
                delay={titleDelay}
                cursorClassName="bg-white text-white"
              />
              <TypewriterText
                text={t.hero.titleHighlight}
                speed={highlightSpeed}
                delay={highlightDelay}
                className="block text-secondary mt-1 sm:mt-2"
                cursorClassName="bg-secondary text-secondary"
              />
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-200"
            >
              <TypewriterText
                text={t.hero.subtitle}
                speed={subtitleSpeed}
                delay={subtitleDelay}
                cursorClassName="bg-blue-100 text-blue-100"
                keepCursor
              />
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: buttonsDelay,
                duration: 0.65,
                type: "spring",
                stiffness: 130,
                damping: 15,
              }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group"
              >
                <Button
                  size="lg"
                  className="relative overflow-hidden bg-secondary text-white shadow-xl shadow-secondary/25 transition-all duration-300 hover:bg-secondary/95 hover:shadow-2xl hover:shadow-secondary/35"
                  onClick={() => onNavigate("donate")}
                >
                  <span className="absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-white/25 transition-transform duration-700 group-hover:translate-x-[340%]" />
                  <span className="relative z-10">{t.hero.cta}</span>
                  <ArrowRight className="relative z-10 ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="relative overflow-hidden border-2 border-white text-white bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-blue-900 hover:shadow-2xl hover:shadow-white/20"
                  onClick={() => onNavigate("about")}
                >
                  <span className="absolute inset-0 scale-x-0 bg-white origin-left transition-transform duration-300 group-hover:scale-x-100" />
                  <span className="relative z-10">{t.hero.learn}</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
