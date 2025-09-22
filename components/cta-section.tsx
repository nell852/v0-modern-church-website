import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Home, Gift } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment pouvons-nous vous accompagner ?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les différentes façons de participer à la vie de notre communauté
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Services paroissiaux</h3>
                <p className="text-muted-foreground">
                  Decouvrez nos services religieux 
                  et comment nous pouvons vous aider dans votre chemin de foi
                </p>
              </div>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="/services#intentions">Decouvrez nos services</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/20">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Home className="h-8 w-8 text-secondary" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Réserver un Logement</h3>
                <p className="text-muted-foreground">
                  Séjournez dans notre maison d'hôtes pour une retraite spirituelle ou un pèlerinage
                </p>
              </div>
              <Button asChild className="w-full bg-secondary hover:bg-secondary/90">
                <Link href="/accommodation">Voir les hébergements</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Gift className="h-8 w-8 text-accent" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Faire un Don</h3>
                <p className="text-muted-foreground">
                  Soutenez notre mission et nos projets pastoraux par votre générosité
                </p>
              </div>
              <Button asChild className="w-full bg-accent hover:bg-accent/90">
                <Link href="/donations">Faire un don</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
