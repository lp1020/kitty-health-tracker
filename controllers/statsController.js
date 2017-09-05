const statsDB = require('../models/statsDB');

module.exports = {

  makeBlankStats(req, res, next) {
    const blankStats = {
      id:   null,
      date: null,
      weight: null,
      bmi: null,
      blood_pressure: null,
      heart_rate: null,
      calorie_intake: null,
      hours_of_sleep: null,
      notes: null,
      mood: null,
    };
    res.locals.stats = blankStats;
    next();
  },

  index(req, res, next) {
    statsDB.findAll()
    .then((stats) => {
      res.locals.stats = stats;
      next();
    })
    .catch(err => next(err));
  },

  averages(req, res, next) {
    statsDB.average()
    .then((stats) => {
      res.locals.avgStats = stats;
      next();
    })
    .catch(err => next(err));
  },

  getOne(req, res, next) {
    statsDB.findById(req.params.id)
    .then((stats) => {
      console.log(stats);
      res.locals.stats = stats;
      next();
    })
    .catch(err => next(err));
  },

  create(req, res, next) {
    statsDB.save(req.body)
    .then((stats) => {
      res.locals.stats = stats;
      next();
    })
    .catch(err => next(err));
  },

  update(req, res, next) {
    statsDB.update(req.body)
    .then((stats) => {
      res.locals.stats = stats;
      next();
    })
    .catch(err => next(err));
  },

  destroy(req, res, next) {
    statsDB.destroy(req.params.id)
    .then(() => next())
    .catch(err => next(err));
  },

  showStatsForm: (req, res) => {
    res.json({
      message: 'Stats form will be rendered',
    });
  },

};
