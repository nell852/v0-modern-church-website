import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Users } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "MVOLYE, YAOUNDE, Cameroun",
    color: "text-primary",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "+237 694424444",
    color: "text-secondary",
  },
/*  {
    icon: Mail,
    title: "Email",
    content: "mvelenyogogsilvannel@gmail.com",
    color: "text-accent",
  },*/
]

const schedules = [
  { day: "Lundi - Vendredi", hours: "9h00 - 12h00 / 14h00 - 18h00" },
  { day: "Samedi", hours: "9h00 - 12h00 / 16h00 - 19h00" },
  { day: "Dimanche", hours: "8h00 - 12h00 / 17h00 - 19h00" },
]

const team = [
  {
    name: "Abbé Hervé Djamga  ",
    role: "Curé de la paroisse",
    //email: "pere.michel@paroisse-saint-esprit.fr",
    phone: "+237 694424444",
  },
  /*{
    name: "Sœur Marie-Claire",
    role: "Responsable pastorale",
    email: "sr.marie-claire@paroisse-saint-esprit.fr",
    phone: "+33 1 23 45 67 90",
  },
  {
    name: "Jean-Pierre Martin",
    role: "Secrétaire paroissial",
    email: "secretariat@paroisse-saint-esprit.fr",
    phone: "+33 1 23 45 67 91",
  },*/
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle>Informations de contact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div key={index} className="flex items-start gap-3">
                <div className={`p-2 rounded-full bg-muted ${info.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{info.title}</h4>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{info.content}</p>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Opening Hours */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Horaires d'accueil
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {schedules.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="font-medium text-sm">{schedule.day}</span>
              <span className="text-sm text-muted-foreground">{schedule.hours}</span>
            </div>
          ))}
          <div className="pt-3 border-t">
            <p className="text-xs text-muted-foreground">
              En dehors de ces horaires, vous pouvez nous laisser un message ou nous contacter par email.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Team */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Notre équipe
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {team.map((member, index) => (
            <div key={index} className="space-y-2 pb-4 border-b last:border-b-0">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-sm">{member.name}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {member.role}
                  </Badge>
                </div>
              </div>
              <div className="space-y-1 text-xs text-muted-foreground">
                
                <div className="flex items-center gap-1">
                  <Phone className="h-3 w-3" />
                  {member.phone}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card className="bg-primary/5">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            Urgence pastorale
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            Pour les urgences (sacrement des malades, accompagnement en fin de vie), contactez-nous 24h/24 :
          </p>
          <p className="font-semibold text-primary">+237 694424444</p>
        </CardContent>
      </Card>
    </div>
  )
}
