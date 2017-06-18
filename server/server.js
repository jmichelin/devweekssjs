//https://github.com/alexmingoia/koa-router/issues/125
const path = require('path');
const views = require('koa-views');
const Koa = require('koa');
const app = module.exports = new Koa();
const Router = require('koa-router');
const router = new Router();


app.use(views(path.join(__dirname, '/views'), { extension: 'ejs' }));

const alienRoutes = require('./utils/alienRoutes');

app
  .use(alienRoutes.routes())
  .use(router.routes())
  .use(router.allowedMethods());


if (!module.parent) app.listen(3000);