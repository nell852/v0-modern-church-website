import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Church, Users, Wrench, BookOpen } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Rénovation de la toiture",
    description: "Travaux urgents de réfection de la toiture de l'église pour préserver notre patrimoine.",
    category: "Patrimoine",
    target: 25000,
    raised: 18500,
    icon: Church,
    color: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    title: "Accueil des jeunes",
    description: "Aménagement d'un espace dédié aux activités des jeunes et à la catéchèse.",
    category: "Jeunesse",
    target: 8000,
    raised: 3200,
    icon: Users,
    color: "bg-secondary/10 text-secondary",
  },
  {
    id: 3,
    title: "Équipement audiovisuel",
    description: "Installation d'un système de sonorisation moderne pour améliorer les célébrations.",
    category: "Équipement",
    target: 5000,
    raised: 4200,
    icon: Wrench,
    color: "bg-accent/10 text-accent",
  },
  {
    id: 4,
    title: "Bibliothèque paroissiale",
    description: "Constitution d'une bibliothèque spirituelle accessible à tous les paroissiens.",
    category: "Formation",
    target: 3000,
    raised: 1800,
    icon: BookOpen,
    color: "bg-muted/50 text-muted-foreground",
  },
]

export function DonationProjects() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Projets</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les projets que vous pouvez soutenir pour développer notre communauté paroissiale
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => {
            const Icon = project.icon
            const progressPercentage = (project.raised / project.target) * 100

            return (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-full ${project.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Collecté : {project.raised.toLocaleString()}€</span>
                      <span>Objectif : {project.target.toLocaleString()}€</span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                    <div className="text-center text-sm text-muted-foreground">
                      {Math.round(progressPercentage)}% de l'objectif atteint
                    </div>
                  </div>

                  <Button className="w-full bg-transparent" variant="outline">
                    Soutenir ce projet
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-primary/5">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Merci pour votre générosité</h3>
              <p className="text-muted-foreground">
                Chaque don, quelle que soit sa taille, contribue à faire vivre notre communauté et à porter notre
                mission d'accueil et de partage. Que Dieu vous bénisse pour votre soutien.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
