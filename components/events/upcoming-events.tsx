"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"
import { createBrowserClient } from "@supabase/ssr"

interface Event {
  id: string
  title: string
  description: string
  start_date: string
  end_date?: string
  location: string
  event_type: string
}

export function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUpcomingEvents() {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      )

      const { data, error } = await supabase
        .from("events")
        .select("*")
        .gte("start_date", new Date().toISOString().split("T")[0])
        .order("start_date", { ascending: true })
        .limit(5)

      if (error) {
        console.error("Error fetching upcoming events:", error)
      } else {
        setEvents(data || [])
      }
      setLoading(false)
    }

    fetchUpcomingEvents()
  }, [])

  const categoryColors = {
    Messe: "bg-primary/10 text-primary",
    Conférence: "bg-secondary/10 text-secondary",
    Concert: "bg-accent/10 text-accent",
    Retraite: "bg-muted/50 text-muted-foreground",
    Célébration: "bg-primary/10 text-primary",
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Prochains événements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-3 bg-muted rounded w-1/2" />
                  <div className="h-3 bg-muted rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : events.length > 0 ? (
            events.map((event) => (
              <div key={event.id} className="space-y-3 pb-4 border-b last:border-b-0">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold text-sm leading-tight">{event.title}</h4>
                  <Badge
                    variant="secondary"
                    className={
                      categoryColors[event.event_type as keyof typeof categoryColors] ||
                      "bg-muted/50 text-muted-foreground"
                    }
                  >
                    {event.event_type}
                  </Badge>
                </div>

                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {format(new Date(event.start_date), "dd MMM yyyy", { locale: fr })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {format(new Date(event.start_date), "HH:mm")}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {event.location}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground line-clamp-2">{event.description}</p>
              </div>
            ))
          ) : (
            <p className="text-muted-foreground text-sm">Aucun événement à venir pour le moment.</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Horaires réguliers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-sm">Messe dominicale</span>
              <span className="text-sm text-muted-foreground">10h30</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-sm">Messes en semaine</span>
              <span className="text-sm text-muted-foreground">18h30</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-sm">Confessions</span>
              <span className="text-sm text-muted-foreground">Sam 17h-18h</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-sm">Adoration</span>
              <span className="text-sm text-muted-foreground">Ven 19h-20h</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
