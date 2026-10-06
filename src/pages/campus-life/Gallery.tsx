import { useState, useEffect, useCallback } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import infra1 from "@/assets/infra1.jpg";
import infra2 from "@/assets/infra2.jpg";
import infra3 from "@/assets/infra3.jpg";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";
import sports1 from "@/assets/sports1.jpg";
import sportsGallery2 from "@/assets/sports-gallery-2.jpg";
import sports3 from "@/assets/sports3.jpg";
import lab1 from "@/assets/lab1.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import academicsLab from "@/assets/academics-lab.jpg";

const categories = ["All", "Events", "Infrastructure", "Sports", "Labs"] as const;

const images = [
  { src: infra1, title: "School Building", category: "Infrastructure" },
  { src: event1, title: "Annual Day", category: "Events" },
  { src: sports1, title: "Sports Meet", category: "Sports" },
  { src: lab1, title: "Science Lab", category: "Labs" },
  { src: event2, title: "Cultural Fest", category: "Events" },
  { src: infra2, title: "Campus View", category: "Infrastructure" },
  { src: sportsGallery2, title: "Athletic Event", category: "Sports" },
  { src: event3, title: "Celebration", category: "Events" },
  { src: infra3, title: "Facilities", category: "Infrastructure" },
  { src: sports3, title: "Sports Day", category: "Sports" },
  { src: scienceLab, title: "Chemistry Lab", category: "Labs" },
  { src: academicsLab, title: "Academic Lab", category: "Labs" },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered = images.filter(
    (img) => activeFilter === "All" || img.category === activeFilter
  );

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + filtered.length) % filtered.length);
  }, [selectedIndex, filtered.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % filtered.length);
  }, [selectedIndex, filtered.length]);

  const handleClose = useCallback(() => setSelectedIndex(null), []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  // Reset selected index when filter changes
  useEffect(() => {
    setSelectedIndex(null);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-heading font-bold mb-4 flex items-center gap-3">
            <Camera className="w-10 h-10" />
            Photo Gallery
          </h1>
          <p className="text-xl max-w-2xl">
            Glimpses of our vibrant school life, events, achievements, and memorable moments.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeFilter === cat ? "default" : "outline"}
                onClick={() => setActiveFilter(cat)}
                className="min-w-[100px]"
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {filtered.map((img, i) => (
              <div
                key={`${img.title}-${i}`}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
                onClick={() => setSelectedIndex(i)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={handleClose}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-50 p-2"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-50"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-50"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image */}
          <img
            src={filtered[selectedIndex].src}
            alt={filtered[selectedIndex].title}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
