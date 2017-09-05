-- \c health_stats_dev;
INSERT INTO moods (mood) VALUES
('Happy'),
('Upset'),
('Angry'),
('Sleepy'),
('Annoyed'),
('Excited'),
('Anxious'),
('Sad'),
('Blah');

INSERT INTO healthStats (date, weight, bmi, blood_pressure, heart_rate, calorie_intake, hours_of_sleep, notes, mood_id) VALUES
('August 20, 2017', 162.0, 25, '120 / 80', 76, 2256, 8.5, 'Today was the worst day ever!', 3),
('August 21, 2017', 164.3, 25, '165 / 85', 90, 2003, 6, 'I am still annoyed!', 5),
('August 22, 2017', 167.0, 26, '126 / 83', 86, 1070, 9, 'I have gained too much weight, but I am in a better mood than yesterday.', 1),
('August 23, 2017', 163.4, 25, '130 / 90', 79, 1590, 3, 'Too exhausted to eat today, so lost some weight!', 4),
('August 24, 2017', 162.5, 25, '157 / 82', 81, 2088, 8, 'I failed a test at school today... :(', 8),
('August 25, 2017', 160.3, 25, '124 / 81', 92, 2163, 5.5, 'I am so nervous about my audition tomorrow', 7),
('August 26, 2017', 159.9, 24, '118 / 80', 75, 2250, 7.5, 'I got the part and I lost more weight!', 1),
('August 27, 2017', 157.7, 24, '137 / 89', 71, 2690, 6, 'I am at my lowest weight so far!', 6),
('August 28, 2017', 160.1, 25, '146 / 79', 87, 2029, 8.5, 'Not feeling great today...', 9),
('August 29, 2017', 162.5, 25, '127 / 86', 78, 2145, 4.5, 'I am sick.', 2);
