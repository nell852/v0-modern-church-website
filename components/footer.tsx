import Link from "next/link"
import { Cross, MapPin, Phone, Mail, Clock, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/newsletter-signup"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Church Info */}
<div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
  <div className="flex items-center space-x-3">
    {/* Logo personnalisé */}
    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center">
      <img
        src="/logo.png"
        alt="Logo Maison Nazareth"
        className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
      />
    </div>
    <div className="flex flex-col">
      <span className="text-base sm:text-lg font-semibold">MAISON NAZARETH</span>
      <span className="text-xs text-muted-foreground">Accueil & Spiritualité</span>
    </div>
  </div>
  <p className="text-sm text-muted-foreground leading-relaxed">
    Une communauté catholique accueillante au service de votre cheminement spirituel.
    
  </p>
<p className="text-sm text-muted-foreground leading-relaxed">
    
    Silence - Prière - Formation - Repos - Retraite
  </p>

</div>


          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                À propos
              </Link>
              <Link href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Notre équipe
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Services religieux
              </Link>
              <Link
                href="/accommodation"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Hébergement
              </Link>
              <Link href="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Agenda
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Actualités
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>MVOLYE</div>
    
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">698849425</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground break-all sm:break-normal">
                  nyogognell@gmail.com
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>Secrétariat ouvert :</div>
                  <div>Lun-Ven : 9h-12h, 14h-17h</div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild className="h-8 w-8 sm:h-9 sm:w-9">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground px-4 sm:px-0">
            © 2025 MAISON NAZARETH. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
