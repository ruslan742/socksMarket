const express = require('express');
const { Meeting, User, Usermeeting } = require('../../db/models');
const { verifyAccessToken } = require('../middlewares/verifyTokens');
const checkOwner = require('../middlewares/checkOwner');
const usermeeting = require('../../db/models/usermeeting');

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    const meetings = await Meeting.findAll();
    res.json(meetings);
  })
  .post(verifyAccessToken, async (req, res) => {
    const newMeeting = await Meeting.create({
      ...req.body,
      ownerId: res.locals.user?.id,
    });
    router.route('/:id').delete(verifyAccessToken, checkOwner, async (req, res) => {
      await Meeting.destroy({ where: { id: req.params.id } });
      res.sendStatus(200);
    });
  });
router.get('/account', verifyAccessToken, async (req, res) => {
  const data = await Meeting.findAll({
    include: {
      model: User,
      where: { id: res.locals.user.id },
      through: {
        model: Usermeeting,
        attributes: [],
      },
    },
  });
  // const result=await Meeting.findAll({where:{id:}})
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa', data);
  res.json(data);
  // {
  //   where: { userId: res.locals.user.id },
  // }
  //  const result=await Meeting.findAll({where:{}})
  // router.route('/:id').delete(verifyAccessToken, checkOwner, async (req, res) => {
  //   await Meeting.destroy({ where: { id: req.params.id } });
  //   res.sendStatus(200);
  // });
});
router.post('/:id/add', verifyAccessToken, async (req, res) => {
  console.log(req.params);
  console.log(res.locals);
  const data = await Usermeeting.create({ meetingId: req.params.id, userId: res.locals.user.id });

  res.json(data);
});
router.delete('/account/:id/delete', verifyAccessToken, async (req, res) => {
  console.log(req.params);
  console.log(res.locals);
  const data = await Usermeeting.destroy({ where: { meetingId: req.params.id, userId: res.locals.user.id } });

  res.json(data);
});
// router.route('/:id').delete(verifyAccessToken, checkOwner, async (req, res) => {
//   await Tiger.destroy({ where: { id: req.params.id } });
//   res.sendStatus(200);
// });
module.exports = router;
