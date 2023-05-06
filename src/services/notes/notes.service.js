const db = require('../../models/index');
const AppError = require('../../utils/appError');
const { validateNote } = require('./notesValidation.service');

exports.findAllNotes = async () => {
  const notes = await db.note.findAll({
    where: {
      status: 'active',
    },
  });
  return notes;
};

exports.createNote = async (noteDate) => {
  const { error } = validateNote(noteDate);

  if (error) throw new AppError(error.details[0].message, 400);

  return db.note.create(noteDate);
};

exports.findOneNote = async (id) => {
  const note = db.note.finOne({
    where: {
      status: 'active',
      id,
    },
  });
  if (!note) throw new AppError(`Not with id: ${id} note found`, 404);

  return note;
};

exports.updateNote = async (note, noteData) => {
  const { error } = validateNote(noteData);

  if (error) throw new AppError(error.deatails[0].message);

  const noteUpdate = await note.update(noteData);

  return noteUpdate;
};

exports.deleteNote = async (note) => {
  await note.update({ status: 'disable' });
};
