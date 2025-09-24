"use client"

import { useState } from "react"
import { createBrowserClient } from "@supabase/ssr"

interface BookingData {
  accommodationType: string
  guests: string
  name: string
  email: string
  phone?: string
  checkIn: Date
  checkOut: Date
  message?: string
}

export function useBookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const submitBooking = async (bookingData: BookingData) => {
    setIsSubmitting(true)

    try {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      )

      // First, get the accommodation ID based on type
      const { data: accommodations, error: accError } = await supabase
        .from("accommodations")
        .select("id")
        .eq("active", true)
        .limit(1)

      if (accError || !accommodations || accommodations.length === 0) {
        throw new Error("Aucun hébergement disponible pour le moment.")
      }

      const accommodationId = accommodations[0].id

      // Calculate total amount
      const nights = Math.ceil((bookingData.checkOut.getTime() - bookingData.checkIn.getTime()) / (1000 * 60 * 60 * 24))
      const rates = {
        individual: 35000,
        double: 55000,
        group: 28000,
      }
      const rate = rates[bookingData.accommodationType as keyof typeof rates] || 0
      const totalAmount = nights * rate

      const { error } = await supabase
        .from("bookings")
        .insert([{
          accommodation_id: accommodationId,
          guest_name: bookingData.name,
          guest_email: bookingData.email,
          guest_phone: bookingData.phone,
          check_in: bookingData.checkIn.toISOString().split('T')[0],
          check_out: bookingData.checkOut.toISOString().split('T')[0],
          guests_count: parseInt(bookingData.guests),
          total_amount: totalAmount,
          special_requests: bookingData.message,
        }])

      if (error) {
        console.error("Error submitting booking:", error)
        throw new Error("Une erreur s'est produite lors de l'envoi de votre demande de réservation.")
      }

      setIsSubmitted(true)
      return { success: true }
    } catch (error) {
      console.error("Error submitting booking:", error)
      return { 
        success: false, 
        error: error instanceof Error ? error.message : "Une erreur inattendue s'est produite." 
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    submitBooking,
    isSubmitting,
    isSubmitted,
    resetForm: () => setIsSubmitted(false),
  }
}

