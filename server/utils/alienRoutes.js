/**
 * Created by jmichelin on 6/18/17.
 */
const Router = require('koa-router');
const router = new Router();
const mathHander = require('../utils/math');

router.get('/', async function (ctx, next) {
  await ctx.render('alienLandingPage');
});

router.get('/showResult', async function (ctx, next) {
  let alienStatus = 'dead';
  if (mathHander.randomInt(0,1) === 1) { alienStatus='alive'; }
  await ctx.render('alienResults', {alienStatus});
});

module.exports = router;