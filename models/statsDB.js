// SELECT * FROM healthStats
// INNER JOIN moods ON healthStats.mood_id=moods.id
// ORDER BY healthStats.id;
const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');

const db = pgp(dbConfig);

module.exports = {

  findAll() {
    return db.many(`
     SELECT healthStats.id, date, weight, bmi, blood_pressure, heart_rate,
     calorie_intake, hours_of_sleep, notes, moods.mood
     FROM healthStats INNER JOIN moods
     ON healthStats.mood_id = moods.id
     ORDER BY id
     `);
  },

  findById(id) {
    return db.one(`
      SELECT healthStats.id, date, weight, bmi, blood_pressure, heart_rate,
      calorie_intake, hours_of_sleep, notes, moods.mood
      FROM healthStats INNER JOIN moods
      ON healthStats.mood_id = moods.id
      WHERE healthStats.id = $1;
      `, id);
  },

  average() {
    return db.one(`
      SELECT ROUND (AVG(weight)) AS weight, ROUND (AVG(bmi)) AS bmi, ROUND (AVG(heart_rate)) AS heart_rate,
      ROUND (AVG(calorie_intake)) AS calorie_intake, ROUND (AVG(heart_rate)) AS heart_rate,
      ROUND (AVG(hours_of_sleep)) AS hours_of_sleep FROM healthStats;
      `)
  },

  save(stats) {
    console.log(stats);
    stats.mood_id = Number.parseInt(stats.mood_id, 10);
    return db.one(`
      INSERT INTO healthStats
      (date, weight, bmi, blood_pressure, heart_rate, calorie_intake, hours_of_sleep, notes, mood_id)

      VALUES
      ($/date/, $/weight/, $/bmi/, $/blood_pressure/, $/heart_rate/, $/calorie_intake/, $/hours_of_sleep/, $/notes/, $/mood_id/)
      RETURNING *
      `, stats);
  },

  update(stats) {
    return db.one(`
      UPDATE healthStats
      SET
      date = $/date/,
      weight = $/weight/,
      bmi = $/bmi/,
      blood_pressure = $/blood_pressure/,
      heart_rate = $/heart_rate/,
      calorie_intake = $/calorie_intake/,
      hours_of_sleep = $/hours_of_sleep/,
      notes = $/notes/,
      mood_id = $/mood_id/
      WHERE id = $/id/
      RETURNING *
      `, stats);
  },

  destroy(id) {
    return db.none(`
      DELETE FROM healthStats
      WHERE id = $1
      `, id);
  },

};
