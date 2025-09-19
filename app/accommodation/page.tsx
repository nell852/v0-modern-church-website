import { AccommodationHero } from "@/components/accommodation/accommodation-hero"
import { AccommodationGallery } from "@/components/accommodation/accommodation-gallery"
import { BookingCalendar } from "@/components/accommodation/booking-calendar"
import { AccommodationInfo } from "@/components/accommodation/accommodation-info"

export default function AccommodationPage() {
  return (
    <div className="min-h-screen">
      <AccommodationHero />
      <AccommodationInfo />
      <AccommodationGallery />
      <BookingCalendar />
    </div>
  )
}
