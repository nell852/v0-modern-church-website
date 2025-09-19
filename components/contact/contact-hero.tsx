import { Badge } from "@/components/ui/badge"

export function ContactHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container px-4 text-center">
        <Badge variant="secondary" className="mb-4">
          Nous contacter
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Restons en Contact</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          Notre équipe pastorale est à votre écoute pour répondre à vos questions, vous accompagner dans votre
          cheminement spirituel ou vous renseigner sur nos activités.
        </p>
      </div>
    </section>
  )
}
