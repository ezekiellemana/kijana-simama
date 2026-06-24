import { useState } from "react";
import { BriefcaseBusiness, Crown, Eye, Network, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import aboutImage from "../assets/studentsImage.jpg";

// Team photos — copy these from outputs to src/assets/team/
import drSyangu from "../assets/team/dr_syangu.png";
import drAgnes from "../assets/team/dr_agnes.jpeg";
import drLaura from "../assets/team/dr_laura.jpeg";
import vivianMacha from "../assets/team/vivian_macha.png";
import sophiaNyakitagara from "../assets/team/sophia_nyakitagara.png";

interface AboutPageProps {
  language: "en" | "sw";
}

type TeamMember = {
  name: string;
  role: string;
  credential: string;
  bio: string;
  photo?: string;
};

export function AboutPage({ language }: AboutPageProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const translations = {
    en: {
      title: "About Kijana Simama",
      subtitle: "Empowering In-School Adolescents to Stand Tall & Thrive",
      story: {
        title: "Our Story",
        content:
          'Founded in 2025, Kijana Simama emerged from a commitment to empower in-school adolescents across Tanzania. Created in response to growing challenges in mental health, sexual and reproductive health, and life skills, the initiative equips young people with the knowledge and confidence they need to thrive. Our name, "Kijana Simama", meaning "Youth, Stand Tall", reflects our belief that every young person has the potential to rise, make responsible decisions, and contribute positively to their communities.',
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
        subtitle: "A simple leadership tree for Kijana Simama",
        tapHint: "Tap a member to view full details",
        layers: {
          founders: "Founders Council",
          board: "Board of Directors",
          executive: "Executive Team",
        },
        boardSummary:
          "The Board provides governance, accountability, and strategic oversight.",
        executiveSummary:
          "Executive Team profiles will be added once the full list is confirmed.",
        members: [
          {
            name: "Dr. Syangu E. Mkony",
            role: "Founder",
            credential: "Psychiatrist & Public Health Specialist",
            bio: "Dr. Syangu Mkony is dedicated to advancing adolescent mental health, sexual and reproductive health, and psychosocial wellbeing through school- and community-based interventions in Tanzania. Through Kijana Simama, she champions youth empowerment, early talent nurturing, and resilient, healthy futures for young people.",
            photo: drSyangu,
          },
          {
            name: "Dr. Agnes Kosia",
            role: "Founder",
            credential: "Public Health Specialist, PhD",
            bio: "Dr. Agnes Kosia is a Public Health Specialist with over 12 years of experience in maternal and child health, adolescent sexual and reproductive health, gender-based violence prevention, and community health programs. She brings strong expertise in youth-centered programming, research, and public health advocacy.",
            photo: drAgnes,
          },
          {
            name: "Dr. Laura Urasa",
            role: "Founder",
            credential: "Public Health & SRH Specialist",
            bio: "Dr. Laura Urasa is a Senior Medical Doctor with over 13 years of clinical experience in mental health and psychiatry. She is also a public health professional with expertise in Sexual and Reproductive Health Policy and Programming, applying her experience to strengthen school- and community-based interventions.",
            photo: drLaura,
          },
          {
            name: "Vivian Macha",
            role: "Founder",
            credential: "Human Resources and Administration",
            bio: "Vivian Macha is an experienced Human Resources and Administration professional with over 15 years of expertise in HR management, employee relations, administration, recruitment, policy implementation, and organizational development. As a Founder of Kijana Simama, she applies strong leadership, people management, and policy development skills to promote youth wellbeing and empowerment through impactful community initiatives.",
            photo: vivianMacha,
          },
          {
            name: "Sophia S. Nyakitagara",
            role: "Founder",
            credential: "Educator",
            bio: "Sophia S. Nyakitagara is a dedicated educator, philologist, and entrepreneur with over 12 years of experience teaching Kiswahili Language and Literature to secondary school students. She brings expertise in adolescent development, guidance and counselling, conflict resolution, and youth mentorship, contributing to life-skills development and supportive environments for adolescents.",
            photo: sophiaNyakitagara,
          },
        ],
        boardMembers: [
          {
            name: "Dr. Syangu Mkony",
            role: "Interim Chairperson",
            credential: "Board of Directors",
            bio: "Dr. Syangu Mkony provides interim board leadership and strategic guidance for Kijana Simama's adolescent wellbeing, school-based mental health, and youth empowerment work.",
            photo: drSyangu,
          },
          {
            name: "Dr. Laura Urassa",
            role: "Interim Treasurer",
            credential: "Board of Directors",
            bio: "Dr. Laura Urassa supports financial oversight and governance as Interim Treasurer, helping strengthen accountability and responsible stewardship of Kijana Simama resources.",
            photo: drLaura,
          },
          {
            name: "Dr. Agnes Kosia",
            role: "Interim Board Secretary",
            credential: "Board of Directors",
            bio: "Dr. Agnes Kosia supports board coordination, documentation, and governance processes as Interim Board Secretary.",
            photo: drAgnes,
          },
          {
            name: "Dr. Godwin Mwisomba",
            role: "Member",
            credential: "Board of Directors",
            bio: "Dr. Godwin Mwisomba serves as a board member, contributing oversight and guidance to support Kijana Simama's mission and programs.",
          },
          {
            name: "Mr. Ezekiel Imana",
            role: "Member",
            credential: "Board of Directors",
            bio: "Mr. Ezekiel Imana serves as a board member, supporting governance, digital implementation, and organizational growth for Kijana Simama.",
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
          'Ilianzishwa mnamo 2025, Kijana Simama ilitokana na dhamira ya kuwapa nguvu wanafunzi vijana kote Tanzania. Iliundwa kwa kujibu changamoto zinazokua katika afya ya akili, afya ya uzazi na uzazi, na ujuzi wa maisha, mpango huu unawapa vijana maarifa na ujasiri wanaohitaji kustawi. Jina letu, "Kijana Simama", linamaanisha "Kijana, Simama Wima", linaonyesha imani yetu kwamba kila kijana ana uwezo wa kusimama, kufanya maamuzi yenye uwajibikaji, na kuchangia vyema katika jamii zao.',
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
        subtitle: "Muundo rahisi wa uongozi wa Kijana Simama",
        tapHint: "Gusa jina la mwanatimu kuona maelezo kamili",
        layers: {
          founders: "Founders Council",
          board: "Board of Directors",
          executive: "Executive Team",
        },
        boardSummary:
          "Board inasimamia uongozi, uwajibikaji, na mwelekeo wa kimkakati.",
        executiveSummary:
          "Taarifa za Executive Team zitaongezwa baada ya orodha kamili kuthibitishwa.",
        members: [
          {
            name: "Dkt. Syangu E. Mkony",
            role: "Mwanzilishi",
            credential: "Daktari wa Akili & Mtaalamu wa Afya ya Umma",
            bio: "Dkt. Syangu Mkony amejitolea kuendeleza afya ya akili ya vijana, afya ya uzazi na uzazi, na ustawi wa kisaikolojia kupitia mipango ya shule na jamii Tanzania. Kupitia Kijana Simama, anaunga mkono uwezeshaji wa vijana na mustakabali wenye afya.",
            photo: drSyangu,
          },
          {
            name: "Dkt. Agnes Kosia",
            role: "Mwanzilishi",
            credential: "Mtaalamu wa Afya ya Umma, PhD",
            bio: "Dkt. Agnes Kosia ni Mtaalamu wa Afya ya Umma mwenye uzoefu wa zaidi ya miaka 12 katika afya ya mama na mtoto, afya ya uzazi wa vijana, kuzuia ukatili wa kijinsia, na mipango ya afya ya jamii. Analeta utaalamu mkubwa katika programu zinazolenga vijana.",
            photo: drAgnes,
          },
          {
            name: "Dkt. Laura Urasa",
            role: "Mwanzilishi",
            credential: "Mtaalamu wa Afya ya Umma & SRH",
            bio: "Dkt. Laura Urasa ni Daktari Mkuu mwenye uzoefu wa zaidi ya miaka 13 wa kimatibabu katika afya ya akili na magonjwa ya akili. Pia ni mtaalamu wa afya ya umma mwenye utaalamu katika Sera na Programu za Afya ya Uzazi na Uzazi.",
            photo: drLaura,
          },
          {
            name: "Vivian Macha",
            role: "Mwanzilishi",
            credential: "Rasilimali Watu na Utawala",
            bio: "Vivian Macha ni mtaalamu mwenye uzoefu wa Rasilimali Watu na Utawala kwa zaidi ya miaka 15 katika usimamizi wa HR, mahusiano ya wafanyakazi, utawala, uajiri, utekelezaji wa sera, na maendeleo ya taasisi. Kama mmoja wa waanzilishi wa Kijana Simama, anatumia uongozi, usimamizi wa watu, na uandaaji wa sera kuimarisha ustawi na uwezeshaji wa vijana kupitia mipango yenye athari kwa jamii.",
            photo: vivianMacha,
          },
          {
            name: "Sophia S. Nyakitagara",
            role: "Mwanzilishi",
            credential: "Mwalimu",
            bio: "Sophia S. Nyakitagara ni mwalimu, mtaalamu wa lugha, na mjasiriamali mwenye uzoefu wa zaidi ya miaka 12 katika kufundisha Lugha na Fasihi ya Kiswahili kwa wanafunzi wa sekondari. Ana uzoefu katika makuzi ya vijana, unasihi na ushauri, utatuzi wa migogoro, na uongozi wa vijana, akichangia maendeleo ya stadi za maisha na mazingira salama kwa vijana.",
            photo: sophiaNyakitagara,
          },
        ],
        boardMembers: [
          {
            name: "Dkt. Syangu Mkony",
            role: "Interim Chairperson",
            credential: "Board of Directors",
            bio: "Dkt. Syangu Mkony anatoa uongozi wa muda wa bodi na mwongozo wa kimkakati kwa kazi za Kijana Simama katika ustawi wa vijana, afya ya akili, na uwezeshaji wa vijana mashuleni.",
            photo: drSyangu,
          },
          {
            name: "Dkt. Laura Urassa",
            role: "Interim Treasurer",
            credential: "Board of Directors",
            bio: "Dkt. Laura Urassa anasaidia usimamizi wa fedha na uwajibikaji kama Interim Treasurer, akiimarisha matumizi sahihi ya rasilimali za Kijana Simama.",
            photo: drLaura,
          },
          {
            name: "Dkt. Agnes Kosia",
            role: "Interim Board Secretary",
            credential: "Board of Directors",
            bio: "Dkt. Agnes Kosia anasaidia uratibu wa bodi, kumbukumbu, na taratibu za kiutawala kama Interim Board Secretary.",
            photo: drAgnes,
          },
          {
            name: "Dr. Godwin Mwisomba",
            role: "Member",
            credential: "Board of Directors",
            bio: "Dr. Godwin Mwisomba ni mjumbe wa bodi anayechangia usimamizi na mwongozo wa kusaidia dhamira na programu za Kijana Simama.",
          },
          {
            name: "Mr. Ezekiel Imana",
            role: "Member",
            credential: "Board of Directors",
            bio: "Mr. Ezekiel Imana ni mjumbe wa bodi anayesaidia katika governance, utekelezaji wa kidijitali, na ukuaji wa taasisi ya Kijana Simama.",
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

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.15 } },
  };
  const treeLayerVariants = {
    initial: { opacity: 0, x: -24, scale: 0.98 },
    animate: { opacity: 1, x: 0, scale: 1 },
    transition: { duration: 0.55, ease: "easeOut" },
  };

  const memberVariants = {
    initial: { opacity: 0, y: 18, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
  };
  const teamLayers = [
    {
      title: t.team.layers.founders,
      icon: Crown,
      members: t.team.members,
      summary: t.team.subtitle,
    },
    {
      title: t.team.layers.board,
      icon: Network,
      members: t.team.boardMembers,
      summary: t.team.boardSummary,
    },
    {
      title: t.team.layers.executive,
      icon: BriefcaseBusiness,
      members: [],
      summary: t.team.executiveSummary,
    },
  ];

  const renderMemberButton = (member: TeamMember, memberIndex = 0) => (
    <motion.button
      key={`${member.name}-${member.role}`}
      variants={memberVariants}
      transition={{ duration: 0.35, delay: memberIndex * 0.03, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.015 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => setSelectedMember(member)}
      className="group relative w-full overflow-hidden rounded-2xl border border-primary/10 bg-white p-3 text-left shadow-sm shadow-primary/5 transition-colors duration-300 hover:border-primary/35 hover:bg-blue-50/40 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="absolute inset-y-3 left-0 w-1 rounded-r-full bg-linear-to-b from-primary via-secondary to-blue-400 opacity-60 transition-all duration-300 group-hover:opacity-100" />
      <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />
      <div className="relative flex items-center gap-3 pl-1">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl bg-primary/10 ring-2 ring-white shadow-md transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105">
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary/15 to-secondary/15 text-sm font-semibold text-primary">
              {member.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </div>
          )}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-gray-950 transition-colors group-hover:text-primary">
            {member.name}
          </p>
          <p className="text-xs font-semibold text-secondary">{member.role}</p>
          <p className="line-clamp-1 text-xs text-gray-500">
            {member.credential}
          </p>
        </div>
      </div>
    </motion.button>
  );
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-linear-to-br from-primary to-blue-600 text-white py-10 sm:py-12 md:py-16 overflow-hidden">
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

      {/* Our Story */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
              className="relative hidden h-72 rounded-lg overflow-hidden shadow-xl sm:block md:h-80"
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
      <section className="py-8 sm:py-10 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-5 sm:p-6">
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
                <CardContent className="p-5 sm:p-6">
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

      {/* Team Section */}
      <section className="relative overflow-hidden bg-gray-50 py-8 sm:py-10 md:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.12),transparent_30%)]" />
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ scale: 0.85, rotate: -8 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 160, damping: 14 }}
              className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-xl shadow-primary/10 ring-1 ring-primary/10"
            >
              <Users className="h-7 w-7" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl mb-3 text-primary">
              {t.team.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-600">
              {t.team.subtitle}
            </p>
            <p className="mt-2 text-sm font-semibold text-secondary">
              {t.team.tapHint}
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="relative mx-auto max-w-5xl space-y-5"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="absolute left-5 top-8 bottom-8 hidden w-px origin-top bg-linear-to-b from-primary via-secondary to-blue-300 sm:block"
            />
            {teamLayers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <motion.div
                  key={layer.title}
                  variants={treeLayerVariants}
                  className="relative"
                >
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-[2.75rem_1fr] sm:gap-5">
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 4 }}
                      className="relative hidden h-11 w-11 items-center justify-center rounded-2xl border-4 border-gray-50 bg-primary text-white shadow-lg shadow-primary/20 sm:flex"
                    >
                      <span className="absolute left-full top-1/2 hidden h-px w-5 bg-primary/30 sm:block" />
                      <Icon className="h-5 w-5" />
                    </motion.div>
                    <Card className="overflow-hidden border-white/70 bg-white/90 shadow-xl shadow-primary/5 backdrop-blur">
                      <CardContent className="p-4 sm:p-5">
                        <div className="mb-4 flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:hidden">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
                              Layer {index + 1}
                            </p>
                            <h3 className="text-xl font-bold text-gray-950">
                              {layer.title}
                            </h3>
                            <p className="mt-1 text-sm text-gray-600">
                              {layer.summary}
                            </p>
                          </div>
                        </div>
                        {layer.members.length > 0 ? (
                          <motion.div
                            variants={staggerContainer}
                            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
                          >
                            {layer.members.map(renderMemberButton)}
                          </motion.div>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0.6 }}
                            animate={{ opacity: [0.65, 1, 0.65] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            className="rounded-2xl border border-dashed border-primary/25 bg-white/70 p-4 text-sm font-medium text-gray-600"
                          >
                            {layer.summary}
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <Dialog
        open={!!selectedMember}
        onOpenChange={(open) => !open && setSelectedMember(null)}
      >
        <DialogContent className="max-h-[90vh] overflow-hidden border-white/50 bg-white/90 p-0 shadow-2xl shadow-primary/20 backdrop-blur-2xl sm:max-w-2xl">
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative max-h-[90vh] overflow-y-auto"
            >
              <div className="relative overflow-hidden bg-linear-to-br from-primary via-blue-600 to-secondary px-5 pb-20 pt-7 text-white sm:px-7">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/15 blur-2xl" />
                <div className="absolute -bottom-20 left-8 h-40 w-40 rounded-full bg-secondary/30 blur-2xl" />
                <DialogHeader className="relative text-left">
                  <p className="mb-2 w-fit rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-50 backdrop-blur">
                    {selectedMember.role}
                  </p>
                  <DialogTitle className="pr-12 text-2xl leading-tight text-white sm:text-3xl">
                    {selectedMember.name}
                  </DialogTitle>
                  <DialogDescription className="max-w-lg text-sm leading-relaxed text-blue-50 sm:text-base">
                    {selectedMember.credential}
                  </DialogDescription>
                </DialogHeader>
              </div>

              <div className="relative px-5 pb-6 sm:px-7">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  className="-mt-14 mb-5 flex flex-col gap-4 rounded-3xl border border-white/70 bg-white/95 p-4 shadow-xl shadow-primary/10 backdrop-blur sm:flex-row sm:items-end"
                >
                  <div className="h-28 w-28 shrink-0 overflow-hidden rounded-3xl bg-primary/10 ring-4 ring-white shadow-lg">
                    {selectedMember.photo ? (
                      <img
                        src={selectedMember.photo}
                        alt={selectedMember.name}
                        className="h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-primary/15 to-secondary/15 text-3xl font-bold text-primary">
                        {selectedMember.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 pb-1">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                      Leadership Profile
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-gray-950">
                      {selectedMember.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary">
                      {selectedMember.role}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.18 }}
                  className="rounded-3xl border border-primary/10 bg-linear-to-br from-blue-50 via-white to-emerald-50 p-5 shadow-inner"
                >
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                    Full Details
                  </p>
                  <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                    {selectedMember.bio}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

