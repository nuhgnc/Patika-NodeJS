# NodeJS eğitimi, NodeJS nedir dersi 2. ödev

## Node.JS Komut Satırı Kullanımı
#### Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.


```javascript
const arguments = Number( process.argv.slice(2) ); // Konsola girilen 2. kelimeden sonrasını alır. Normalde dizi olarak alır fakat ben tek bir değer gireceğim için diziyi direkt Number metodu ile sayıya çeviriyorum. Birden fazla argümana ihtriycaım olsaydı işe yaramazdı

const alanHesapla = (yaricap) =>{ // Bir arrow fonksiyonu kurdum ve yaricap adında bir parametre ekledim
    const alan = Math.PI * yaricap*yaricap // Math.PI ile gelen sonucu, parametremin karesi ile çarptım ve bunu alan değişkenine aktardım.
    console.log (`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}'dır`) // Consola yarıcapı ve alanı yazdırdım.
}

alanHesapla(arguments); // 1. satırda alığım sonucu argüan olarak kullandım
```
#### Terminali alltaki tuş kombinasyonu ile açtım 
```console
 ctrl + shift + "
```
Bulunduğum konumun .js dosymın konumu olduğundan emin oldum 
```console
 D:\nuh\node\Patika-NodeJS\odev_1>
```
Daha sonra oluşturduğum javascipt dosyasını aşağıdaki kod ile çalıştırdım
```console
  D:\nuh\node\Patika-NodeJS\odev_1>node app.js 10
```
```console
D:\nuh\node\Patika-NodeJS\odev_1>node app.js 10
```
Aynen benim javascript dosyamda konsola yazdırmak istediğim gibi bir çıktı verdi
```console
D:\nuh\node\Patika-NodeJS\odev_1>node app.js 10
Yarıçapı 10 olan dairenin alanı: 314.1592653589793'dır
```
