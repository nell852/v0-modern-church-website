"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"
import { createBrowserClient } from "@supabase/ssr"

interface MassSchedule {
  id: string
  day_of_week: number
  time: string
  type: string
  description: string
  active: boolean
}

const dayNames = [
  "Dimanche",
  "Lundi", 
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi"
]

export function MassScheduleDynamic() {
  const [schedules, setSchedules] = useState<MassSchedule[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMassSchedules() {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      )

      const { data, error } = await supabase
        .from("mass_schedules")
        .select("*")
        .eq("active", true)
        .order("day_of_week", { ascending: true })
        .order("time", { ascending: true })

      if (error) {
        console.error("Error fetching mass schedules:", error)
      } else {
        setSchedules(data || [])
      }
      setLoading(false)
    }

    fetchMassSchedules()
  }, [])

  // Group schedules by day
  const groupedSchedules = schedules.reduce((acc, schedule) => {
    const dayName = dayNames[schedule.day_of_week]
    if (!acc[dayName]) {
      acc[dayName] = []
    }
    acc[dayName].push(schedule)
    return acc
  }, {} as Record<string, MassSchedule[]>)

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Planning hebdomadaire
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                <div className="h-3 bg-muted rounded w-1/2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Planning hebdomadaire
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {Object.entries(groupedSchedules).map(([dayName, daySchedules]) => (
            <div
              key={dayName}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="font-semibold text-lg min-w-[100px]">{dayName}</div>
                <div className="flex gap-2 flex-wrap">
                  {daySchedules.map((schedule) => (
                    <Badge 
                      key={schedule.id} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary"
                    >
                      {schedule.time}
                    </Badge>
                  ))}
                </div>
              </div>
              {daySchedules.some(s => s.description) && (
                <div className="text-sm text-muted-foreground mt-2 sm:mt-0 sm:text-right">
                  {daySchedules.find(s => s.description)?.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
