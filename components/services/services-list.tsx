"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Heart, Cross, Baby, Rings, BookOpen, Users } from "lucide-react"
import { createBrowserClient } from "@supabase/ssr"
import { BookingModal } from "./booking-modal"

interface Service {
  id: string
  name: string
  description: string
  icon: string
  color: string
  details: string[]
  booking_required: boolean
  booking_form_fields: any
  order_index: number
}

const iconMap = {
  Heart,
  Cross,
  Baby,
  Rings,
  BookOpen,
  Users,
}

export function ServicesList() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchServices() {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      )

      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("active", true)
        .order("order_index", { ascending: true })

      if (error) {
        console.error("Error fetching services:", error)
      } else {
        setServices(data || [])
      }
      setLoading(false)
    }

    fetchServices()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-4 bg-muted rounded w-3/4 mb-2" />
              <div className="h-3 bg-muted rounded w-1/2" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded" />
                <div className="h-3 bg-muted rounded w-5/6" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => {
        const Icon = iconMap[service.icon as keyof typeof iconMap] || Heart
        return (
          <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 h-full">
            <CardHeader className="space-y-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center bg-${service.color}/10 group-hover:bg-${service.color}/20 transition-colors`}
              >
                <Icon className={`h-6 w-6 text-${service.color}`} />
              </div>
              <div className="space-y-2">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.name}
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
              {service.booking_required && (
                <BookingModal 
                  serviceName={service.name}
                  serviceId={service.id}
                  customFields={service.booking_form_fields}
                >
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    <Calendar className="h-4 w-4 mr-2" />
                    Prendre rendez-vous
                  </Button>
                </BookingModal>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
