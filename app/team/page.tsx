
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Heart } from "lucide-react"
import { createClient } from "@/lib/supabase/server"

async function getTeamMembers() {
  const supabase = await createClient()
  const { data: teamMembers, error } = await supabase
    .from("team_members")
    .select("*")
    .eq("active", true)
    .order("order_index", { ascending: true })

  if (error) {
    console.error("Error fetching team members:", error)
    return []
  }

  return teamMembers || []
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()

  return (
    <div className="min-h-screen">
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Notre
                <span className="text-primary block">Équipe Pastorale</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
                Rencontrez les prêtres et responsables qui accompagnent notre communauté dans la foi et la prière
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.photo || "/placeholder.svg?height=400&width=400&query=priest portrait"}
                      alt={`Portrait de ${member.name}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{member.name}</h3>
                      <Badge variant="secondary" className="text-sm">
                        {member.title}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                    <div className="flex flex-col space-y-2 pt-4 border-t">
                      {member.email && (
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Mail className="h-4 w-4 text-primary" />
                          <span>{member.email}</span>
                        </div>
                      )}
                      {member.phone && (
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4 text-primary" />
                          <span>{member.phone}</span>
                        </div>
                      )}
                    </div>
                    {member.email && (
                      <Button variant="outline" className="w-full mt-4 bg-transparent">
                        <Mail className="h-4 w-4 mr-2" />
                        Contacter
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {teamMembers.length === 0 && (
              <div className="text-center py-12">
                <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Équipe en cours de mise à jour</h3>
                <p className="text-muted-foreground">
                  Les informations sur notre équipe pastorale seront bientôt disponibles.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Besoin d'un accompagnement spirituel ?</h2>
              <p className="text-lg text-muted-foreground">
                Notre équipe pastorale est à votre disposition pour vous accompagner dans votre cheminement de foi.
                N'hésitez pas à nous contacter pour un entretien, une confession ou simplement pour échanger.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
  {/* WhatsApp */}
  <a
    href="https://wa.me/237694424444"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button size="lg" className="bg-primary hover:bg-primary/90">
      <Phone className="h-4 w-4 mr-2" />
      Prendre rendez-vous
    </Button>
  </a>

  {/* Gmail */}
  
</div>


            </div>
          </div>
        </section>
      </main>
      
    </div>
  )
}
