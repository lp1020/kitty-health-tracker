\c health_stats_dev;
DROP TABLE IF EXISTS healthStats;
DROP TABLE IF EXISTS moods;

CREATE TABLE moods (
id SERIAL PRIMARY KEY,
mood VARCHAR(255)
);

CREATE TABLE healthStats (
id SERIAL PRIMARY KEY,
date VARCHAR(255),
weight DECIMAL,
bmi INTEGER,
blood_pressure VARCHAR(255),
heart_rate DECIMAL,
calorie_intake DECIMAL,
hours_of_sleep DECIMAL,
notes TEXT,
mood_id INTEGER REFERENCES moods(id)
);

CREATE INDEX ON moods (mood);
CREATE INDEX ON healthStats (date);

