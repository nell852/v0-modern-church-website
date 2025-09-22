import { DonationsHero } from "@/components/donations/donations-hero"
import DonationOptions  from "@/components/donations/donation-options"
//import { DonationProjects } from "@/components/donations/donation-projects"

export default function DonationsPage() {
  return (
    <div className="min-h-screen">
      <DonationsHero />
      <DonationOptions />
      {/* <DonationProjects /> */}
    </div>
  )
}
