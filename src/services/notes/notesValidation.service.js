const Joi = require('joi');

const noteSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

exports.validateNote = (note) => {
  return noteSchema.validate(note, { abortEarly: true });
};
