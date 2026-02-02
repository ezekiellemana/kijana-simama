import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "../assets/heroImage.jpg";
import aboutImage from "../assets/about.jpg";
import educationImage from "../assets/educationImage.jpg";
import mentorChildImage from "../assets/mentorChildImage.jpg";
import familyImage from "../assets/familyImage.jpg";
import studentsImage from "../assets/studentsImage.jpg";
import { useState } from "react";

interface GalleryPageProps {
  language: "en" | "sw";
}

export function GalleryPage({ language }: GalleryPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "events" | "campaigns" | "education" | "community"
  >("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const translations = {
    en: {
      title: "Gallery",
      subtitle: "Moments that capture our journey and impact",
      categories: {
        all: "All Photos",
        events: "Events",
        campaigns: "Campaigns",
        education: "Education",
        community: "Community",
      },
      gallery: [
        {
          id: 1,
          src: heroImage,
          alt: "Youth Empowerment",
          category: "campaigns",
        },
        {
          id: 2,
          src: educationImage,
          alt: "Education Program",
          category: "education",
        },
        {
          id: 3,
          src: aboutImage,
          alt: "Community Service",
          category: "community",
        },
        {
          id: 4,
          src: mentorChildImage,
          alt: "Mentorship Program",
          category: "campaigns",
        },
        {
          id: 5,
          src: familyImage,
          alt: "Family Support",
          category: "community",
        },
        {
          id: 6,
          src: studentsImage,
          alt: "Students Learning",
          category: "education",
        },
        {
          id: 7,
          src: "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRyYWluaW5nfGVufDF8fHx8MTc2NDE4NjA5OHww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Workshop Training",
          category: "events",
        },
        {
          id: 8,
          src: "https://images.unsplash.com/photo-1758599668338-4c55a3bd0ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBhY3Rpdml0eXxlbnwxfHx8fDE3NjQyNTkxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Volunteer Activity",
          category: "community",
        },
        {
          id: 9,
          src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwZXZlbnR8ZW58MXx8fHwxNzY0MTUyODExfDA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Conference Event",
          category: "events",
        },
      ],
    },
    sw: {
      title: "Picha",
      subtitle: "Nyakati zinazobana safari yetu na athari",
      categories: {
        all: "Picha Zote",
        events: "Matukio",
        campaigns: "Kampeni",
        education: "Elimu",
        community: "Jamii",
      },
      gallery: [
        {
          id: 1,
          src: heroImage,
          alt: "Uwezeshaji wa Vijana",
          category: "campaigns",
        },
        {
          id: 2,
          src: educationImage,
          alt: "Programu ya Elimu",
          category: "education",
        },
        {
          id: 3,
          src: aboutImage,
          alt: "Huduma ya Jamii",
          category: "community",
        },
        {
          id: 4,
          src: mentorChildImage,
          alt: "Programu ya Ushauri",
          category: "campaigns",
        },
        {
          id: 5,
          src: familyImage,
          alt: "Msaada wa Familia",
          category: "community",
        },
        {
          id: 6,
          src: studentsImage,
          alt: "Wanafunzi Wanajifunza",
          category: "education",
        },
        {
          id: 7,
          src: "https://images.unsplash.com/photo-1762158007836-25d13ab34c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRyYWluaW5nfGVufDF8fHx8MTc2NDE4NjA5OHww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Mafunzo ya Warsha",
          category: "events",
        },
        {
          id: 8,
          src: "https://images.unsplash.com/photo-1758599668338-4c55a3bd0ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBhY3Rpdml0eXxlbnwxfHx8fDE3NjQyNTkxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Shughuli za Kujitolea",
          category: "community",
        },
        {
          id: 9,
          src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwZXZlbnR8ZW58MXx8fHwxNzY0MTUyODExfDA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Tukio la Mkutano",
          category: "events",
        },
      ],
    },
  };

  const t = translations[language];

  const filteredImages =
    selectedCategory === "all"
      ? t.gallery
      : t.gallery.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary to-blue-600 text-white py-20 overflow-hidden">
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

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {Object.entries(t.categories).map(([key, label]) => (
              <Button
                key={key}
                variant={selectedCategory === key ? "default" : "outline"}
                onClick={() =>
                  setSelectedCategory(
                    key as
                      | "campaigns"
                      | "events"
                      | "all"
                      | "education"
                      | "community",
                  )
                }
                className={`transform hover:scale-105 transition-transform duration-200 ${
                  selectedCategory === key
                    ? "bg-primary hover:bg-primary/90"
                    : ""
                }`}
              >
                {label}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <Card
                  className="overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 group"
                  onClick={() => setLightboxImage(image.src)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="text-white px-4 py-2 bg-black/50 rounded-lg"
                      >
                        {image.alt}
                      </motion.span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={lightboxImage}
              alt="Gallery"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
