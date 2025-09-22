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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.743247950272!2d11.51878607543169!3d3.849408996873465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x109d120e4c1d3f2d%3A0x8b8e3c3f7b0e34e7!2sQuartier%20Mvoly%C3%A9%2C%20Yaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1695400000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation de la Paroisse à Mvolyé, Yaoundé"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <h3 className="font-semibold mb-2">En transport public</h3>
              <p className="text-sm text-muted-foreground">
                Bus et taxi disponibles dans tout Yaoundé
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">En voiture</h3>
              <p className="text-sm text-muted-foreground">
                Parking disponible à proximité
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">À pied</h3>
              <p className="text-sm text-muted-foreground">
                Situé au cœur du quartier Mvolyé, facile à trouver
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
