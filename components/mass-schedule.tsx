import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

const massSchedule = [
  { day: "Dimanche", times: ["8h30", "10h30", "18h00"], special: "Messe principale à 10h30 avec chorale" },
  { day: "Lundi", times: ["18h30"] },
  { day: "Mardi", times: ["18h30"] },
  { day: "Mercredi", times: ["18h30"] },
  { day: "Jeudi", times: ["18h30"] },
  { day: "Vendredi", times: ["18h30"] },
  { day: "Samedi", times: ["18h30"], special: "Messe du samedi soir" },
]

export function MassSchedule() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Horaires des Messes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rejoignez-nous pour la célébration eucharistique tout au long de la semaine
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
                {massSchedule.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="font-semibold text-lg min-w-[100px]">{schedule.day}</div>
                      <div className="flex gap-2 flex-wrap">
                        {schedule.times.map((time) => (
                          <span
                            key={time}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>
                    {schedule.special && (
                      <div className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right">{schedule.special}</div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
