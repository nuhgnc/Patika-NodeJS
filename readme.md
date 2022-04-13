# NodeJS eğitimi, NodeJS nedir dersi 3. ödev

## Daire Modüler Dosyası
- Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
- module.exports yöntemi ile fonksiyonları oluştururken export ediniz.


- require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.




>circle.js dosyası

```javascript
//Aldığı parametre ile Alan hesaplaması yapan ve konsola yazdıran fonksiyon
const circleArea = (number) =>{
    console.log(Math.PI * number * number)
}
//Aldığı parametre ile çevre hesaplaması yapan ve konsola yazdıran fonksiyon
const circleCircumference = (number) =>{
    console.log(2 * Math.PI * number)
}

//Alan ve çevre hesaplaması yapan fonksiyonları dışarı aktarır
module.exports =  {circleArea, circleCircumference}
```

>index.js dosyası

```javascript
// Diğer modulden dışarı aktardığım alan ve çevre hesaplama fonksiyonlarını require ve object destructing yöntemi ile çektim
const { circleArea, circleCircumference } = require ('./circle')

// Yukarıda yazdığım komut sayesinde diğer modulde yazdığım fonksiyonu burda çağırabiliyorum
circleArea(5)
circleCircumference(5)

```

> #### Konsol'da çıkan sonuç 

```console
D:\nuh\node\Patika-NodeJS>node index.js
78.53981633974483
31.41592653589793
```