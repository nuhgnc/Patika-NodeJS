const Koa = require('koa'); // Koa kütüphanesini projeme dahil ettim
const Router = require('koa-router'); // Koa router kütüphanesini projeme dahil ettim 

const app = new Koa(); 
const router = new Router();

router.get ("/", (ctx) =>{
  ctx.body = '<h1> İndex sayfasına hoşgeldiniz <h1>';
  ctx.status = 200;
})

router.get ("/index", (ctx) =>{
  ctx.body = '<h1> İndex sayfasına hoşgeldiniz <h1>';
  ctx.status = 200;
});

router.get ("/hakkimda", (ctx) =>{
  ctx.body = '<h1> hakkımda sayfasına hoşgeldiniz <h1>';
  ctx.status = 200;
})

router.get ("/iletisim", (ctx) =>{
  ctx.body = '<h1> iletisim sayfasına hoşgeldiniz <h1>';
  ctx.status = 200;
})

const port = 3000

app.use(router.routes()).use(router.allowedMethods());
app.listen(port, () =>{
  console.log(`Server ${port} portunda dinleniyor`)
});

