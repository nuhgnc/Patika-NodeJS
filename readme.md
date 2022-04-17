# NodeJS eğitimi, NodeJS nedir dersi 6. ödev

## Koa.js ile web sunucumuzu yazalım.
Aşağıdaki adımları yapın
- koa paketini indirelim.
- index, hakkimda ve iletisim sayfaları oluşturalım.
- Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
- port numarası olarak 3000'i kullanalım.


Öncelikle koa ihtiyacımız olan koa ve koa-router modullerini indirdim

```console
PS D:\nuh\node\Patika-NodeJS> npm i koa koa-router

up to date, audited 46 packages in 994ms

4 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

>app.js içeriği

```javascript
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



```

uygulmamızı yazdıktan sonra başlatıyorum 

```console
node app
```

![Tarayıcı kontrol](https://i.ibb.co/4Zjb0n6/Ads-z.png)