"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from '@emailjs/browser'

export function MassIntentionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    intention: "",
    massDate: "",
    massTime: "",
    offering: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const serviceId_emailjs = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

      const templateParams = {
        to_name: "Paroisse Saint-Esprit",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Non renseigné',
        intention: formData.intention,
        mass_date: formData.massDate,
        mass_time: formData.massTime,
        offering: formData.offering,
        message: formData.message || 'Aucun message',
        reply_to: formData.email,
      }

      await emailjs.send(serviceId_emailjs, templateId, templateParams, publicKey)

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error sending email:", error)
      setError("Une erreur s'est produite lors de l'envoi de votre demande. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-800 mb-2">Demande d'intention envoyée !</h3>
          <p className="text-green-700 mb-4">
            Merci pour votre demande d'intention de messe. Nous vous contacterons pour confirmer les détails.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Faire une nouvelle demande
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-primary" />
          Demander une intention de messe
        </CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center gap-2 text-red-700">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">{error}</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <Label htmlFor="intention">Intention de la messe *</Label>
            <Textarea
              id="intention"
              value={formData.intention}
              onChange={(e) => handleInputChange("intention", e.target.value)}
              placeholder="Pour qui ou pour quoi cette messe est-elle demandée ?"
              rows={3}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="massDate">Date souhaitée</Label>
              <Input
                id="massDate"
                type="date"
                value={formData.massDate}
                onChange={(e) => handleInputChange("massDate", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="massTime">Heure préférée</Label>
              <Select value={formData.massTime} onValueChange={(value) => handleInputChange("massTime", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir une heure" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8h30">8h30</SelectItem>
                  <SelectItem value="10h30">10h30</SelectItem>
                  <SelectItem value="18h00">18h00</SelectItem>
                  <SelectItem value="18h30">18h30 (en semaine)</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="offering">Offrande (optionnel)</Label>
            <Select value={formData.offering} onValueChange={(value) => handleInputChange("offering", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Montant de l'offrande" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="libre">Offrande libre</SelectItem>
                <SelectItem value="10">10€</SelectItem>
                <SelectItem value="20">20€</SelectItem>
                <SelectItem value="30">30€</SelectItem>
                <SelectItem value="50">50€</SelectItem>
                <SelectItem value="autre">Autre montant</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message (optionnel)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Informations complémentaires..."
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" />
                Envoi en cours...
              </>
            ) : (
              <>
                <Heart className="h-4 w-4 mr-2" />
                Envoyer la demande
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            * Champs obligatoires. Une offrande libre est suggérée selon vos moyens.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

