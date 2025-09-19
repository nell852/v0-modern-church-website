import { Badge } from "@/components/ui/badge"
import { Heart, HandHeart, Users } from "lucide-react"

export function DonationsHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Soutenir notre mission
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Votre Générosité au Service de la Foi</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Votre soutien nous permet de maintenir notre mission spirituelle, d'accueillir chacun avec bienveillance et
            de développer nos projets communautaires.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold">Mission spirituelle</h3>
              <p className="text-sm text-muted-foreground">
                Soutenir les célébrations, l'accompagnement pastoral et la formation
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
                <HandHeart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold">Solidarité</h3>
              <p className="text-sm text-muted-foreground">
                Aider les plus démunis et soutenir les familles en difficulté
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold">Communauté</h3>
              <p className="text-sm text-muted-foreground">
                Développer les activités paroissiales et l'accueil des jeunes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
