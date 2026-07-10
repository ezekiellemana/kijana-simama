import { useState } from "react";
import {
  Heart,
  Building2,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface DonatePageProps {
  language: "en" | "sw";
  onNavigate?: (page: string) => void;
}

export function DonatePage({ language, onNavigate }: DonatePageProps) {
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");

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
    if (onNavigate) {
      onNavigate("success-donation");
    }
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
          <Card className="overflow-hidden border-secondary/15 shadow-2xl shadow-secondary/10">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="bg-linear-to-br from-primary via-blue-700 to-secondary p-6 text-white sm:p-8 lg:p-10">
                  <div className="mb-6 w-fit rounded-3xl bg-white p-4 shadow-xl">
                    <img
                      src="/nmb-bank-logo-png_seeklogo-526995.png"
                      alt="NMB Bank"
                      className="h-14 w-auto object-contain sm:h-16"
                    />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-green-100">
                    {t.donationForm.bankDetails.title}
                  </p>
                  <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                    {language === "en"
                      ? "Support Kijana Simama directly"
                      : "Changia Kijana Simama moja kwa moja"}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-blue-50">
                    {t.donationForm.bankDetails.description}
                  </p>
                </div>

                <div className="p-5 sm:p-7 lg:p-8">
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
                    ].map((detail) => (
                      <div
                        key={detail.label}
                        className="rounded-2xl border border-gray-100 bg-gray-50 p-4 shadow-sm"
                      >
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                          {detail.label}
                        </p>
                        <p className="mt-1 text-lg font-black text-gray-950">
                          {detail.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="mt-7 space-y-5 border-t border-gray-100 pt-6">
                    <div>
                      <Label className="mb-3 block text-sm font-bold text-gray-800">
                        {t.donationForm.amount.label}
                      </Label>
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {predefinedAmounts.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            disabled={!!customAmount}
                            onClick={() => {
                              if (selectedAmount === amount) {
                                setSelectedAmount("");
                              } else {
                                setSelectedAmount(amount);
                                setCustomAmount("");
                              }
                            }}
                            className={`rounded-2xl border px-3 py-3 text-sm font-bold transition-all duration-200 ${
                              selectedAmount === amount
                                ? "border-secondary bg-secondary text-white shadow-lg shadow-secondary/20"
                                : "border-gray-200 bg-white text-gray-700 hover:border-secondary/60 hover:text-secondary"
                            } ${customAmount ? "opacity-50" : ""}`}
                          >
                            {formatTZS(amount)}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="custom-amount">
                        {t.donationForm.amount.custom}
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
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
                          className="mt-2 h-12 rounded-2xl border-gray-200 pl-14"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name">
                          {t.donationForm.personal.name}
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder={t.donationForm.personal.namePlaceholder}
                          className="mt-2 h-12 rounded-2xl border-gray-200"
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
                          className="mt-2 h-12 rounded-2xl border-gray-200"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-2xl bg-secondary py-6 text-base font-bold text-white shadow-xl shadow-secondary/25 hover:bg-secondary/90"
                      size="lg"
                    >
                      <Heart className="mr-2 h-5 w-5 fill-white" />
                      {t.donationForm.submit}
                    </Button>

                    <p className="text-center text-sm text-gray-500">
                      {t.donationForm.note}
                    </p>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Other Ways to Support */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 md:mb-12 text-center text-primary">
            {t.otherWays.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
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

            <Card className="text-center hover:shadow-lg transition-shadow">
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

            <Card className="text-center hover:shadow-lg transition-shadow">
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

    </div>
  );
}

