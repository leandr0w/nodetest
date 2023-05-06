const express = require('express');
const noteController = require('../controllers/note.controller');

const router = express.Router();

router.route('/').get(noteController.findAll).post(noteController.create);

router
  .route('/:id')
  .get(noteController.findOne)
  .patch(noteController.update)
  .delete(noteController.delete);

module.exports = router;
