export function ContactMap() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nous trouver</h2>
          <p className="text-lg text-muted-foreground">
            Notre paroisse est située au cœur de la ville, facilement accessible en transport en commun
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1d8d%3A0x40b82c3688c9460!2sNotre-Dame%20de%20Paris!5e0!3m2!1sen!2sfr!4v1635789012345!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation de la Paroisse Saint-Esprit"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <h3 className="font-semibold mb-2">En métro</h3>
              <p className="text-sm text-muted-foreground">
                Ligne 1, 4, 7, 11, 14 - Station Châtelet
                <br />
                Ligne 4 - Station Saint-Germain-des-Prés
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">En bus</h3>
              <p className="text-sm text-muted-foreground">
                Lignes 21, 27, 38, 85, 96
                <br />
                Arrêt "Pont Neuf"
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">En voiture</h3>
              <p className="text-sm text-muted-foreground">
                Parking public à 200m
                <br />
                Places de stationnement limitées
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
