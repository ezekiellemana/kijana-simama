import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface ContactPageProps {
  language: "en" | "sw";
  onNavigate?: (page: string) => void;
}

export function ContactPage({ language, onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const translations = {
    en: {
      title: "Contact Us",
      subtitle: "Get in touch with our team",
      info: {
        title: "Contact Information",
        description: "Reach out to us through any of the following channels.",
        address: {
          title: "Office Address",
          line1: "Kijana Simama Headquarters",
          line2: "Dar es Salaam, Tanzania",
        },
        phone: {
          title: "Phone",
          number: "+255 700 000 000",
        },
        email: {
          title: "Email",
          address: "info@kijanasimama.org",
        },
        hours: {
          title: "Office Hours",
          weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
          weekend: "Saturday: 9:00 AM - 1:00 PM",
        },
      },
      form: {
        title: "Send Us a Message",
        name: "Full Name",
        namePlaceholder: "John Doe",
        email: "Email Address",
        emailPlaceholder: "john@example.com",
        phone: "Phone Number",
        phonePlaceholder: "+255 700 000 000",
        subject: "Subject",
        subjectPlaceholder: "How can we help you?",
        message: "Message",
        messagePlaceholder: "Tell us more about your inquiry...",
        submit: "Send Message",
        success: "Thank you! Your message has been sent successfully.",
      },
      social: {
        title: "Follow Us",
        description: "Stay connected with us on social media",
      },
    },
    sw: {
      title: "Wasiliana Nasi",
      subtitle: "Wasiliana na timu yetu",
      info: {
        title: "Maelezo ya Mawasiliano",
        description: "Wasiliana nasi kupitia njia yoyote ya zifuatazo.",
        address: {
          title: "Anwani ya Ofisi",
          line1: "Makao Makuu ya Kijana Simama",
          line2: "Dar es Salaam, Tanzania",
        },
        phone: {
          title: "Simu",
          number: "+255 700 000 000",
        },
        email: {
          title: "Barua Pepe",
          address: "info@kijanasimama.org",
        },
        hours: {
          title: "Masaa ya Ofisi",
          weekdays: "Jumatatu - Ijumaa: 8:00 Asubuhi - 5:00 Jioni",
          weekend: "Jumamosi: 9:00 Asubuhi - 1:00 Mchana",
        },
      },
      form: {
        title: "Tutumie Ujumbe",
        name: "Jina Kamili",
        namePlaceholder: "Juma Waweru",
        email: "Barua Pepe",
        emailPlaceholder: "juma@example.com",
        phone: "Nambari ya Simu",
        phonePlaceholder: "+255 700 000 000",
        subject: "Kichwa",
        subjectPlaceholder: "Tunaweza kukusaidia vipi?",
        message: "Ujumbe",
        messagePlaceholder: "Tuambie zaidi kuhusu swali lako...",
        submit: "Tuma Ujumbe",
        success: "Asante! Ujumbe wako umetumwa kwa mafanikio.",
      },
      social: {
        title: "Tufuate",
        description: "Endelea kuungana nasi kwenye mitandao ya kijamii",
      },
    },
  };

  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate("success-contact");
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">{t.title}</h1>
          <p className="text-xl md:text-2xl text-blue-100">{t.subtitle}</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-6 text-primary">{t.info.title}</h2>
              <p className="text-gray-600 mb-8">{t.info.description}</p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-primary">
                          {t.info.address.title}
                        </h3>
                        <p className="text-gray-600">{t.info.address.line1}</p>
                        <p className="text-gray-600">{t.info.address.line2}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-primary">
                          {t.info.phone.title}
                        </h3>
                        <p className="text-gray-600">{t.info.phone.number}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-primary">
                          {t.info.email.title}
                        </h3>
                        <p className="text-gray-600">{t.info.email.address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-primary">
                          {t.info.hours.title}
                        </h3>
                        <p className="text-gray-600">{t.info.hours.weekdays}</p>
                        <p className="text-gray-600">{t.info.hours.weekend}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl mb-6 text-primary">{t.form.title}</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">{t.form.name}</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder={t.form.namePlaceholder}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">{t.form.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t.form.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">{t.form.phone}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={t.form.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">{t.form.subject}</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder={t.form.subjectPlaceholder}
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">{t.form.message}</Label>
                      <Textarea
                        id="message"
                        placeholder={t.form.messagePlaceholder}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        rows={6}
                        className="mt-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary/90"
                      size="lg"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      {t.form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4 text-primary">{t.social.title}</h2>
          <p className="text-xl text-gray-600 mb-8">{t.social.description}</p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          <MapPin className="w-12 h-12 mr-3" />
          <span>Map Location - Dar es Salaam, Tanzania</span>
        </div>
      </section>
    </div>
  );
}
