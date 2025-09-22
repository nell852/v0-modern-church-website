"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Send, CheckCircle, AlertCircle, Phone, Mail } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (error) setError(null)
  }

  // Fonction pour envoyer sur WhatsApp
  const handleSubmitWhatsapp = () => {
    const number = "698849425" // ton numéro WhatsApp
    const text = `Nom: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone || "N/A"}%0ASujet: ${formData.subject}%0AMessage: ${formData.message}`
    const url = `https://wa.me/${number}?text=${text}`
    window.open(url, "_blank")
  }

  // Fonction pour envoyer par Email via mailto
  const handleSubmitEmail = () => {
    const email = "mvelenyogogsilvannel@gmail.com"
    const subject = encodeURIComponent(formData.subject || "Message depuis le formulaire")
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nMessage: ${formData.message}`
    )
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  if (isSubmitted) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-800 mb-2">Message envoyé !</h3>
          <p className="text-green-700 mb-4">Merci pour votre message. Nous vous répondrons dans les plus brefs délais.</p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Envoyer un autre message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          Envoyez-nous un message
        </CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-700">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">{error}</span>
          </div>
        )}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-4">
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
          </div>

          <div className="grid md:grid-cols-2 gap-4">
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

            <div className="space-y-2">
              <Label htmlFor="subject">Sujet *</Label>
              <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir un sujet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">Question générale</SelectItem>
                  <SelectItem value="sacraments">Sacrements (baptême, mariage, etc.)</SelectItem>
                  <SelectItem value="accommodation">Hébergement</SelectItem>
                  <SelectItem value="events">Événements</SelectItem>
                  <SelectItem value="pastoral">Accompagnement pastoral</SelectItem>
                  <SelectItem value="volunteer">Bénévolat</SelectItem>
                  <SelectItem value="other">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Décrivez votre demande ou votre question..."
              rows={6}
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch">
            <Button
              type="button"
              onClick={handleSubmitWhatsapp}
              className="flex-1 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white"
            >
              <Phone className="h-4 w-4 mr-2" />
              Envoyer via WhatsApp
            </Button>
            <Button
              type="button"
              onClick={handleSubmitEmail}
              className="flex-1 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Mail className="h-4 w-4 mr-2" />
              Envoyer par Email
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            * Champs obligatoires. Nous nous engageons à répondre dans les 48h.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
