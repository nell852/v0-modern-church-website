import { Badge } from "@/components/ui/badge"

export function EventsHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container px-4 text-center">
        <Badge variant="secondary" className="mb-4">
          Agenda paroissial
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Événements & Célébrations</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          Découvrez tous les événements de notre paroisse : messes, conférences, concerts, retraites et moments de
          partage communautaire.
        </p>
      </div>
    </section>
  )
}
