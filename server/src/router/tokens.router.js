const { Router } = require('express');
const generateTokens = require('../utils/generateTokens');
const { verifyRefreshToken } = require('../middlewares/verifyTokens');
const cookiesConfig = require('../config/cookiesConfig');

const router = Router();

router.get('/refresh', verifyRefreshToken, (req, res) => {
  const { accessToken, refreshToken } = generateTokens({
    user: res.locals.user,
  });

  return res
    .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
    .json({ user: res.locals.user, accessToken });
});

module.exports = router;
