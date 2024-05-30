// const { Sock } = require('../../db/models');

// module.exports = async (req, res, next) => {
//   const sock = await Sock.findByPk(req.params.id);

//   if (!sock) return res.status(400).json({ message: 'No sock found' });

//   if (sock.ownerId !== res.locals.user?.id) {
//     return res.status(403).json({ message: 'Not your sock!' });
//   }

//   return next();
// };
