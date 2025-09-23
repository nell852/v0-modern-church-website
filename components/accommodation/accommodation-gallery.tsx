"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/advent-wreath-with-candles-in-church.jpg",
    alt: "Chambre individuelle paisible",
    title: "Chambre individuelle",
  },
  {
    src: "/log3.png",
    alt: "Salle commune ",
    title: "Salle commune",
  },
  {
    src: "/log1.png",
    alt: "Cuisine équipée moderne",
    title: "Cuisine équipée",
  },
  {
    src: "/jardin paroissial.jpg",
    alt: "Jardin paisible pour méditation",
    title: "Jardin de méditation",
  },
  {
    src: "/accommodation-chapel-small-intimate.jpg",
    alt: "Petite chapelle intime",
    title: "Chapelle privée",
  },
  {
    src: "/accommodation-dining-room-communal.jpg",
    alt: "Salle à manger communautaire",
    title: "Salle à manger",
  },
]

export function AccommodationGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galerie Photos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos espaces d'accueil conçus pour favoriser le recueillement et la sérénité
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Image Display */}
          <div className="relative mb-8">
            <Card className="overflow-hidden">
              <div className="relative aspect-[16/9] md:aspect-[21/9]">
                <img
                  src={galleryImages[currentIndex].src || "/eglise.jpg"}
                  alt={galleryImages[currentIndex].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{galleryImages[currentIndex].title}</h3>
                  <p className="text-sm opacity-90">{galleryImages[currentIndex].alt}</p>
                </div>

                {/* Navigation Arrows */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className={`overflow-hidden cursor-pointer transition-all hover:shadow-lg ${
                  index === currentIndex ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="aspect-square relative">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                  {index === currentIndex && <div className="absolute inset-0 bg-primary/20" />}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
