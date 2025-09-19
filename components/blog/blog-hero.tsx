import { Badge } from "@/components/ui/badge"

export function BlogHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container px-4 text-center">
        <Badge variant="secondary" className="mb-4">
          Actualités paroissiales
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Actualités & Réflexions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          Découvrez les dernières nouvelles de notre paroisse, nos réflexions spirituelles et les témoignages de notre
          communauté de foi.
        </p>
      </div>
    </section>
  )
}
