"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Smartphone, Building, Euro, Gift } from "lucide-react"

const donationAmounts = [10, 25, 50, 100, 200, 500]

export function DonationOptions() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")
  const [paymentMethod, setPaymentMethod] = useState("")

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
    return Math.round(amount * 0.66) // 66% tax reduction in France
  }

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Faire un Don</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez le montant et la méthode qui vous conviennent le mieux
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Donation Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-primary" />
                  Votre don
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Donation Type */}
                <div className="space-y-3">
                  <Label>Type de don</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant={donationType === "one-time" ? "default" : "outline"}
                      onClick={() => setDonationType("one-time")}
                      className="justify-start"
                    >
                      Don ponctuel
                    </Button>
                    <Button
                      variant={donationType === "monthly" ? "default" : "outline"}
                      onClick={() => setDonationType("monthly")}
                      className="justify-start"
                    >
                      Don mensuel
                    </Button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="space-y-3">
                  <Label>Montant du don</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {donationAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        onClick={() => handleAmountSelect(amount)}
                        className="justify-center"
                      >
                        {amount}€
                      </Button>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="custom-amount">Autre montant</Label>
                    <div className="relative">
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Montant personnalisé"
                        value={customAmount}
                        onChange={(e) => handleCustomAmount(e.target.value)}
                        className="pr-8"
                      />
                      <Euro className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-3">
                  <Label>Méthode de paiement</Label>
                  <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir une méthode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="card">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4" />
                          Carte bancaire
                        </div>
                      </SelectItem>
                      <SelectItem value="mobile">
                        <div className="flex items-center gap-2">
                          <Smartphone className="h-4 w-4" />
                          Mobile Money
                        </div>
                      </SelectItem>
                      <SelectItem value="transfer">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          Virement bancaire
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full" size="lg" disabled={getCurrentAmount() === 0 || !paymentMethod}>
                  Faire un don de {getCurrentAmount()}€{donationType === "monthly" && " par mois"}
                </Button>
              </CardContent>
            </Card>

            {/* Donation Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Récapitulatif</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Montant du don :</span>
                    <span className="font-semibold">{getCurrentAmount()}€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Fréquence :</span>
                    <Badge variant="secondary">{donationType === "one-time" ? "Ponctuel" : "Mensuel"}</Badge>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Réduction fiscale (66%) :</span>
                      <span>-{getTaxReduction()}€</span>
                    </div>
                    <div className="flex justify-between items-center font-semibold text-primary">
                      <span>Coût réel après déduction :</span>
                      <span>{getCurrentAmount() - getTaxReduction()}€</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Avantage fiscal</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Votre don à notre paroisse vous donne droit à une réduction d'impôt de 66% du montant versé, dans la
                    limite de 20% de votre revenu imposable.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Un reçu fiscal vous sera automatiquement envoyé pour votre déclaration d'impôts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Autres moyens de donner</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <strong>Chèque :</strong> À l'ordre de "Paroisse Saint-Esprit"
                  </div>
                  <div>
                    <strong>Espèces :</strong> Directement au secrétariat ou lors des messes
                  </div>
                  <div>
                    <strong>Virement :</strong> IBAN FR76 1234 5678 9012 3456 7890 123
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
