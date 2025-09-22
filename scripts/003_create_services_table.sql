-- Create services table for the church website

CREATE TABLE IF NOT EXISTS public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT, -- Icon name for Lucide React
  color TEXT DEFAULT 'primary', -- 'primary', 'secondary', 'accent'
  details TEXT[], -- Array of service details
  booking_required BOOLEAN DEFAULT false,
  booking_form_fields JSONB, -- Custom form fields for this service
  active BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample services
INSERT INTO public.services (name, description, icon, color, details, booking_required, booking_form_fields, order_index) VALUES
('Messes et Célébrations', 'Participez à nos célébrations eucharistiques tout au long de la semaine', 'Heart', 'primary', 
 ARRAY['Messes dominicales : 8h30, 10h30, 18h00', 'Messes en semaine : 18h30 (lundi au samedi)', 'Messes de fêtes et solennités', 'Célébrations spéciales (Avent, Carême, Pâques)'], 
 false, '{}', 1),

('Confessions', 'Recevez le sacrement de réconciliation dans un cadre bienveillant', 'Cross', 'secondary',
 ARRAY['Samedi : 17h00 - 18h00', 'Dimanche : 8h00 - 8h25 et 17h30 - 17h55', 'Sur rendez-vous en semaine', 'Préparation aux grandes fêtes'],
 true, '{"fields": ["preferred_date", "preferred_time", "reason"]}', 2),

('Baptêmes', 'Accueillez votre enfant dans la communauté chrétienne', 'Baby', 'accent',
 ARRAY['Préparation obligatoire pour les parents', 'Rencontres de préparation mensuelles', 'Célébrations le dimanche après-midi', 'Accompagnement personnalisé'],
 true, '{"fields": ["child_name", "child_birth_date", "parents_names", "godparents", "preferred_date"]}', 3),

('Mariages', 'Célébrez votre union dans la foi et l''amour', 'Rings', 'primary',
 ARRAY['Préparation au mariage (6 mois minimum)', 'Rencontres avec un prêtre', 'Sessions de préparation en couple', 'Célébration personnalisée'],
 true, '{"fields": ["bride_name", "groom_name", "wedding_date", "ceremony_type", "guests_count"]}', 4),

('Catéchisme', 'Formation religieuse pour enfants et adultes', 'BookOpen', 'secondary',
 ARRAY['Éveil à la foi (3-6 ans)', 'Catéchisme enfants (7-11 ans)', 'Aumônerie jeunes (12-18 ans)', 'Catéchuménat adultes'],
 true, '{"fields": ["participant_name", "age", "program_type", "previous_experience"]}', 5),

('Groupes de Prière', 'Rejoignez nos communautés de prière et de partage', 'Users', 'accent',
 ARRAY['Groupe de prière du jeudi soir', 'Lectio Divina le mardi matin', 'Rosaire quotidien à 17h45', 'Adoration eucharistique le vendredi'],
 false, '{}', 6);

-- Create service bookings table
CREATE TABLE IF NOT EXISTS public.service_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id UUID REFERENCES public.services(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  booking_data JSONB, -- Store custom form data
  status TEXT DEFAULT 'pending', -- 'pending', 'confirmed', 'cancelled'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
