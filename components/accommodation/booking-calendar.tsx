"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MessageSquare } from "lucide-react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

export function BookingCalendar() {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [formData, setFormData] = useState({
    accommodationType: "",
    guests: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the booking request to your backend
    console.log("Booking request:", {
      checkIn,
      checkOut,
      ...formData,
    })
    alert("Demande de réservation envoyée ! Nous vous contacterons sous 24h.")
  }

  // Mock unavailable dates (you would fetch these from your database)
  const unavailableDates = [
    new Date(2024, 11, 15),
    new Date(2024, 11, 16),
    new Date(2024, 11, 25),
    new Date(2024, 11, 26),
  ]

  const isDateUnavailable = (date: Date) => {
    return unavailableDates.some((unavailableDate) => date.toDateString() === unavailableDate.toDateString())
  }

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Réserver votre séjour</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sélectionnez vos dates et remplissez le formulaire pour faire une demande de réservation
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-8">
            {/* Calendar Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  Sélectionner les dates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Date d'arrivée</Label>
                    <div className="border rounded-md p-2 text-center">
                      {checkIn ? format(checkIn, "dd MMMM yyyy", { locale: fr }) : "Sélectionner"}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Date de départ</Label>
                    <div className="border rounded-md p-2 text-center">
                      {checkOut ? format(checkOut, "dd MMMM yyyy", { locale: fr }) : "Sélectionner"}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Calendar
                    mode="range"
                    selected={{ from: checkIn, to: checkOut }}
                    onSelect={(range) => {
                      setCheckIn(range?.from)
                      setCheckOut(range?.to)
                    }}
                    disabled={isDateUnavailable}
                    locale={fr}
                    className="rounded-md border"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <span className="text-sm">Dates non disponibles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm">Dates sélectionnées</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Informations de réservation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="accommodationType">Type d'hébergement</Label>
                    <Select
                      value={formData.accommodationType}
                      onValueChange={(value) => handleInputChange("accommodationType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Chambre individuelle (35€/nuit)</SelectItem>
                        <SelectItem value="double">Chambre double (55€/nuit)</SelectItem>
                        <SelectItem value="group">Groupe 6-12 pers. (280€/nuit)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">Nombre de personnes</Label>
                    <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner..." />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} personne{num > 1 ? "s" : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Votre nom et prénom"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (optionnel)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Précisez vos besoins particuliers, régime alimentaire, etc."
                    rows={4}
                  />
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-semibold">Estimation du séjour :</span>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {checkIn && checkOut && formData.accommodationType
                        ? `${calculateTotal(checkIn, checkOut, formData.accommodationType)}€`
                        : "Sélectionner les dates"}
                    </Badge>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Envoyer la demande de réservation
                  </Button>

                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    * Champs obligatoires. Nous vous contacterons sous 24h pour confirmer votre réservation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </section>
  )
}

function calculateTotal(checkIn: Date, checkOut: Date, accommodationType: string): number {
  const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
  const rates = {
    individual: 35,
    double: 55,
    group: 280,
  }
  return nights * (rates[accommodationType as keyof typeof rates] || 0)
}
