import { ArrowRight, Users, Target, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Testimonials } from "./Testimonials";
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
        youthCount: "5,000+",
        programs: "Active Programs",
        programsCount: "25+",
        communities: "Communities Reached",
        communitiesCount: "50+",
        volunteers: "Volunteers",
        volunteersCount: "200+",
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
        youthCount: "5,000+",
        programs: "Programu Zinazoendelea",
        programsCount: "25+",
        communities: "Jamii Zilizofikwa",
        communitiesCount: "50+",
        volunteers: "Wajitoleaji",
        volunteersCount: "200+",
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

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Youth empowerment"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl mb-6"
            >
              {t.hero.title}
              <span className="block text-secondary mt-2">
                {t.hero.titleHighlight}
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
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

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-4 text-primary">
                {t.mission.title}
              </h2>
              <p className="text-xl text-secondary mb-6">
                {t.mission.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t.mission.description}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-lg overflow-hidden shadow-xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZ3xlbnwxfHx8fDE3NjQyMjY2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-linear-to-r from-primary to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl text-center mb-12"
          >
            {t.impact.title}
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl mb-2 text-secondary">
                {t.impact.youthCount}
              </div>
              <div className="text-lg">{t.impact.youth}</div>
            </motion.div>
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl mb-2 text-secondary">
                {t.impact.programsCount}
              </div>
              <div className="text-lg">{t.impact.programs}</div>
            </motion.div>
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl mb-2 text-secondary">
                {t.impact.communitiesCount}
              </div>
              <div className="text-lg">{t.impact.communities}</div>
            </motion.div>
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl mb-2 text-secondary">
                {t.impact.volunteersCount}
              </div>
              <div className="text-lg">{t.impact.volunteers}</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-primary">
              {t.campaigns.title}
            </h2>
            <p className="text-xl text-gray-600">{t.campaigns.subtitle}</p>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1759922378123-a1f4f1e39bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NDI0NTExNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Leadership"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3 text-primary">
                    {t.campaigns.campaign1.title}
                  </h3>
                  <p className="text-gray-600">
                    {t.campaigns.campaign1.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1759922378123-a1f4f1e39bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NDI0NTExNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Education"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3 text-primary">
                    {t.campaigns.campaign2.title}
                  </h3>
                  <p className="text-gray-600">
                    {t.campaigns.campaign2.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1559315558-6fbcbd3cf22d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIweY91dGglMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NjQyNTg3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Skills Development"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3 text-primary">
                    {t.campaigns.campaign3.title}
                  </h3>
                  <p className="text-gray-600">
                    {t.campaigns.campaign3.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate("campaigns")}
              className="transform hover:scale-105 transition-transform duration-200"
            >
              {t.campaigns.viewAll}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl text-center mb-12 text-primary"
          >
            {t.values.title}
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl mb-2">{t.values.empowerment}</h3>
              <p className="text-gray-600">{t.values.empowermentDesc}</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="text-center"
            >
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl mb-2">{t.values.integrity}</h3>
              <p className="text-gray-600">{t.values.integrityDesc}</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="text-center"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl mb-2">{t.values.community}</h3>
              <p className="text-gray-600">{t.values.communityDesc}</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="text-center"
            >
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl mb-2">{t.values.excellence}</h3>
              <p className="text-gray-600">{t.values.excellenceDesc}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials language={language} />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-linear-to-r from-primary to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">{t.cta.title}</h2>
            <p className="text-xl mb-8 text-gray-200">{t.cta.subtitle}</p>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white transform hover:scale-105 transition-transform duration-200"
              onClick={() => onNavigate("donate")}
            >
              {t.cta.button}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
