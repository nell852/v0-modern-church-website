import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Calendar, Home, Phone } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/beautiful-church-interior-with-warm-golden-light-s.jpg"
          alt="Intérieur de l'église avec lumière dorée"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Bienvenue dans notre Paroisse
              <span className="text-primary block">Maison NAZARETH</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto px-4 sm:px-0">
              Un lieu d'accueil, de prière et de partage au cœur de votre cheminement spirituel
        
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto px-4 sm:px-0">
            
              Silence - Prière - Formation - Repos - Retraite
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
            >
              <Link href="/about">Découvrir l'église</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 bg-transparent w-full sm:w-auto"
            >
              <Link href="/services">Nos services</Link>
            </Button>
          </div>

          {/* Quick Access Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0">
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <Link href="/services">
                <CardContent className="p-4 sm:p-6 text-center space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base">Services religieux</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Messes, confessions, sacrements</p>
                </CardContent>
              </Link>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <Link href="/team">
                <CardContent className="p-4 sm:p-6 text-center space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base">Équipe</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Équipe paroissiale</p>
                </CardContent>
              </Link>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <Link href="/accommodation">
                <CardContent className="p-4 sm:p-6 text-center space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Home className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base">Hébergement</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Retraites et séjours spirituels</p>
                </CardContent>
              </Link>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <Link href="/contact">
                <CardContent className="p-4 sm:p-6 text-center space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base">Contact</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Nous joindre et nous trouver</p>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
