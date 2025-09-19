-- Insert sample data for the church website

-- Sample team members
INSERT INTO public.team_members (name, title, bio, order_index) VALUES
('Père Jean-Marie Dubois', 'Curé de la paroisse', 'Père Jean-Marie est le curé de notre paroisse depuis 2015. Il est passionné par l''accompagnement spirituel et l''accueil des familles.', 1),
('Père Michel Laurent', 'Vicaire', 'Père Michel nous a rejoint en 2020. Il s''occupe particulièrement de la pastorale des jeunes et de la préparation aux sacrements.', 2),
('Sœur Marie-Claire', 'Responsable pastorale', 'Sœur Marie-Claire coordonne les activités pastorales et l''accueil des pèlerins dans notre maison d''hôtes.', 3);

-- Sample mass schedules
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

-- Sample accommodations
INSERT INTO public.accommodations (name, description, capacity, price_per_night, amenities) VALUES
('Chambre Saint-François', 'Chambre simple avec vue sur le jardin, idéale pour une retraite spirituelle personnelle.', 1, 45.00, ARRAY['Salle de bain privée', 'Bureau', 'Vue jardin', 'WiFi']),
('Chambre Sainte-Thérèse', 'Chambre double confortable pour couples ou amis en pèlerinage.', 2, 65.00, ARRAY['Salle de bain privée', 'Balcon', 'WiFi', 'Télévision']),
('Dortoir Saint-Joseph', 'Hébergement économique pour groupes de jeunes ou familles nombreuses.', 6, 25.00, ARRAY['Salle de bain partagée', 'Casiers', 'WiFi', 'Cuisine commune']);

-- Sample events
INSERT INTO public.events (title, description, start_date, end_date, location, event_type) VALUES
('Messe de Noël', 'Célébration solennelle de la Nativité avec la chorale paroissiale.', '2024-12-24 23:00:00+01', '2024-12-25 00:30:00+01', 'Église principale', 'mass'),
('Conférence : "La spiritualité au XXIe siècle"', 'Conférence donnée par le Père Antoine Durand sur les défis de la foi moderne.', '2024-01-15 20:00:00+01', '2024-01-15 21:30:00+01', 'Salle paroissiale', 'conference'),
('Concert de musique sacrée', 'Concert exceptionnel de l''Ensemble Vocal Saint-Grégoire.', '2024-02-10 20:30:00+01', '2024-02-10 22:00:00+01', 'Église principale', 'concert');

-- Sample blog posts
INSERT INTO public.posts (title, content, excerpt, slug, published) VALUES
('Bienvenue dans notre nouvelle maison digitale', 'Nous sommes heureux de vous présenter notre nouveau site internet, conçu pour mieux vous accompagner dans votre cheminement spirituel...', 'Découvrez notre nouveau site internet et toutes ses fonctionnalités.', 'bienvenue-nouvelle-maison-digitale', true),
('Les temps forts de l''Avent', 'L''Avent est un temps de préparation à Noël, marqué par l''attente et l''espérance. Découvrez comment vivre pleinement cette période...', 'Comment bien vivre le temps de l''Avent en paroisse.', 'temps-forts-avent', true),
('Témoignage : Ma retraite spirituelle', 'Marie nous partage son expérience de retraite dans notre maison d''hôtes et comment cela a transformé sa relation à Dieu...', 'Le témoignage touchant de Marie sur sa retraite spirituelle.', 'témoignage-retraite-spirituelle', true);
