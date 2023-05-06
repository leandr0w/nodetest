const catchAsync = require('../utils/catchAsync');
const noteService = require('../services/notes/notes.service');

exports.findAll = catchAsync(async (req, res, next) => {
  const notes = await noteService.findAllNotes();

  res.status(200).json({
    status: 'success',
    notes,
  });
});

exports.create = catchAsync(async (req, res, next) => {
  await noteService.createNote(req.body);

  return res.status(200).json({
    status: 'success',
  });
});

exports.findOne = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const note = await noteService.findOneNote(id);

  return res.status(200).json({
    status: 'success',
    note,
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const note = await noteService.findOneNote(id);

  await noteService.updateNote(note, req.body);

  return res.status(200).json({
    status: 'success',
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const note = await noteService.findOneNote(id);

  await noteService.deleteNote(id);

  return res.status(200).json({
    status: 'success',
    note,
  });
});
