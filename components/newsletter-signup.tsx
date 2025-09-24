"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"
import { createBrowserClient } from "@supabase/ssr"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      )

      const { error } = await supabase
        .from("newsletter_subscriptions")
        .insert([{ email }])

      if (error) {
        console.error("Error subscribing to newsletter:", error)
        alert("Une erreur s'est produite. Veuillez réessayer.")
      } else {
        setIsSubscribed(true)
        setEmail("")
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      alert("Une erreur s'est produite. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubscribed) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-4 text-center">
          <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <h3 className="font-semibold text-green-800 mb-1">Merci pour votre inscription !</h3>
          <p className="text-sm text-green-700">Vous recevrez bientôt nos actualités par email.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90">
              {isSubmitting ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <Mail className="h-4 w-4" />
              )}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            En vous abonnant, vous acceptez de recevoir nos actualités par email.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

