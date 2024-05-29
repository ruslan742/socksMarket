const { Meeting } = require('../../db/models');

module.exports = async (req, res, next) => {
  const meeting = await Meeting.findByPk(req.params.id);

  if (!meeting) return res.status(400).json({ message: 'No meeting found' });

  if (meeting.ownerId !== res.locals.user?.id) {
    return res.status(403).json({ message: 'Not your meeting!' });
  }

  return next();
};
