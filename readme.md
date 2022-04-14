# NodeJS eğitimi, NodeJS nedir dersi 4. ödev

## FS File System Modülü
Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.
- employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
- Bu veriyi okuyalım. (READ)
- Bu veriyi güncelleyelim.
- Dosyayı silelim.




>app.js içeriği

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
![alt](https://resimyukle.imageupload.workers.dev/7FnvAGAn_konsol1.png)

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