//https://github.com/alexmingoia/koa-router/issues/125

const path = require('path');
const views = require('koa-views');
const Koa = require('koa');
const app = module.exports = new Koa();
const Router = require('koa-router');
const router = new Router();

// setup views, appending .ejs
// when no extname is given to render()

app.use(views(path.join(__dirname, '/views'), { extension: 'ejs' }));

// dummy data

const user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};

// render

app.use(async function(ctx) {
  await ctx.render('alienLandingPage', { user });
});



if (!module.parent) app.listen(3000);