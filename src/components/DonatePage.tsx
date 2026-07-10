import { useState } from "react";
import { Building2, CheckCircle, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import nmbLogo from "../assets/nmb-logo.png";

interface DonatePageProps {
  language: "en" | "sw";
  onNavigate?: (page: string) => void;
}

export function DonatePage({ language, onNavigate }: DonatePageProps) {
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [thankYouOpen, setThankYouOpen] = useState(false);

  const translations = {
    en: {
      title: "Get Involved",
      subtitle: "Donate, volunteer, partner, or organize a fundraiser with us",
      impact: {
        title: "Your Impact",
        description:
          "Every donation makes a difference in the lives of young people.",
        items: [
          {
            amount: "TZS 60,000",
            description: "Provides school supplies for one student",
          },
          {
            amount: "TZS 120,000",
            description: "Sponsors one youth for a skills workshop",
          },
          {
            amount: "TZS 240,000",
            description: "Funds mentorship program for three months",
          },
          {
            amount: "TZS 600,000",
            description: "Provides scholarship for one semester",
          },
        ],
      },
      donationForm: {
        title: "Make Your Donation",
        type: {
          label: "Donation Type",
          oneTime: "One-Time",
          monthly: "Monthly",
        },
        amount: {
          label: "Select Amount",
          custom: "Custom Amount",
          placeholder: "Enter amount",
        },
        payment: {
          label: "Payment Method",
          card: "Credit/Debit Card",
          mpesa: "M-Pesa",
          bank: "Bank Transfer",
        },
        bankDetails: {
          title: "Official Bank Account",
          description:
            "Use these details for direct bank transfers to Kijana Simama.",
          accountName: "Account name",
          accountNumber: "Account number",
          bankName: "Bank name",
          branch: "Branch",
          accountNameValue: "Kijana Simama",
          accountNumberValue: "20910057340",
          bankNameValue: "NMB",
          branchValue: "Muhimbili",
        },
        personal: {
          title: "Your Information",
          name: "Full Name",
          namePlaceholder: "Your full name",
          email: "Email Address",
          emailPlaceholder: "you@example.com",
          phone: "Phone Number",
          phonePlaceholder: "+255 713 415 316",
        },
        submit: "Complete Donation",
        note: "Note: For direct support, please use the official bank account details above.",
        customToggle: "Use a custom amount",
        changeAmount: "Change amount",
        selectedAmount: "Selected amount",
        thanksTitle: "Thank you for your support",
        thanksMessage:
          "Your support means a lot to Kijana Simama. Online payment integration is not active yet, so please complete your donation using the official bank details shown on this page.",
        thanksButton: "Okay",
      },
      otherWays: {
        title: "Other Ways to Support",
        volunteer: {
          title: "Volunteer",
          description: "Share your information and we will match your skills with the right youth program.",
        },
        partner: {
          title: "Corporate Partnership",
          description: "Share your organization information so we can explore cooperation and partnership.",
        },
        fundraise: {
          title: "Organize Fundraising",
          description: "Tell us about your organization and the fundraising idea you want to lead.",
        },
      },
    },
    sw: {
      title: "Shiriki Nasi",
      subtitle:
        "Changia, jitolee, shirikiana nasi, au andaa uchangishaji fedha",
      impact: {
        title: "Athari Yako",
        description: "Kila mchango unafanya tofauti katika maisha ya vijana.",
        items: [
          {
            amount: "TZS 60,000",
            description: "Hutoa vifaa vya shule kwa mwanafunzi mmoja",
          },
          {
            amount: "TZS 120,000",
            description: "Inafadhili kijana mmoja kwa warsha ya ujuzi",
          },
          {
            amount: "TZS 240,000",
            description: "Inafadhili programu ya ushauri kwa miezi mitatu",
          },
          {
            amount: "TZS 600,000",
            description: "Hutoa ufadhili kwa muhula mmoja",
          },
        ],
      },
      donationForm: {
        title: "Fanya Mchango Wako",
        type: {
          label: "Aina ya Mchango",
          oneTime: "Mara Moja",
          monthly: "Kila Mwezi",
        },
        amount: {
          label: "Chagua Kiasi",
          custom: "Kiasi Maalum",
          placeholder: "Weka kiasi",
        },
        payment: {
          label: "Njia ya Malipo",
          card: "Kadi ya Mkopo/Benki",
          mpesa: "M-Pesa",
          bank: "Uhamisho wa Benki",
        },
        bankDetails: {
          title: "Akaunti Rasmi ya Benki",
          description:
            "Tumia taarifa hizi kufanya uhamisho wa moja kwa moja kwenda Kijana Simama.",
          accountName: "Jina la akaunti",
          accountNumber: "Namba ya akaunti",
          bankName: "Jina la benki",
          branch: "Tawi",
          accountNameValue: "Kijana Simama",
          accountNumberValue: "20910057340",
          bankNameValue: "NMB",
          branchValue: "Muhimbili",
        },
        personal: {
          title: "Maelezo Yako",
          name: "Jina Kamili",
          namePlaceholder: "Jina lako kamili",
          email: "Barua Pepe",
          emailPlaceholder: "wewe@example.com",
          phone: "Nambari ya Simu",
          phonePlaceholder: "+255 713 415 316",
        },
        submit: "Kamilisha Mchango",
        note: "Kumbuka: Kwa msaada wa moja kwa moja, tafadhali tumia taarifa rasmi za akaunti ya benki hapo juu.",
        customToggle: "Tumia kiasi kingine",
        changeAmount: "Badili kiasi",
        selectedAmount: "Kiasi ulichochagua",
        thanksTitle: "Asante kwa msaada wako",
        thanksMessage:
          "Msaada wako una maana kubwa kwa Kijana Simama. Mfumo wa malipo mtandaoni bado haujaunganishwa, hivyo tafadhali kamilisha mchango kwa kutumia taarifa rasmi za benki zilizo kwenye ukurasa huu.",
        thanksButton: "Sawa",
      },
      otherWays: {
        title: "Njia Nyingine za Kusaidia",
        volunteer: {
          title: "Kujitolea",
          description: "Tuma taarifa zako ili tuunganishe ujuzi wako na programu inayofaa kwa vijana.",
        },
        partner: {
          title: "Ushirikiano wa Kampuni",
          description: "Tuma taarifa za taasisi yako ili tujadili ushirikiano unaowezekana.",
        },
        fundraise: {
          title: "Andaa Uchangishaji Fedha",
          description: "Tuambie kuhusu taasisi yako na wazo la uchangishaji fedha unalotaka kuongoza.",
        },
      },
    },
  };

  const t = translations[language];

  const predefinedAmounts = ["25000", "50000", "100000", "250000"];

  // Format number with thousand separators for TZS
  const formatTZS = (amount: string) => {
    const num = parseInt(amount.replace(/,/g, ""), 10);
    if (isNaN(num)) return amount;
    return "TZS " + num.toLocaleString("en-US");
  };

  // Format input value as user types (add commas)
  const formatInputAmount = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    if (!numericValue) return "";
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setThankYouOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-secondary to-green-600 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Heart className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4 text-center">{t.title}</h1>
          <p className="text-xl md:text-2xl text-green-100 text-center">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Donation Details */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-secondary/10 to-transparent" />
        <div className="relative mx-auto max-w-5xl px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
          <Card className="overflow-hidden rounded-[2rem] border-2 border-primary/15 shadow-2xl shadow-primary/15 ring-1 ring-secondary/10">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className="relative overflow-hidden bg-linear-to-br from-primary via-blue-700 to-secondary p-5 text-white sm:p-8 lg:p-10"
                >
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
                  <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-secondary/25 blur-3xl" />
                  <motion.div
                    whileHover={{ y: -4, rotate: -2, scale: 1.03 }}
                    className="relative mb-6 w-fit rounded-[1.6rem] bg-white p-4 shadow-xl ring-1 ring-white/30"
                  >
                    <img
                      src={nmbLogo}
                      alt="NMB Bank"
                      width={160}
                      height={80}
                      loading="eager"
                      decoding="sync"
                      className="h-14 w-auto object-contain sm:h-16"
                    />
                  </motion.div>
                  <p className="relative text-xs font-bold uppercase tracking-[0.22em] text-green-100 sm:text-sm">
                    {t.donationForm.bankDetails.title}
                  </p>
                  <h2 className="relative mt-3 text-2xl font-black leading-tight sm:text-4xl">
                    {language === "en"
                      ? "Support Kijana Simama directly"
                      : "Changia Kijana Simama moja kwa moja"}
                  </h2>
                  <p className="relative mt-4 max-w-md text-sm leading-relaxed text-blue-50 sm:text-base">
                    {t.donationForm.bankDetails.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: 0.18 }}
                  className="p-4 sm:p-7 lg:p-8"
                >
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {[
                      {
                        label: t.donationForm.bankDetails.accountName,
                        value: t.donationForm.bankDetails.accountNameValue,
                      },
                      {
                        label: t.donationForm.bankDetails.accountNumber,
                        value: t.donationForm.bankDetails.accountNumberValue,
                      },
                      {
                        label: t.donationForm.bankDetails.bankName,
                        value: t.donationForm.bankDetails.bankNameValue,
                      },
                      {
                        label: t.donationForm.bankDetails.branch,
                        value: t.donationForm.bankDetails.branchValue,
                      },
                    ].map((detail, index) => (
                      <motion.div
                        key={detail.label}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: 0.24 + index * 0.05 }}
                        whileHover={{ y: -3, scale: 1.015 }}
                        className="rounded-[1.35rem] border-2 border-slate-200 bg-white p-4 shadow-md shadow-slate-950/5 transition-colors duration-300 hover:border-secondary/40"
                      >
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                          {detail.label}
                        </p>
                        <p className="mt-1 text-lg font-black text-gray-950">
                          {detail.value}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.35 }}
                    className="mt-7 space-y-5 border-t border-gray-200 pt-6"
                  >
                    <div>
                      <Label className="mb-3 block text-sm font-bold text-gray-800">
                        {t.donationForm.amount.label}
                      </Label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                        {predefinedAmounts.map((amount) => (
                          <motion.button
                            key={amount}
                            type="button"
                            whileHover={{ y: -3, scale: 1.02 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => {
                              if (selectedAmount === amount) {
                                setSelectedAmount("");
                              } else {
                                setSelectedAmount(amount);
                                setCustomAmount("");
                              }
                            }}
                            className={`min-h-14 rounded-[1.15rem] border-2 px-2 py-3 text-sm font-black transition-all duration-200 sm:px-3 ${
                              selectedAmount === amount
                                ? "border-secondary bg-secondary text-white shadow-xl shadow-secondary/25"
                                : "border-slate-200 bg-white text-slate-700 shadow-sm hover:border-secondary/60 hover:text-secondary hover:shadow-md"
                            }`}
                          >
                            {formatTZS(amount)}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {selectedAmount ? (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="rounded-[1.35rem] border-2 border-secondary/25 bg-secondary/10 p-4"
                      >
                        <p className="text-xs font-bold uppercase tracking-wider text-secondary">
                          {t.donationForm.selectedAmount}
                        </p>
                        <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <p className="text-2xl font-black text-primary">
                            {formatTZS(selectedAmount)}
                          </p>
                          <button
                            type="button"
                            onClick={() => setSelectedAmount("")}
                            className="w-fit rounded-full border border-secondary/30 bg-white px-4 py-2 text-sm font-bold text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-secondary hover:shadow-md"
                          >
                            {t.donationForm.changeAmount}
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <Label htmlFor="custom-amount">
                          {t.donationForm.customToggle}
                        </Label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            TZS
                          </span>
                          <Input
                            id="custom-amount"
                            type="text"
                            placeholder="0,000"
                            value={customAmount}
                            onChange={(e) => {
                              const formatted = formatInputAmount(e.target.value);
                              setCustomAmount(formatted);
                              setSelectedAmount("");
                            }}
                            className="mt-2 h-13 rounded-[1.15rem] border-2 border-slate-200 pl-16 shadow-sm transition-all focus:border-secondary"
                          />
                        </div>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name">
                          {t.donationForm.personal.name}
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder={t.donationForm.personal.namePlaceholder}
                          className="mt-2 h-12 rounded-[1.15rem] border-2 border-slate-200 shadow-sm transition-all focus:border-secondary"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">
                          {t.donationForm.personal.phone}
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder={t.donationForm.personal.phonePlaceholder}
                          className="mt-2 h-12 rounded-[1.15rem] border-2 border-slate-200 shadow-sm transition-all focus:border-secondary"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-[1.25rem] bg-secondary py-6 text-base font-bold text-white shadow-xl shadow-secondary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary/90 hover:shadow-2xl hover:shadow-secondary/30"
                      size="lg"
                    >
                      <Heart className="mr-2 h-5 w-5 fill-white" />
                      {t.donationForm.submit}
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                      {t.donationForm.note}
                    </p>
                  </motion.form>
                </motion.div>
              </div>
            </CardContent>
          </Card>
          </motion.div>
        </div>
      </section>
      {/* Other Ways to Support */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 md:mb-12 text-center text-primary">
            {t.otherWays.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="rounded-[1.75rem] border-2 border-slate-200 text-center shadow-md shadow-slate-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl mb-3 text-primary">
                  {t.otherWays.volunteer.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.otherWays.volunteer.description}
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => onNavigate?.("contact")}
                >
                  {language === "en" ? "Share Your Information" : "Tuma Taarifa Zako"}
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-[1.75rem] border-2 border-slate-200 text-center shadow-md shadow-slate-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl mb-3 text-primary">
                  {t.otherWays.partner.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.otherWays.partner.description}
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => onNavigate?.("partners")}
                >
                  {language === "en" ? "Share Organization Info" : "Tuma Taarifa za Taasisi"}
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-[1.75rem] border-2 border-slate-200 text-center shadow-md shadow-slate-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl mb-3 text-primary">
                  {t.otherWays.fundraise.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.otherWays.fundraise.description}
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => onNavigate?.("contact")}
                >
                  {language === "en" ? "Tell Us Your Idea" : "Tuambie Wazo Lako"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Dialog open={thankYouOpen} onOpenChange={setThankYouOpen}>
        <DialogContent className="max-w-[calc(100%-1.5rem)] overflow-hidden rounded-[1.75rem] border-2 border-secondary/20 bg-white p-0 shadow-2xl shadow-secondary/20 sm:max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="p-5 text-center sm:p-7"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <Heart className="h-8 w-8 fill-secondary" />
            </div>
            <DialogHeader className="text-center">
              <DialogTitle className="text-2xl font-black text-primary">
                {t.donationForm.thanksTitle}
              </DialogTitle>
              <DialogDescription className="text-sm leading-relaxed text-gray-600">
                {t.donationForm.thanksMessage}
              </DialogDescription>
            </DialogHeader>
            <Button
              type="button"
              onClick={() => setThankYouOpen(false)}
              className="mt-6 w-full rounded-2xl bg-secondary py-5 font-bold text-white hover:bg-secondary/90"
            >
              {t.donationForm.thanksButton}
            </Button>
          </motion.div>
        </DialogContent>
      </Dialog>

    </div>
  );
}

