"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Clock, Heart } from "lucide-react"
import { createBrowserClient } from "@supabase/ssr"

interface ServiceStats {
  totalServices: number
  servicesWithBooking: number
  totalMassSchedules: number
  upcomingBookings: number
}

export function ServicesStats() {
  const [stats, setStats] = useState<ServiceStats>({
    totalServices: 0,
    servicesWithBooking: 0,
    totalMassSchedules: 0,
    upcomingBookings: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      )

      try {
        // Get services stats
        const { count: totalServices } = await supabase
          .from("services")
          .select("*", { count: "exact", head: true })
          .eq("active", true)

        const { count: servicesWithBooking } = await supabase
          .from("services")
          .select("*", { count: "exact", head: true })
          .eq("active", true)
          .eq("booking_required", true)

        // Get mass schedules stats
        const { count: totalMassSchedules } = await supabase
          .from("mass_schedules")
          .select("*", { count: "exact", head: true })
          .eq("active", true)

        // Get upcoming bookings (last 7 days)
        const sevenDaysAgo = new Date()
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
        
        const { count: upcomingBookings } = await supabase
          .from("service_bookings")
          .select("*", { count: "exact", head: true })
          .gte("created_at", sevenDaysAgo.toISOString())

        setStats({
          totalServices: totalServices || 0,
          servicesWithBooking: servicesWithBooking || 0,
          totalMassSchedules: totalMassSchedules || 0,
          upcomingBookings: upcomingBookings || 0,
        })
      } catch (error) {
        console.error("Error fetching stats:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-4 bg-muted rounded w-3/4 mb-2" />
              <div className="h-8 bg-muted rounded w-1/2" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Services</p>
              <p className="text-2xl font-bold">{stats.totalServices}</p>
            </div>
            <Heart className="h-8 w-8 text-primary" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Avec rendez-vous</p>
              <p className="text-2xl font-bold">{stats.servicesWithBooking}</p>
            </div>
            <Calendar className="h-8 w-8 text-secondary" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Horaires messes</p>
              <p className="text-2xl font-bold">{stats.totalMassSchedules}</p>
            </div>
            <Clock className="h-8 w-8 text-accent" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Demandes récentes</p>
              <p className="text-2xl font-bold">{stats.upcomingBookings}</p>
            </div>
            <Users className="h-8 w-8 text-primary" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
