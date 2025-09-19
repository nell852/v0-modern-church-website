import { EventsHero } from "@/components/events/events-hero"
import { EventsCalendar } from "@/components/events/events-calendar"
import { UpcomingEvents } from "@/components/events/upcoming-events"

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <EventsHero />
      <div className="container px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <EventsCalendar />
          </div>
          <div className="lg:col-span-1">
            <UpcomingEvents />
          </div>
        </div>
      </div>
    </div>
  )
}
