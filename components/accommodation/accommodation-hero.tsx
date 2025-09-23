import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Bed, Wifi, Car, Coffee, TreePine } from "lucide-react"

export function AccommodationHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Hébergement spirituel
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Séjours de Retraite et Ressourcement</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Découvrez nos espaces d'accueil chaleureux, conçus pour favoriser la méditation, la prière et le repos
              spirituel dans un cadre paisible et authentique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-sm text-muted-foreground">Personnes max</div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Bed className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">6</div>
                    <div className="text-sm text-muted-foreground">Chambres</div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Équipements inclus</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Wifi className="h-4 w-4 text-primary" />
                    <span className="text-sm">WiFi gratuit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-4 w-4 text-primary" />
                    <span className="text-sm">Parking privé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee className="h-4 w-4 text-primary" />
                    <span className="text-sm">Cuisine équipée</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="h-4 w-4 text-primary" />
                    <span className="text-sm">Jardin paisible</span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full md:w-auto">
                Réserver maintenant
              </Button>
            </div>

            <div className="relative">
              <img
                src="/eglise.jpg"
                alt="Chambre d'hébergement paisible"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
