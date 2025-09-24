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
                   La Paroisse  Maison Nazareth de Mvolyé est située dans le quartier historique de Mvolyé à Yaoundé, au Cameroun.
                     Elle a été un pilier de la communauté catholique locale, offrant un lieu de culte, d'accueil et de soutien spirituel à des générations de fidèles.
                </p>
                <p>
                  Au fil des décennies, nous avons su nous adapter aux besoins de notre temps tout en préservant la richesse de la tradition catholique. 
                  Nos activités pastorales, nos œuvres caritatives et notre vie communautaire témoignent de cette dynamique vivante.
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

      {/* Gallery Section */}
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

      {/* Location Section with Google Map */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nous trouver</h2>
            <p className="text-lg text-muted-foreground">
              Notre paroisse est idéalement située au centre-ville, facilement accessible
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.743247950272!2d11.51878607543169!3d3.849408996873465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x109d120e4c1d3f2d%3A0x8b8e3c3f7b0e34e7!2sQuartier%20Mvoly%C3%A9%2C%20Yaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1695400000000!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de la Paroisse à Mvolyé, Yaoundé"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2">En transport public</h3>
                <p className="text-sm text-muted-foreground">
                  Bus et taxi disponibles dans tout Yaoundé
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">En voiture</h3>
                <p className="text-sm text-muted-foreground">
                  Parking disponible à proximité
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">À pied</h3>
                <p className="text-sm text-muted-foreground">
                  Situé au cœur du quartier Mvolyé, facile à trouver
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
