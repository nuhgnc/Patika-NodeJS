# NodeJS eğitimi, NodeJS nedir dersi 4. ödev

## FS File System Modülü
### Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.
- employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
- Bu veriyi okuyalım. (READ)
- Bu veriyi güncelleyelim.
- Dosyayı silelim.

### 2 farklı çözüm ürettim
- senkron ile her bir fonksiyonuy tek tek çağırdım
- asenkron tüm fonksiyonları tek bir fonksiyona toplayıp hata olmadan sırası ile çalıştırdım


>app-SYNC.js içeriği

```javascript
const fs = require('fs')

//------- FİLE SETTİNGS ------------ 
const settings = {
    fileName : 'employees.json',
}
//------ERROR MESAGES--------------
const messages = {
    writeError: 'dosya oluşmadı !',
    writeSuccess: 'Dosya oluştu',
    readEror : '----- Dosya okunamadı ! ---- \nBöyle bir dosya olmayabilir veya bozuk olabilir',
    appendError: '----- Veri Eklenemedi ! ---- \nBöyle bir dosya olmayabilir veya bozuk olabilir',
    appendSuccess : 'veri eklendi',
    unlinkError: '-----Silme işlemi başarısız---- \nBöyle bir doşya olmayabiilir',
    unlinkSuccess: 'başarılı bir şekilde silindi'
}

//Yeni doşya oluşturu ve içine veri yazar
const fs_write = (name, salary) =>{
    fs.writeFile( settings.fileName, `{"name": "${name}", "salary": ${salary}},`, 'utf-8' , (err) => {
        (err) ? console.log( messages.writeError ) : console.log(messages.writeSuccess)
    })
}

// Dosyayı okur ve konsola yazdırır
const fs_read =  () =>{
    fs.readFile( settings.fileName, 'utf-8' , (err, data) => {
        (err) ? console.log(messages.readEror) : console.log(data)
    })
}

//Mevcut dosyanın içine veri ekler 
const fs_append = ( name, salary ) =>{
    fs.appendFile( settings.fileName, `\n{"name": "${name}", "salary": ${salary}}`, 'utf-8' , (err) => {
        (err) ? console.log(messages.appendError) : console.log(messages.appendSuccess)
    })
}

//Belirlediğin dosyayı siler
const fs_unlink = () => {
    fs.unlink(settings.fileName, (err) =>{
        (err) ? console.log(messages.unlinkError) : console.log(messages.unlinkSuccess)
    } )
}



fs_write('Employee 1', 2000);
/*
fs_read();
fs_append('Emloyee 4', 3500);
fs_unlink();
*/

```


> #### ilk başta fs_write fonksiyonu çalışıyor ve employee.json adında bir doşya oluşuyor. Dosyanın içine ise parametre ile veriler veriler yazılıyor. Konsola ise işlemin başarılı olduğuna dair bilgi mesajı çıkıyor

```console
D:\nuh\node\Patika-NodeJS>node app.js
Dosya oluştu
```
![alt](https://i.ibb.co/SndQXpX/konsol1.png)

----------


> #### Oluşturduğumuz dosyaı konsol'dan görmek için fs_read() fonksiyonunu yazıyoruz ve konsulumuza gelen ekran şu şekilde
```console
D:\nuh\node\Patika-NodeJS>node app.js
Dosya oluştu

D:\nuh\node\Patika-NodeJS>node app.js
{"name": "Employee 1", "salary": 2000} // oluşturduğumuz verileri konsol'dan gördük

```
> #### Şimdi yeni bir veri ekleyelim. fs_append fonksiyonunu çağıralım ve içine parametre olarak girdiğimiz verileri yazdıralım. Uygulamayı çalıştırdığımızda konsola'a veriler eklendi yazacak
```console
D:\nuh\node\Patika-NodeJS>node app.js
Dosya oluştu

D:\nuh\node\Patika-NodeJS>node app.js
{"name": "Employee 1", "salary": 2000}

D:\nuh\node\Patika-NodeJS>node app.js
veri eklendi 
```
> #### Oluşturduğumuz employee.json dosyasını silmek silmek için fs_unlink() fonksiyonu çağıralım. Konsol aşağıdaki gibi olacaktır.

```console
D:\nuh\node\Patika-NodeJS>node app.js
Dosya oluştu

D:\nuh\node\Patika-NodeJS>node app.js
{"name": "Employee 1", "salary": 2000}

D:\nuh\node\Patika-NodeJS>node app.js
veri eklendi 

D:\nuh\node\Patika-NodeJS>node app.js
başarılı bir şekilde silindi 
```

> #### Mesela elimizde böyle bir dosya yokken tekrar silmeye çalışırsak aşağıdaki hatayı verecektir

```console
D:\nuh\node\Patika-NodeJS>node app.js
Dosya oluştu

D:\nuh\node\Patika-NodeJS>node app.js
{"name": "Employee 1", "salary": 2000}

D:\nuh\node\Patika-NodeJS>node app.js
veri eklendi

D:\nuh\node\Patika-NodeJS>node app.js
başarılı bir şekilde silindi

D:\nuh\node\Patika-NodeJS>node app.js
-----Silme işlemi başarısız---- 
Böyle bir doşya olmayabiilir                // böyle bir dosya olmadığı için hata verdi
```
----------
## ASENKRON VE OTOMATİK OLARAK ÇALIŞAN KOD YAPISI
#### Yukarda senkron bir şekilde çalışıyoredu her bir fonksiyonu tek tek elle giriyorduk. Burda ise run fonksiyonu çalıştığında birbirlerini bekleyen ve sıra ile işlem yapan bir uygulama yaptık.

> app-ASYNC.js

```javascript
const fs = require('fs')

//------- FİLE SETTİNGS ------------ 
const path = 'employees.json';

//------ERROR MESAGES--------------
const messages = {
    writeError: 'dosya oluşmadı !',
    writeSuccess: 'Dosya oluştu',
    readEror : '----- Dosya okunamadı ! ---- \nBöyle bir dosya olmayabilir veya bozuk olabilir.\n',
    readSuccess: 'Dosya içeriği : ',
    appendError: '----- Veri Eklenemedi ! ---- \nBöyle bir dosya olmayabilir veya bozuk olabilir.\n',
    appendSuccess : 'veri eklendi',
    unlinkError: '-----Silme işlemi başarısız---- \nBöyle bir doşya olmayabiilir\n',
    unlinkSuccess: 'başarılı bir şekilde silindi'
}

//DOSYA OLUŞTURMA İŞLEMİ
const fs_write = (name, salary) =>{
    return new Promise ((resolve, reject) =>{   // Fonksiyon çalıştığında bir promise döner 
        fs.writeFile( path, `{"name": "${name}", "salary": ${salary}},`, 'utf-8' , (err) => { // Bir yazma işlemi başlatırız
            if(err) reject(messages.writeError); // Eğer hata var ise Promise reject döner ve hata mesajı yazdırır
            resolve(messages.writeSuccess); // Eğer hata yok ise success mesajı yazıdırır
        })
    })
}

//DOSYA GÜNCELLEME İŞLEMİ
const fs_append = ( name, salary ) =>{
    return new Promise( (resolve, reject) =>{ // Fonksiyon çalıştığında bir promise döner 
        fs.appendFile(path, `{"name": "${name}", "salary": ${salary}},`,'utf-8', (err) =>{ // dosya güncelle metodu 
            if(err) reject(messages.appendError); // Eğer hata var ise Promise reject döner ve hata mesajı yazdırır
            resolve(messages.appendSuccess); // Eğer hata yok ise success mesajı yazıdırır
        })
    })
}

//DOSYA SİLME İŞLEMİ
const fs_unlink = () => {
    return new Promise((resolve, reject) =>{ // Fonksiyon çalıştığında bir promise döner 
        fs.unlink(path, (err) =>{   //dosya silme metodu
            if (err) reject(messages.unlinkError); // Eğer hata var ise Promise reject döner ve hata mesajı yazdırır
            resolve(messages.unlinkSuccess); // Eğer hata yok ise success mesajı yazıdırır
        })
    })
}

// DOSYA OKUMA İŞLEMİ
const fs_read = () =>{
    return new Promise((resolve,reject) => { // Fonksiyon çalıştığında bir promise döner 
        fs.readFile(path, 'utf-8', (err,data) =>{  //dosya okuma metodu
            if(err) reject(messages.readEror); // Eğer hata var ise Promise reject döner ve hata mesajı yazdırır
            resolve(messages.readSuccess + ' ' + data); // Eğer hata yok ise success mesajı yazıdırır
        })
    })
}

//-------------------------Promise All ile kullanımı-------------------------
/* Promise.all([fs_write(), fs_read(), fs_unlink(), fs_read(), fs_unlink(), fs_write(), fs_append(), fs_read(), fs_unlink()])
    .then(response => console.log(...response))
 */

// -------------- ASYNC - AWAİT KULLANARAK HER İŞLEMİ OTOMATİK YAPMASINI SAĞLAYAN FONSKSİYON ------------------
 const run = async () =>{
    await fs_write('Employee 1', 2000)
        .then(response => console.log(response)) // BU İŞLEM BİTTİKTEN SONRA BİR SONRAKİNE GEÇER
        .catch(err => console.log(err)) 

    await fs_read()
        .then( response => console.log(response)) // BU İŞLEM BİTTİKTEN SONRA BİR SONRAKİNE GEÇER
        .catch(err => console.log(err)) 

    await fs_unlink()
        .then( response => console.log(response)) // BU İŞLEM BİTTİKTEN SONRA BİR SONRAKİNE GEÇER
        .catch(err => console.log(err))

    await fs_read()
        .then( response => console.log(response)) // BU İŞLEM BİTTİKTEN SONRA BİR SONRAKİNE GEÇER
        .catch(err => console.log(err)) 

    await fs_unlink()
        .then( response => console.log(response)) // BU İŞLEM BİTTİKTEN SONRA BİR SONRAKİNE GEÇER
        .catch(err => console.log(err))

    await fs_write('Employee 1', 2000)
        .then(response => console.log(response)) // BU İŞLEM BİTTİKTEN SONRA BİR SONRAKİNE GEÇER
        .catch(err => console.log(err)) 

    await fs_append('Employee 2', 3500)
        .then(response => console.log(response)) // BU İŞLEM BİTTİKTEN SONRA BİR SONRAKİNE GEÇER
        .catch(err => console.log(err))
       
    await fs_read()
        .then( response => console.log(response)) // BU İŞLEM BİTTİKTEN SONRA BİR SONRAKİNE GEÇER
        .catch(err => console.log(err))

    await fs_unlink()
        .then( response => console.log(response))
        .catch(err => console.log(err))

}
run(); 
```

### Kısaca bahsetmek gerekirse her bir fonksiyona promise verdik hata durumunda hata mesajı ile karşıladık, hata olmadığı durumunda da succes mesajı veya yapılması gereken işlem ile karşıladık
### Promise da belirttiğim resolve ve reject işlemlerini .then ile resolve'yi .catch ile rejecti konsola yazdırdım.
### hem hata verecek hemde vermeyecek şekilde FS işlemlerimi sıraya aldığımda ve çalıştırdığımda aşağıdaki konsol ekranı çıkıyor.

```console
D:\nuh\node\Patika-NodeJS>node app-ASYNC
Dosya oluştu
Dosya içeriği :  {"name": "Employee 1", "salary": 2000},
başarılı bir şekilde silindi
----- Dosya okunamadı ! ---- 
Böyle bir dosya olmayabilir veya bozuk olabilir.

-----Silme işlemi başarısız---- 
Böyle bir doşya olmayabiilir

Dosya oluştu
veri eklendi
Dosya içeriği :  {"name": "Employee 1", "salary": 2000},{"name": "Employee 2", "salary": 3500},
başarılı bir şekilde silindi

```
