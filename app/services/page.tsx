"use client"


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Heart, Users, Baby, Minus as Rings, Cross, BookOpen, Calendar, PhoneCall, Mail } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Messes et Célébrations",
    description: "Participez à nos célébrations eucharistiques tout au long de la semaine",
    details: [
      "Messes dominicales : 8h30, 10h30, 18h00",
      "Messes en semaine : 18h30 (lundi au samedi)",
      "Messes de fêtes et solennités",
      "Célébrations spéciales (Avent, Carême, Pâques)",
    ],
    color: "primary",
  },
  {
    icon: Cross,
    title: "Confessions",
    description: "Recevez le sacrement de réconciliation dans un cadre bienveillant",
    details: [
      "Samedi : 17h00 - 18h00",
      "Dimanche : 8h00 - 8h25 et 17h30 - 17h55",
      "Sur rendez-vous en semaine",
      "Préparation aux grandes fêtes",
    ],
    color: "secondary",
  },
  {
    icon: Baby,
    title: "Baptêmes",
    description: "Accueillez votre enfant dans la communauté chrétienne",
    details: [
      "Préparation obligatoire pour les parents",
      "Rencontres de préparation mensuelles",
      "Célébrations le dimanche après-midi",
      "Accompagnement personnalisé",
    ],
    color: "accent",
  },
  {
    icon: Rings,
    title: "Mariages",
    description: "Célébrez votre union dans la foi et l'amour",
    details: [
      "Préparation au mariage (6 mois minimum)",
      "Rencontres avec un prêtre",
      "Sessions de préparation en couple",
      "Célébration personnalisée",
    ],
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Catéchisme",
    description: "Formation religieuse pour enfants et adultes",
    details: [
      "Éveil à la foi (3-6 ans)",
      "Catéchisme enfants (7-11 ans)",
      "Aumônerie jeunes (12-18 ans)",
      "Catéchuménat adultes",
    ],
    color: "secondary",
  },
  {
    icon: Users,
    title: "Groupes de Prière",
    description: "Rejoignez nos communautés de prière et de partage",
    details: [
      "Groupe de prière du jeudi soir",
      "Lectio Divina le mardi matin",
      "Rosaire quotidien à 17h45",
      "Adoration eucharistique le vendredi",
    ],
    color: "accent",
  },
]

export default function ServicesPage() {
  const whatsappNumber = "237694424444"
  const whatsappMessage = "Bonjour, je voudrais prendre rendez-vous pour un service paroissial."

  //const emailAddress = "mvelenyogogsilvannel@gmail.com"
  //const emailSubject = "Demande de rendez-vous"
  //const emailBody = "Bonjour, je souhaite prendre un rendez-vous."

  return (
    <div className="min-h-screen">
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Nos
                <span className="text-primary block">Services Religieux</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
                Découvrez tous les services spirituels et sacrements que nous proposons pour vous accompagner dans votre
                foi
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 h-full">
                    <CardHeader className="space-y-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center bg-${service.color}/10 group-hover:bg-${service.color}/20 transition-colors`}
                      >
                        <Icon className={`h-6 w-6 text-${service.color}`} />
                      </div>
                      <div className="space-y-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex gap-4 mt-4">
                        <Button
                          size="lg"
                          className="bg-green-500 hover:bg-green-600 text-white flex-1 flex items-center justify-center"
                          onClick={() =>
                            window.open(
                              `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
                              "_blank"
                            )
                          }
                        >
                          <PhoneCall className="h-4 w-4 mr-2" />
                          WhatsApp
                        </Button>

                        
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Mass Schedule */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Horaires des Messes</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Planning détaillé de nos célébrations eucharistiques
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Planning hebdomadaire
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {[
                      { day: "Dimanche", times: ["8h30", "10h30", "18h00"], special: "Messe principale à 10h30 avec chorale" },
                      { day: "Lundi", times: ["18h30"] },
                      { day: "Mardi", times: ["18h30"] },
                      { day: "Mercredi", times: ["18h30"] },
                      { day: "Jeudi", times: ["18h30"] },
                      { day: "Vendredi", times: ["18h30"] },
                      { day: "Samedi", times: ["18h30"], special: "Messe du samedi soir" },
                    ].map((schedule) => (
                      <div
                        key={schedule.day}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="font-semibold text-lg min-w-[100px]">{schedule.day}</div>
                          <div className="flex gap-2 flex-wrap">
                            {schedule.times.map((time) => (
                              <Badge key={time} variant="secondary" className="bg-primary/10 text-primary">
                                {time}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {schedule.special && (
                          <div className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right">
                            {schedule.special}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  )
}
