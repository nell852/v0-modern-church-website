"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"
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
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (error) setError(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!checkIn || !checkOut) {
      setError("Veuillez sélectionner vos dates d'arrivée et de départ.")
      return
    }

    // Ici tu peux envoyer par WhatsApp ou Email
    const whatsappMessage = encodeURIComponent(
      `Réservation:\nNom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nType: ${formData.accommodationType}\nPersonnes: ${formData.guests}\nDates: ${format(checkIn, "dd/MM/yyyy")} - ${format(checkOut, "dd/MM/yyyy")}\nMessage: ${formData.message}`
    )

    const whatsappLink = `https://wa.me/237698849425?text=${whatsappMessage}`
    const mailtoLink = `mailto:mvelenyogogsilvannel@gmail.com?subject=Nouvelle réservation&body=${whatsappMessage}`

    setSubmitted(true)

    window.open(whatsappLink, "_blank")
    window.open(mailtoLink, "_blank")
  }

  if (submitted) {
    return (
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-800 mb-2">Demande envoyée !</h2>
              <p className="text-green-700 mb-6">
                Merci pour votre demande. Vous pouvez aussi vérifier vos messages WhatsApp et Email.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="outline">
                Faire une nouvelle réservation
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Réserver votre séjour</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Remplissez le formulaire et sélectionnez vos dates.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-700">
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-8">
          {/* Dates */}
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
                  <Input
                    type="date"
                    value={checkIn ? format(checkIn, "yyyy-MM-dd") : ""}
                    onChange={e => setCheckIn(new Date(e.target.value))}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Date de départ</Label>
                  <Input
                    type="date"
                    value={checkOut ? format(checkOut, "yyyy-MM-dd") : ""}
                    onChange={e => setCheckOut(new Date(e.target.value))}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formulaire */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Informations de réservation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Nom complet *</Label>
                <Input value={formData.name} onChange={e => handleInputChange("name", e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label>Email *</Label>
                <Input type="email" value={formData.email} onChange={e => handleInputChange("email", e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label>Téléphone</Label>
                <Input type="tel" value={formData.phone} onChange={e => handleInputChange("phone", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Type d'hébergement</Label>
                <Select value={formData.accommodationType} onValueChange={v => handleInputChange("accommodationType", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choisir..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">Chambre individuelle</SelectItem>
                    <SelectItem value="double">Chambre double</SelectItem>
                    <SelectItem value="group">Groupe 6-12 pers.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Nombre de personnes</Label>
                <Select value={formData.guests} onValueChange={v => handleInputChange("guests", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner..." />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => (
                      <SelectItem key={i + 1} value={`${i + 1}`}>{i + 1} personne{i > 0 ? "s" : ""}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Message (optionnel)</Label>
                <Textarea value={formData.message} onChange={e => handleInputChange("message", e.target.value)} rows={4} />
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <Button type="submit" className="w-full" size="lg">
                  Envoyer via WhatsApp & Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </section>
  )
}
