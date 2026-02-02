import { Award, Eye, Heart, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Testimonials } from "./Testimonials";
import aboutImage from "../assets/about.jpg";

interface AboutPageProps {
  language: "en" | "sw";
}

export function AboutPage({ language }: AboutPageProps) {
  const translations = {
    en: {
      title: "About Kijana Simama",
      subtitle: "Empowering In-School Adolescents to Stand Tall & Thrive",
      story: {
        title: "Our Story",
        content:
          'Founded in 2025, Kijana Simama emerged from a commitment to empower in-school adolescents across Tanzania. Created in response to growing challenges in mental health, sexual and reproductive health, and life skills, the initiative equips young people with the knowledge and confidence they need to thrive. Our name, "Kijana Simama", meaning "Youth, Stand Tall", reflects our belief that every young person has the potential to rise, make responsible decisions, and contribute positively to their communities. Guided by our vision of a generation of resilient, informed, and empowered youth, we work to nurture personal growth, strengthen wellbeing, and build future leaders.',
      },
      vision: {
        title: "Our Vision",
        content:
          "A generation of resilient, informed, and empowered youth who make responsible decisions, embrace personal growth, and contribute positively to their communities.",
      },
      mission: {
        title: "Our Mission",
        content:
          "To equip in-school adolescents and young people with knowledge, skills, and supportive environments in mental health, sexual and reproductive health, and financial literacy, enabling them to navigate adolescence responsibly and build a foundation for lifelong personal and social development.",
      },
      values: {
        title: "Our Core Values",
        items: [
          {
            title: "Empowerment",
            description:
              "We believe in equipping youth with the tools, knowledge, and confidence to create positive change.",
          },
          {
            title: "Integrity",
            description:
              "We operate with transparency, honesty, and accountability in all our programs and partnerships.",
          },
          {
            title: "Inclusivity",
            description:
              "We embrace diversity and ensure equal opportunities for all youth regardless of background.",
          },
          {
            title: "Excellence",
            description:
              "We strive for the highest quality in our programs, services, and impact on communities.",
          },
        ],
      },
      team: {
        title: "Our Team",
        subtitle: "Meet the dedicated individuals behind Kijana Simama",
        members: [
          {
            name: "Dr. Amina Ochieng",
            role: "Executive Director",
            bio: "With over 15 years in youth development, Dr. Ochieng leads our strategic vision.",
          },
          {
            name: "James Mutua",
            role: "Programs Director",
            bio: "James oversees all our educational and mentorship initiatives across communities.",
          },
          {
            name: "Sarah Wanjiru",
            role: "Community Engagement Manager",
            bio: "Sarah builds partnerships and strengthens our relationships with local communities.",
          },
          {
            name: "David Kimani",
            role: "Operations Manager",
            bio: "David ensures efficient delivery of our programs and manages organizational operations.",
          },
        ],
      },
      impact: {
        title: "Our Impact",
        subtitle: "Real numbers, real change",
        stats: [
          { number: "5,000+", label: "Youth Empowered" },
          { number: "25+", label: "Active Programs" },
          { number: "50+", label: "Communities Reached" },
          { number: "200+", label: "Active Volunteers" },
        ],
      },
    },
    sw: {
      title: "Kuhusu Kijana Simama",
      subtitle: "Kuwapa Nguvu Wanafunzi Vijana Kusimama Wima & Kustawi",
      story: {
        title: "Hadithi Yetu",
        content:
          'Ilianzishwa mnamo 2025, Kijana Simama ilitokana na dhamira ya kuwapa nguvu wanafunzi vijana kote Tanzania. Iliundwa kwa kujibu changamoto zinazokua katika afya ya akili, afya ya uzazi na uzazi, na ujuzi wa maisha, mpango huu unawapa vijana maarifa na ujasiri wanaohitaji kustawi. Jina letu, "Kijana Simama", linamaanisha "Kijana, Simama Wima", linaonyesha imani yetu kwamba kila kijana ana uwezo wa kusimama, kufanya maamuzi yenye uwajibikaji, na kuchangia vyema katika jamii zao. Tukiongozwa na dira yetu ya kizazi cha vijana wenye ustahimilivu, taarifa, na nguvu, tunafanya kazi kuendeleza ukuaji wa kibinafsi, kuimarisha ustawi, na kujenga viongozi wa kesho.',
      },
      vision: {
        title: "Dira Yetu",
        content:
          "Kizazi cha vijana wenye ustahimilivu, taarifa, na nguvu ambao wanafanya maamuzi yenye uwajibikaji, wanakubali ukuaji wa kibinafsi, na kuchangia vyema katika jamii zao.",
      },
      mission: {
        title: "Dhamira Yetu",
        content:
          "Kuwapa wanafunzi vijana na vijana maarifa, ujuzi, na mazingira ya msaada katika afya ya akili, afya ya uzazi na uzazi, na ujuzi wa kifedha, kuwapa uwezo wa kuelekea ujana kwa uwajibikaji na kujenga msingi wa maendeleo ya kibinafsi na kijamii ya maisha yote.",
      },
      values: {
        title: "Maadili Yetu",
        items: [
          {
            title: "Uwezeshaji",
            description:
              "Tunaamini katika kuwapa vijana zana, maarifa, na ujasiri wa kuunda mabadiliko mazuri.",
          },
          {
            title: "Uadilifu",
            description:
              "Tunafanya kazi kwa uwazi, uaminifu, na uwajibikaji katika programu na ushirikiano wetu wote.",
          },
          {
            title: "Ujumuishaji",
            description:
              "Tunakubali utofauti na kuhakikisha fursa sawa kwa vijana wote bila kujali asili.",
          },
          {
            title: "Ubora",
            description:
              "Tunajitahidi kwa ubora wa juu zaidi katika programu, huduma, na athari zetu kwa jamii.",
          },
        ],
      },
      team: {
        title: "Timu Yetu",
        subtitle: "Kutana na watu waliojitoa nyuma ya Kijana Simama",
        members: [
          {
            name: "Dkt. Amina Ochieng",
            role: "Mkurugenzi Mtendaji",
            bio: "Na uzoefu wa zaidi ya miaka 15 katika maendeleo ya vijana, Dkt. Ochieng anaongoza dira yetu ya kimkakati.",
          },
          {
            name: "James Mutua",
            role: "Mkurugenzi wa Programu",
            bio: "James anasimamia programu zetu zote za elimu na ushauri katika jamii.",
          },
          {
            name: "Sarah Wanjiru",
            role: "Meneja wa Ushiriki wa Jamii",
            bio: "Sarah anajenga ushirikiano na kuimarisha mahusiano yetu na jamii za mitaa.",
          },
          {
            name: "David Kimani",
            role: "Meneja wa Uendeshaji",
            bio: "David anahakikisha utoaji wa ufanisi wa programu zetu na kusimamia shughuli za shirika.",
          },
        ],
      },
      impact: {
        title: "Athari Yetu",
        subtitle: "Namba halisi, mabadiliko halisi",
        stats: [
          { number: "5,000+", label: "Vijana Waliopewa Nguvu" },
          { number: "25+", label: "Programu Zinazoendelea" },
          { number: "50+", label: "Jamii Zilizofikwa" },
          { number: "200+", label: "Wafadhili Hai" },
        ],
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
        staggerChildren: 0.15,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-primary to-blue-600 text-white py-20 overflow-hidden">
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

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl mb-6 text-primary">
                {t.story.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{t.story.content}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src={aboutImage}
                alt="Our Story"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4"
                  >
                    <Eye className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl mb-4 text-primary">
                    {t.vision.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t.vision.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4"
                  >
                    <Target className="w-8 h-8 text-secondary" />
                  </motion.div>
                  <h3 className="text-2xl mb-4 text-primary">
                    {t.mission.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t.mission.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
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
            {t.values.items.map((value, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      {index === 0 && (
                        <Heart className="w-8 h-8 text-secondary" />
                      )}
                      {index === 1 && (
                        <Award className="w-8 h-8 text-secondary" />
                      )}
                      {index === 2 && (
                        <Target className="w-8 h-8 text-secondary" />
                      )}
                      {index === 3 && (
                        <Eye className="w-8 h-8 text-secondary" />
                      )}
                    </motion.div>
                    <h3 className="text-xl mb-3 text-primary">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              {t.team.title}
            </h2>
            <p className="text-xl text-gray-600">{t.team.subtitle}</p>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {t.team.members.map((member, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <CardContent className="p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-24 h-24 bg-linear-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl"
                    >
                      {member.name.charAt(0)}
                    </motion.div>
                    <h3 className="text-xl mb-1 text-primary">{member.name}</h3>
                    <p className="text-secondary mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials language={language} variant="compact" showTitle={true} />

      {/* Impact Stats */}
      <section className="py-16 bg-linear-to-r from-primary to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">{t.impact.title}</h2>
            <p className="text-xl text-blue-100">{t.impact.subtitle}</p>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {t.impact.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.1, y: -10 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl mb-2 text-secondary">
                  {stat.number}
                </div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
