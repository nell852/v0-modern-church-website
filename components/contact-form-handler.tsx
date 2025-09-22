"use client"

import { useState } from "react"
import { createBrowserClient } from "@supabase/ssr"

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const submitContactForm = async (formData: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      )

      const { error } = await supabase
        .from("contact_submissions")
        .insert([formData])

      if (error) {
        console.error("Error submitting contact form:", error)
        throw new Error("Une erreur s'est produite lors de l'envoi du message.")
      }

      setIsSubmitted(true)
      return { success: true }
    } catch (error) {
      console.error("Error submitting contact form:", error)
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "Une erreur inattendue s'est produite." 
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    submitContactForm,
    isSubmitting,
    isSubmitted,
    resetForm: () => setIsSubmitted(false),
  }
}
