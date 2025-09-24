"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { BookingForm } from "./booking-form"

interface BookingModalProps {
  serviceName: string
  serviceId: string
  customFields?: any
  children: React.ReactNode
}

export function BookingModal({ serviceName, serviceId, customFields, children }: BookingModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Prendre rendez-vous - {serviceName}
          </DialogTitle>
        </DialogHeader>
        <BookingForm 
          serviceName={serviceName}
          serviceId={serviceId}
          customFields={customFields}
        />
      </DialogContent>
    </Dialog>
  )
}

