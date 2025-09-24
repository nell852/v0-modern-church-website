// EmailJS configuration and utilities

export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
}

export const emailTemplates = {
  booking: {
    templateId: 'booking_template',
    subject: 'Nouvelle demande de rendez-vous - Paroisse Saint-Esprit',
  },
  contact: {
    templateId: 'contact_template', 
    subject: 'Nouveau message de contact - Paroisse Saint-Esprit',
  },
  newsletter: {
    templateId: 'newsletter_template',
    subject: 'Nouvel abonnement newsletter - Paroisse Saint-Esprit',
  }
}

// Template parameters for different types of emails
export const getBookingTemplateParams = (formData: any) => ({
  to_name: "Paroisse Saint-Esprit",
  from_name: formData.name,
  from_email: formData.email,
  phone: formData.phone || 'Non renseigné',
  service: formData.service,
  message: formData.message || 'Aucun message',
  preferred_date: formData.preferredDate || 'Non spécifiée',
  preferred_time: formData.preferredTime || 'Non spécifiée',
  reply_to: formData.email,
})

export const getContactTemplateParams = (formData: any) => ({
  to_name: "Paroisse Saint-Esprit",
  from_name: formData.name,
  from_email: formData.email,
  phone: formData.phone || 'Non renseigné',
  subject: formData.subject || 'Demande générale',
  message: formData.message,
  reply_to: formData.email,
})

export const getNewsletterTemplateParams = (email: string) => ({
  to_name: "Paroisse Saint-Esprit",
  subscriber_email: email,
  subscription_date: new Date().toLocaleDateString('fr-FR'),
})

