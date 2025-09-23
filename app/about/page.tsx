import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Lightbulb, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              À propos de notre
              <span className="text-primary block">Paroisse</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
              Découvrez l'histoire, la mission et les valeurs qui animent notre communauté depuis plus d'un siècle
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">Notre Histoire</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Plus d'un siècle de foi et de service</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Fondée en 1892, la Paroisse Saint-Esprit a traversé les époques en gardant intact son engagement au service de la communauté. 
                  Née de la volonté de quelques familles pieuses du quartier, notre église a grandi avec la ville, accueillant des générations de fidèles.
                </p>
                <p>
                  Au fil des décennies, nous avons su nous adapter aux besoins de notre temps tout en préservant la richesse de la tradition catholique. 
                  Notre église, reconstruite en 1954 après les dommages de la guerre, témoigne de la résilience et de la foi de notre communauté.
                </p>
                <p>
                  Aujourd'hui, nous continuons cette mission d'accueil et d'accompagnement spirituel, enrichie par notre maison d'hôtes qui permet d'offrir un lieu de retraite et de ressourcement à tous ceux qui le souhaitent.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/eglise.jpg"
                alt="Façade historique de l'église Saint-Esprit"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Mission & Nos Valeurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre action pastorale et notre vie communautaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Foi</h3>
                  <p className="text-muted-foreground">
                    Cultiver et partager la foi chrétienne dans un esprit d'ouverture et de dialogue, en accompagnant chacun dans son cheminement spirituel personnel.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Solidarité</h3>
                  <p className="text-muted-foreground">
                    Créer des liens fraternels au sein de notre communauté et avec les plus démunis, en mettant l'amour du prochain au cœur de notre action.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Charité</h3>
                  <p className="text-muted-foreground">
                    Pratiquer la charité chrétienne par l'accueil, l'écoute et le service, en particulier auprès des personnes en difficulté ou en quête de sens.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section with captions */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Galerie Photos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre église, nos espaces et la beauté de notre patrimoine architectural
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/facette principale de l'eglise.jpg", alt: "Facette principale de l'église" },
              { src: "/facette de droite de l'eglise.jpg", alt: "Facette de droite de l'église" },
              { src: "/cour de la paroisse.jpg", alt: "Cour de la paroisse" },
              { src: "/devanture de la paroisse.jpg", alt: "Devanture de la paroisse" },
              { src: "/vue de cote de la facette principale.jpg", alt: "Vue de côté de la façade principale" },
              { src: "/porte principale de la paroisse.jpg", alt: "Porte principale de la paroisse" },
              { src: "/interieur  global de la paroisse.jpg", alt: "Intérieur global de la paroisse" },
              { src: "/santuaire vierge Marie.jpg", alt: "Sanctuaire Vierge Marie" },
              { src: "/porte d'entrée de droite de la paroisse.jpg", alt: "Porte d'entrée de droite de la paroisse" },
              { src: "/jardin paroissial.jpg", alt: "Jardin paroissial" },
              { src: "/Arrière de la paroisse.jpg", alt: "Arrière de la paroisse" },
              { src: "/lieu d'assise.jpg", alt: "Lieu d'Assise" },
            ].map((img, i) => (
              <figure key={i} className="aspect-square overflow-hidden rounded-lg text-center">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <figcaption className="mt-2 text-sm text-muted-foreground font-medium">
                  {img.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">Nous Trouver</Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Au cœur de la ville</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Notre paroisse est idéalement située au centre-ville, facilement accessible en transports en commun
                  et disposant d'un parking pour les visiteurs. L'église se trouve dans un quartier paisible, entourée
                  d'un jardin qui invite à la méditation.
                </p>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Adresse complète :</div>
                    <div>123 Rue de la Paix</div>
                    <div>75001 Paris, France</div>
                  </div>
                </div>
                <p>
                  <strong>Transports :</strong> Métro ligne 1 et 4 (station Châtelet), Bus 21, 27, 38, 85
                  <br />
                  <strong>Parking :</strong> Places disponibles rue de Rivoli et parking souterrain Forum des Halles
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[400px] bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="h-12 w-12 text-primary mx-auto" />
                  <p className="text-muted-foreground">Carte interactive Google Maps</p>
                  <p className="text-sm text-muted-foreground">123 Rue de la Paix, 75001 Paris</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
