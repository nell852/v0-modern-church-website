import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, MapPin } from "lucide-react"

const accommodationTypes = [
  {
    name: "Chambre individuelle",
    price: "35000 FCFA",
    period: "par nuit",
    capacity: "1 personne",
    description: "Chambre simple avec lavabo, idéale pour la retraite personnelle",
    features: ["Lit simple", "Lavabo", "Bureau", "Armoire"],
  },
  {
    name: "Chambre double",
    price: "55 000 FCFA",
    period: "par nuit",
    capacity: "2 personnes",
    description: "Chambre confortable pour couples ou amis en retraite",
    features: ["Lit double", "Salle de bain privée", "Bureau", "Coin détente"],
  },
  {
    name: "Groupe (6-12 pers.)",
    price: "28000 FCFA",
    period: "par nuit",
    capacity: "6-12 personnes",
    description: "Hébergement complet pour groupes en retraite spirituelle",
    features: ["6 chambres", "Cuisine équipée", "Salle commune", "Jardin privé"],
  },
]

export function AccommodationInfo() {
  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Hébergements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez la formule qui correspond le mieux à vos besoins de retraite spirituelle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {accommodationTypes.map((type, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{type.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Users className="h-4 w-4" />
                      {type.capacity}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{type.price}</div>
                    <div className="text-sm text-muted-foreground">{type.period}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Équipements inclus :</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Horaires d'accueil
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Arrivée :</span>
                      <span className="font-medium">15h00 - 19h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Départ :</span>
                      <span className="font-medium">Avant 11h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Accueil tardif :</span>
                      <span className="font-medium">Sur demande</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Informations pratiques
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Petit-déjeuner :</span>
                      <span className="font-medium">+8 000 FCFA/personne</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Repas complet :</span>
                      <span className="font-medium">+15 000 FCFA/personne</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Annulation :</span>
                      <span className="font-medium">48h avant</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
