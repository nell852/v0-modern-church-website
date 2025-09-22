-- Setup services data for the church website
-- This script should be run after creating the services table

-- Update existing services with proper booking form fields
UPDATE public.services 
SET booking_form_fields = '{"fields": ["preferred_date", "preferred_time", "reason"]}'::jsonb
WHERE name = 'Confessions';

UPDATE public.services 
SET booking_form_fields = '{"fields": ["child_name", "child_birth_date", "parents_names", "godparents", "preferred_date"]}'::jsonb
WHERE name = 'Baptêmes';

UPDATE public.services 
SET booking_form_fields = '{"fields": ["bride_name", "groom_name", "wedding_date", "ceremony_type", "guests_count"]}'::jsonb
WHERE name = 'Mariages';

UPDATE public.services 
SET booking_form_fields = '{"fields": ["participant_name", "age", "program_type", "previous_experience"]}'::jsonb
WHERE name = 'Catéchisme';

-- Add more detailed mass schedules
INSERT INTO public.mass_schedules (day_of_week, time, type, description) VALUES
(0, '08:30', 'regular', 'Messe dominicale matinale'),
(0, '10:30', 'regular', 'Messe dominicale principale avec chorale'),
(0, '18:00', 'regular', 'Messe dominicale du soir'),
(1, '18:30', 'regular', 'Messe en semaine'),
(2, '18:30', 'regular', 'Messe en semaine'),
(3, '18:30', 'regular', 'Messe en semaine'),
(4, '18:30', 'regular', 'Messe en semaine'),
(5, '18:30', 'regular', 'Messe en semaine'),
(6, '18:30', 'regular', 'Messe du samedi soir');

-- Add special mass schedules for holidays
INSERT INTO public.mass_schedules (day_of_week, time, type, description) VALUES
(0, '09:00', 'special', 'Messe de Noël'),
(0, '11:00', 'special', 'Messe de Pâques'),
(0, '10:00', 'special', 'Messe de mariage'),
(0, '15:00', 'special', 'Messe de baptême');

-- Create a view for easy access to services with booking requirements
CREATE OR REPLACE VIEW public.services_with_booking AS
SELECT 
  s.*,
  CASE 
    WHEN s.booking_required THEN 'Oui'
    ELSE 'Non'
  END as booking_status
FROM public.services s
WHERE s.active = true
ORDER BY s.order_index;

-- Create a view for mass schedules grouped by day
CREATE OR REPLACE VIEW public.mass_schedules_by_day AS
SELECT 
  CASE 
    WHEN day_of_week = 0 THEN 'Dimanche'
    WHEN day_of_week = 1 THEN 'Lundi'
    WHEN day_of_week = 2 THEN 'Mardi'
    WHEN day_of_week = 3 THEN 'Mercredi'
    WHEN day_of_week = 4 THEN 'Jeudi'
    WHEN day_of_week = 5 THEN 'Vendredi'
    WHEN day_of_week = 6 THEN 'Samedi'
  END as day_name,
  day_of_week,
  array_agg(time ORDER BY time) as times,
  array_agg(description ORDER BY time) as descriptions,
  array_agg(type ORDER BY time) as types
FROM public.mass_schedules
WHERE active = true
GROUP BY day_of_week
ORDER BY day_of_week;
