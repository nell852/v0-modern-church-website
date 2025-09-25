// components/donation/DonationForm.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Smartphone, Building, Gift } from "lucide-react"

const donationAmounts = [1000, 5000, 10000, 20000, 50000, 100000] // FCFA

export default function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const getCurrentAmount = () => {
    return selectedAmount || Number.parseInt(customAmount) || 0
  }

  const getTaxReduction = () => {
    const amount = getCurrentAmount()
    return Math.round(amount * 0)
  }

  const handleSendWhatsApp = () => {
    const message = encodeURIComponent(
      `Bonjour, je souhaite faire un don.\nNom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nMontant: ${getCurrentAmount()} FCFA\nType: ${donationType}\nMéthode: ${paymentMethod}`
    )
    window.open(`https://wa.me/237694424444?text=${message}`, "_blank")
  }

  /*const handleSendEmail = () => {
    const subject = encodeURIComponent("Demande de don")
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite faire un don.\n\nNom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nMontant: ${getCurrentAmount()} FCFA\nType: ${donationType}\nMéthode: ${paymentMethod}`
    )
    window.location.href = `mailto:mvelenyogogsilvannel@gmail.com?subject=${subject}&body=${body}`
  }*/

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Faire un Don</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Remplissez le formulaire et choisissez la méthode d'envoi.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-primary" /> Formulaire de don
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Nom complet</Label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Votre email" />
              </div>
              <div className="space-y-2">
                <Label>Téléphone</Label>
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Votre téléphone" />
              </div>
              <div className="space-y-2">
                <Label>Type de don</Label>
                <div className="flex gap-2">
                  <Button variant={donationType === "one-time" ? "default" : "outline"} onClick={() => setDonationType("one-time")}>Ponctuel</Button>
                  <Button variant={donationType === "monthly" ? "default" : "outline"} onClick={() => setDonationType("monthly")}>Mensuel</Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Montant (FCFA)</Label>
                <div className="grid grid-cols-3 gap-2">
                  {donationAmounts.map((amt) => (
                    <Button key={amt} variant={selectedAmount === amt ? "default" : "outline"} onClick={() => handleAmountSelect(amt)}>{amt}</Button>
                  ))}
                </div>
                <Input type="number" placeholder="Autre montant" value={customAmount} onChange={(e) => handleCustomAmount(e.target.value)} className="mt-2" />
              </div>
              <div className="space-y-2">
                <Label>Méthode de paiement</Label>
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <SelectTrigger><SelectValue placeholder="Choisir" /></SelectTrigger>
                  <SelectContent>
                    {/* <SelectItem value="card">Carte bancaire</SelectItem> */}
                    <SelectItem value="mobile">Mobile Money</SelectItem>
                    {/* <SelectItem value="transfer">Virement bancaire</SelectItem> */}
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-4 space-y-2">
  <Button onClick={handleSendWhatsApp} className="w-full">
    Envoyer la demande via WhatsApp
  </Button>
  {/* <Button onClick={handleSendEmail} className="w-full" variant="secondary">
    Envoyer la demande par Email
  </Button> */}
</div>

            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Récapitulatif</CardTitle></CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between"><span>Montant :</span><span>{getCurrentAmount()} FCFA</span></div>
              <div className="flex justify-between"><span>Type :</span><Badge variant="secondary">{donationType === "one-time" ? "Ponctuel" : "Mensuel"}</Badge></div>
              <div className="border-t pt-2">
                <div className="flex justify-between text-sm text-muted-foreground"><span>Réduction fiscale :</span><span>-{getTaxReduction()} FCFA</span></div>
                <div className="flex justify-between font-semibold text-primary"><span>Coût réel :</span><span>{getCurrentAmount() - getTaxReduction()} FCFA</span></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
