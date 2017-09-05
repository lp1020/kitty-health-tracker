const statsRouter = require('express').Router();;
const controller = require('../controllers/statsController');
const views = require('../controllers/viewController');
const gifs = require('../controllers/giphyController');

statsRouter.get('/:id/edit', controller.getOne, views.showEditForm, views.show404);

statsRouter.get('/new', views.showAddForm);

statsRouter.route('/:id')
  .get(controller.getOne, views.showOne, views.show404)
  .put(controller.update, views.handleUpdate, views.show406)
  .delete(controller.destroy, views.handleDelete, views.show404);

  statsRouter.route('/')
    .get(controller.index, controller.averages, views.showStats, views.show404)
    .post(controller.create, views.handleCreate, views.show406);


module.exports = statsRouter;
