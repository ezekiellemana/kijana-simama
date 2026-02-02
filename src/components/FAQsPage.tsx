import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useState } from "react";

interface FAQsPageProps {
  language: "en" | "sw";
}

export function FAQsPage({ language }: FAQsPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const translations = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about Kijana Simama",
      categories: {
        general: "General Questions",
        programs: "Programs & Services",
        volunteer: "Volunteering",
        donations: "Donations",
      },
      faqs: {
        general: [
          {
            question: "What is Kijana Simama?",
            answer:
              'Kijana Simama (meaning "Youth, Stand Tall") is an initiative dedicated to empowering in-school adolescents across Tanzania. We equip young people with knowledge, skills, and supportive environments in mental health, sexual and reproductive health, and financial literacy, enabling them to navigate adolescence responsibly and build a foundation for lifelong personal and social development.',
          },
          {
            question: "When was Kijana Simama founded?",
            answer:
              "Kijana Simama was founded in 2025 in response to growing challenges in mental health, sexual and reproductive health, and life skills among in-school adolescents in Tanzania.",
          },
          {
            question: "Where are you located?",
            answer:
              "Our headquarters is located in Dar es Salaam, Tanzania. We work with in-school adolescents and young people across multiple regions in Tanzania, partnering with schools, communities, and local organizations.",
          },
          {
            question: "How can I get involved?",
            answer:
              "There are many ways to get involved! You can volunteer your time, make a donation, become a mentor, partner with us, support our programs, or use the Kijana Simama App. Visit our Contact page to learn more about how you can support in-school adolescents in Tanzania.",
          },
        ],
        programs: [
          {
            question: "What programs do you offer?",
            answer:
              "We offer 9 holistic programs: Life Skills & Personal Development, Mentorship & Guidance, Mental Health & Wellness Support, Sexual & Reproductive Health Education, Digital Literacy & ICT Skills, Entrepreneurship & Financial Skills, Community Engagement & Leadership, Parental & Teacher Support Programs, and the Kijana Simama App.",
          },
          {
            question: "Who can participate in your programs?",
            answer:
              "Our programs are primarily designed for in-school adolescents (ages 12-19) in Tanzania. We also offer support programs for parents, teachers, and youth champions who work with adolescents. Visit our Services page to learn about eligibility for specific programs.",
          },
          {
            question: "Are your programs free?",
            answer:
              "Yes, most of our programs are provided free of charge to in-school adolescents and participants. We believe that financial constraints should not prevent anyone from accessing mental health support, sexual and reproductive health education, or life skills training.",
          },
          {
            question: "How do I access the Kijana Simama App?",
            answer:
              "The Kijana Simama App provides digital access to learning resources, mental health and SRH guidance, and real-time mentorship tools. Contact us through our website or visit participating schools to learn how to download and access the app.",
          },
        ],
        volunteer: [
          {
            question: "How can I become a volunteer?",
            answer:
              "To become a volunteer, fill out the volunteer application form on our website or visit our office. We will contact you about available volunteer opportunities that match your skills and interests.",
          },
          {
            question: "What are the volunteer requirements?",
            answer:
              "Volunteers must be at least 18 years old, able to commit to a minimum of 3 months, and pass a background check. Specific roles may have additional requirements.",
          },
          {
            question: "What time commitment is required?",
            answer:
              "We ask for a minimum commitment of 4-8 hours per week for at least 3 months. However, we also have flexible opportunities for one-time events and short-term projects.",
          },
        ],
        donations: [
          {
            question: "How will my donation be used?",
            answer:
              "Your donation directly supports our programs and services. Funds are used for scholarships, training materials, program operations, and administrative costs. We maintain transparency and provide regular updates to our donors.",
          },
          {
            question: "Is my donation tax-deductible?",
            answer:
              "Yes, Kijana Simama is a registered non-profit organization. All donations are tax-deductible to the extent allowed by law. You will receive a receipt for your records.",
          },
          {
            question: "Can I donate items instead of money?",
            answer:
              "Yes! We accept donations of books, computers, school supplies, and other educational materials. Please contact us before making in-kind donations to ensure we can accept and utilize the items.",
          },
          {
            question: "Can I set up a monthly donation?",
            answer:
              "Absolutely! Monthly donations provide stable support for our programs. You can set up recurring donations through our website or by contacting our office.",
          },
        ],
      },
      stillHaveQuestions: {
        title: "Still have questions?",
        description:
          "If you couldn't find the answer you were looking for, feel free to contact us directly.",
        button: "Contact Us",
      },
    },
    sw: {
      title: "Maswali Yanayoulizwa Mara kwa Mara",
      subtitle: "Pata majibu ya maswali ya kawaida kuhusu Kijana Simama",
      categories: {
        general: "Maswali ya Jumla",
        programs: "Programu na Huduma",
        volunteer: "Kujitolea",
        donations: "Michango",
      },
      faqs: {
        general: [
          {
            question: "Kijana Simama ni nini?",
            answer:
              'Kijana Simama (na maana "Vijana, Tumia Mwili") ni mchakato unayotumika kusaidia kujitumia vijana katika shule kote Tanzania. Tunatoa vijana na ujuzi, ujuzi, na mazingira ya ushiriki katika afya ya roho, afya ya kawaida na kuzaliwa, na ujuzi wa kifedha, kusaidia wao kufikia umri wa kawaida kwa njia salama na kubinafsi asili ya maendeleo ya kibinafsi na maisha kote.',
          },
          {
            question: "Kijana Simama ilianzishwa lini?",
            answer:
              "Kijana Simama ilianzishwa mnamo 2025 kulingana na athari za kuzaliwa, afya ya kawaida na kuzaliwa, na ujuzi wa kibinafsi kati ya vijana katika shule kote Tanzania.",
          },
          {
            question: "Mko wapi?",
            answer:
              "Makao yetu makuu yako Dar es Salaam, Tanzania. Tunafanya shughuli na vijana katika shule na watu wengine katika mazingira mengi kote Tanzania, na tunashirikiana na shule, jamii, na mazingira ya kawaida.",
          },
          {
            question: "Naweza kujihusisha vipi?",
            answer:
              "Kuna njia nyingi za kujihusisha! Unaweza kujitolea muda wako, kutoa mchango, kuwa mshauri, kushirikiana nasi, kusaidia programu zetu, au kutumia Kijana Simama App. Tembelea ukurasa wetu wa Mawasiliano kujifunza zaidi kuhusu njia za kujihusisha na vijana katika shule kote Tanzania.",
          },
        ],
        programs: [
          {
            question: "Mnatoa programu gani?",
            answer:
              "Tunatoa programu 9 za kawaida: Ujuzi wa Kibinafsi na Maendeleo ya Kibinafsi, Ushauri na Usimamizi, Usaidiaji wa Afya ya Roho na Usimamizi wa Afya, Elimu ya Afya ya Kawaida na Kuzaliwa, Ujuzi wa Uchafuzi wa Kiuchafuzi na Ujuzi wa ICT, Ujuzi wa Usimamizi na Ujuzi wa Kifedha, Usimamizi wa Jamii na Maendeleo ya Uongozi, Programu za Usimamizi wa Wazazi na Wateja, na Kijana Simama App.",
          },
          {
            question: "Nani anaweza kushiriki katika programu zenu?",
            answer:
              "Programu zetu zimekusudiwa hasa kwa vijana katika shule (umri wa miaka 12-19) kote Tanzania. Tunatoa programu za msaada kwa wazazi, wateja, na wafanyabiashara wa vijana wengine wanaojitolea na vijana. Tembelea ukurasa wetu wa Huduma kujifunza kuhusu kustahiki kwa programu maalum.",
          },
          {
            question: "Je, programu zenu ni bure?",
            answer:
              "Ndiyo, programu nyingi zetu zinapatikana bure kwa vijana katika shule na washiriki. Tunaamini kwamba vikwazo vya kifedha havipaswi kuzuia mtu yeyote kupata usaidiaji wa afya ya roho, elimu ya afya ya kawaida na kuzaliwa, au ujuzi wa kibinafsi.",
          },
          {
            question: "Najisajili vipi kwa programu?",
            answer:
              "Unaweza kujisajili kwa programu zetu kwa kutembelea ofisi yetu, kutupigia simu, au kujaza fomu ya maombi kwenye tovuti yetu. Usajili wa programu kwa kawaida hufunguliwa wiki 2-3 kabla ya tarehe ya kuanza.",
          },
          {
            question: "Nipatikana Kijana Simama App vipi?",
            answer:
              "Kijana Simama App inatoa usimamizi wa kifedha kwa vifaa vya kujifunza, usimamizi wa afya ya roho na afya ya kawaida na kuzaliwa, na vifaa vya usimamizi wa kifedha kwa muda mrefu. Wasiliana nasi kupitia tovuti yetu au tembelea shule zinazoshirikiana kujifunza kuhusu njia za kudownload na kujisajili kwa app.",
          },
        ],
        volunteer: [
          {
            question: "Naweza kuwa mtoaji huduma vipi?",
            answer:
              "Kuwa mtoaji huduma, jaza fomu ya maombi ya kujitolea kwenye tovuti yetu au tembelea ofisi yetu. Tutawasiliana nawe kuhusu fursa za kujitolea zinazopatikana zinazofanana na ujuzi na maslahi yako.",
          },
          {
            question: "Mahitaji ya kujitolea ni yapi?",
            answer:
              "Wafadhili lazima wawe na umri wa angalau miaka 18, waweze kujitolea kwa angalau miezi 3, na kupita ukaguzi wa asili. Majukumu maalum yanaweza kuwa na mahitaji ya ziada.",
          },
          {
            question: "Ahadi ya muda gani inahitajika?",
            answer:
              "Tunaomba ahadi ya kiwango cha chini cha masaa 4-8 kwa wiki kwa angalau miezi 3. Hata hivyo, tuna fursa nyepesi kwa matukio ya mara moja na miradi ya muda mfupi.",
          },
        ],
        donations: [
          {
            question: "Mchango wangu utatumika vipi?",
            answer:
              "Mchango wako unasaidia moja kwa moja programu na huduma zetu. Fedha zinatumika kwa ufadhili, vifaa vya mafunzo, uendeshaji wa programu, na gharama za kiutawala. Tunadumisha uwazi na kutoa masasisho ya kawaida kwa wafadhili wetu.",
          },
          {
            question: "Je, mchango wangu unapunguzwa kodi?",
            answer:
              "Ndiyo, Kijana Simama ni shirika lililosajiliwa lisilo la faida. Michango yote inapunguzwa kodi kulingana na sheria. Utapokea risiti kwa kumbukumbu zako.",
          },
          {
            question: "Naweza kutoa vitu badala ya pesa?",
            answer:
              "Ndiyo! Tunakubali michango ya vitabu, kompyuta, vifaa vya shule, na vifaa vingine vya kielimu. Tafadhali wasiliana nasi kabla ya kutoa michango ya aina ili kuhakikisha tunaweza kukubali na kutumia vitu.",
          },
          {
            question: "Naweza kuweka mchango wa kila mwezi?",
            answer:
              "Kabisa! Michango ya kila mwezi inatoa msaada thabiti kwa programu zetu. Unaweza kuweka michango inayorudiwa kupitia tovuti yetu au kwa kuwasiliana na ofisi yetu.",
          },
        ],
      },
      stillHaveQuestions: {
        title: "Bado una maswali?",
        description:
          "Ikiwa hukupata jibu ulilotafuta, jisikie huru kuwasiliana nasi moja kwa moja.",
        button: "Wasiliana Nasi",
      },
    },
  };

  const t = translations[language];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4 text-center">{t.title}</h1>
          <p className="text-xl md:text-2xl text-blue-100 text-center">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* General Questions */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6 text-primary">
              {t.categories.general}
            </h2>
            <div className="space-y-4">
              {t.faqs.general.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 flex justify-between items-center hover:bg-gray-50 transition-colors text-left"
                    >
                      <span className="pr-4">{faq.question}</span>
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-secondary shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-secondary shrink-0" />
                      )}
                    </button>
                    {openIndex === index && (
                      <div className="px-6 pb-6 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Programs & Services */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6 text-primary">
              {t.categories.programs}
            </h2>
            <div className="space-y-4">
              {t.faqs.programs.map((faq, index) => {
                const faqIndex = t.faqs.general.length + index;
                return (
                  <Card key={faqIndex} className="overflow-hidden">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleFAQ(faqIndex)}
                        className="w-full p-6 flex justify-between items-center hover:bg-gray-50 transition-colors text-left"
                      >
                        <span className="pr-4">{faq.question}</span>
                        {openIndex === faqIndex ? (
                          <ChevronUp className="w-5 h-5 text-secondary shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-secondary shrink-0" />
                        )}
                      </button>
                      {openIndex === faqIndex && (
                        <div className="px-6 pb-6 text-gray-600">
                          {faq.answer}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Volunteering */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6 text-primary">
              {t.categories.volunteer}
            </h2>
            <div className="space-y-4">
              {t.faqs.volunteer.map((faq, index) => {
                const faqIndex =
                  t.faqs.general.length + t.faqs.programs.length + index;
                return (
                  <Card key={faqIndex} className="overflow-hidden">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleFAQ(faqIndex)}
                        className="w-full p-6 flex justify-between items-center hover:bg-gray-50 transition-colors text-left"
                      >
                        <span className="pr-4">{faq.question}</span>
                        {openIndex === faqIndex ? (
                          <ChevronUp className="w-5 h-5 text-secondary shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-secondary shrink-0" />
                        )}
                      </button>
                      {openIndex === faqIndex && (
                        <div className="px-6 pb-6 text-gray-600">
                          {faq.answer}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Donations */}
          <div className="mb-12">
            <h2 className="text-3xl mb-6 text-primary">
              {t.categories.donations}
            </h2>
            <div className="space-y-4">
              {t.faqs.donations.map((faq, index) => {
                const faqIndex =
                  t.faqs.general.length +
                  t.faqs.programs.length +
                  t.faqs.volunteer.length +
                  index;
                return (
                  <Card key={faqIndex} className="overflow-hidden">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleFAQ(faqIndex)}
                        className="w-full p-6 flex justify-between items-center hover:bg-gray-50 transition-colors text-left"
                      >
                        <span className="pr-4">{faq.question}</span>
                        {openIndex === faqIndex ? (
                          <ChevronUp className="w-5 h-5 text-secondary flex-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-secondary flex--0" />
                        )}
                      </button>
                      {openIndex === faqIndex && (
                        <div className="px-6 pb-6 text-gray-600">
                          {faq.answer}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-linear-to-r from-secondary to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            {t.stillHaveQuestions.title}
          </h2>
          <p className="text-xl mb-8">{t.stillHaveQuestions.description}</p>
        </div>
      </section>
    </div>
  );
}
