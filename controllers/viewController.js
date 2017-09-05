module.exports = {

  show404(err, req, res, next) {
    res.sendStatus(404);
  },

  show406(err, req, res, next) {
    res.sendStatus(406);
  },

  showStats(req, res) {
    // finally render our index, and pass the response url to it
      res.render('stats/stats-index', {
        data: res.locals.stats,
        avgData: res.locals.avgStats,
        logoName: 'Kitty Health Tracker',
      })

},

  showOne(req, res) {
    res.render('stats/stats-single', {
      data: res.locals.stats,
      logoName: 'Kitty Health Tracker',
    });
  },

  showAddForm(req, res) {
    res.render('stats/stats-add', {
    logoName: 'Kitty Health Tracker',
    });
  },

  showEditForm(req, res) {
    res.render('stats/stats-edit', {
      data: res.locals.stats,
      logoName: 'Kitty Health Tracker',
    });
  },

  handleCreate(req, res) {
    res.redirect('/stats');
  },

  handleUpdate(req, res) {
      res.render('stats/stats-single', {
       data: res.locals.stats,
       logoName: 'Kitty Health Tracker',
      });
  },

  handleDelete(req, res) {
    res.redirect('/stats');
  },
};
