import React, { useState } from "react";
import {
  Heart,
  CreditCard,
  Smartphone,
  Building2,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface DonatePageProps {
  language: "en" | "sw";
  onNavigate?: (page: string) => void;
}

export function DonatePage({ language, onNavigate }: DonatePageProps) {
  const [selectedAmount, setSelectedAmount] = useState<string>("50");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationType, setDonationType] = useState<string>("one-time");
  const [paymentMethod, setPaymentMethod] = useState<string>("card");

  const translations = {
    en: {
      title: "Support Our Mission",
      subtitle: "Your donation helps empower youth and transform communities",
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
        personal: {
          title: "Your Information",
          name: "Full Name",
          namePlaceholder: "John Doe",
          email: "Email Address",
          emailPlaceholder: "john@example.com",
          phone: "Phone Number",
          phonePlaceholder: "+255 700 000 000",
        },
        submit: "Complete Donation",
        note: "Note: This is a demo form. No actual payment will be processed.",
      },
      otherWays: {
        title: "Other Ways to Support",
        volunteer: {
          title: "Volunteer",
          description: "Give your time and skills to support our programs.",
        },
        partner: {
          title: "Corporate Partnership",
          description: "Partner with us for greater community impact.",
        },
        fundraise: {
          title: "Organize Fundraiser",
          description: "Start your own fundraising campaign for our cause.",
        },
      },
      donors: {
        title: "Thank You to Our Donors",
        description:
          "We are grateful for the generous support from individuals and organizations who believe in our mission.",
      },
    },
    sw: {
      title: "Unga Mkono Dhamira Yetu",
      subtitle:
        "Mchango wako unasaidia kuwapa nguvu vijana na kubadilisha jamii",
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
        personal: {
          title: "Maelezo Yako",
          name: "Jina Kamili",
          namePlaceholder: "Juma Waweru",
          email: "Barua Pepe",
          emailPlaceholder: "juma@example.com",
          phone: "Nambari ya Simu",
          phonePlaceholder: "+255 700 000 000",
        },
        submit: "Kamilisha Mchango",
        note: "Kumbuka: Hii ni fomu ya mfano. Hakuna malipo halisi yatakayofanywa.",
      },
      otherWays: {
        title: "Njia Nyingine za Kusaidia",
        volunteer: {
          title: "Kujitolea",
          description: "Toa muda na ujuzi wako kusaidia programu zetu.",
        },
        partner: {
          title: "Ushirikiano wa Kampuni",
          description: "Shirikiana nasi kwa athari kubwa ya jamii.",
        },
        fundraise: {
          title: "Andaa Kampeni ya Kukusanya Fedha",
          description: "Anza kampeni yako ya kukusanya fedha kwa sababu yetu.",
        },
      },
      donors: {
        title: "Asante kwa Wafadhili Wetu",
        description:
          "Tunashukuru msaada mkarimu kutoka kwa watu binafsi na mashirika yanayoamini katika dhamira yetu.",
      },
    },
  };

  const t = translations[language];

  const predefinedAmounts = ["25", "50", "100", "250"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("success-donation");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-secondary to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-12 h-12" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-4 text-center">{t.title}</h1>
          <p className="text-xl md:text-2xl text-green-100 text-center">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-4 text-center text-primary">
            {t.impact.title}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {t.impact.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.impact.items.map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="text-3xl mb-3 text-secondary">
                    {item.amount}
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl mb-8 text-primary text-center">
                {t.donationForm.title}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Donation Type */}
                <div>
                  <Label className="mb-3 block">
                    {t.donationForm.type.label}
                  </Label>
                  <RadioGroup
                    value={donationType}
                    onValueChange={setDonationType}
                  >
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2 flex-1">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time" className="cursor-pointer">
                          {t.donationForm.type.oneTime}
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 flex-1">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly" className="cursor-pointer">
                          {t.donationForm.type.monthly}
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Amount Selection */}
                <div>
                  <Label className="mb-3 block">
                    {t.donationForm.amount.label}
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant={
                          selectedAmount === amount ? "default" : "outline"
                        }
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={
                          selectedAmount === amount
                            ? "bg-secondary hover:bg-secondary/90"
                            : ""
                        }
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  <div>
                    <Label htmlFor="custom-amount">
                      {t.donationForm.amount.custom}
                    </Label>
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder={t.donationForm.amount.placeholder}
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount("");
                      }}
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <Label className="mb-3 block">
                    {t.donationForm.payment.label}
                  </Label>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="card" id="card" />
                        <Label
                          htmlFor="card"
                          className="cursor-pointer flex items-center gap-2 flex-1"
                        >
                          <CreditCard className="w-5 h-5 text-secondary" />
                          {t.donationForm.payment.card}
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="mpesa" id="mpesa" />
                        <Label
                          htmlFor="mpesa"
                          className="cursor-pointer flex items-center gap-2 flex-1"
                        >
                          <Smartphone className="w-5 h-5 text-secondary" />
                          {t.donationForm.payment.mpesa}
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label
                          htmlFor="bank"
                          className="cursor-pointer flex items-center gap-2 flex-1"
                        >
                          <Building2 className="w-5 h-5 text-secondary" />
                          {t.donationForm.payment.bank}
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Personal Information */}
                <div className="pt-6 border-t">
                  <h3 className="text-xl mb-4 text-primary">
                    {t.donationForm.personal.title}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">
                        {t.donationForm.personal.name}
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder={t.donationForm.personal.namePlaceholder}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">
                        {t.donationForm.personal.email}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t.donationForm.personal.emailPlaceholder}
                        required
                        className="mt-2"
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
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90"
                  size="lg"
                >
                  <Heart className="mr-2 w-5 h-5" />
                  {t.donationForm.submit}
                </Button>

                <p className="text-sm text-center text-gray-500">
                  {t.donationForm.note}
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-primary">
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
                >
                  Learn More
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
                >
                  Learn More
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
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">{t.donors.title}</h2>
          <p className="text-xl text-blue-100">{t.donors.description}</p>
        </div>
      </section>
    </div>
  );
}
