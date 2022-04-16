const http = require ('http'); // Node.js Kütüphanesinden http modulunu projeme dahil ettim
const port = 5000; // 

// Server adında değişken oluşturup içine serverin nasıl çalışacağını belirtiyorum
const server =  http.createServer((req,res) =>{
    const url = req.url;    // istek urleri url değişkneine aktardım
    if(url == '/'){ // Eğer istek ana '/' ise aşağıdaki cevabı istemciye gönderir
        res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
        res.write('<h2>Anasayfaya hosgeldiniz</h2>','utf-8')
    }else if (url == '/hakkimda'){  
        res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
        res.write('<h2>Hakkimda sayfasına hosgeldiniz</h2>','utf-8');
    }
    else if (url == '/iletisim'){
        res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
        res.write('<h2>İletisim sayfasına  hosgeldiniz</h2>')
    }
    else { // Yukardaki istek haricinde istek gelirse 404 sayfası ile karşılıyorum
        res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
        res.write('<h2>404 Not found</h2>');
    }
    console.log(url) 
    res.end(); // Gelen isteğe göre cevabı kullanıcıya yollluyorum. Burası olmaz ise kullanıcı ekranda birşey göremez 
})


server.listen(port, 'Localhost', () =>{ // oluşturduğu serverı burda başlatıyorum 
    console.log(`server ${port} portunda dinleniyor`)
})