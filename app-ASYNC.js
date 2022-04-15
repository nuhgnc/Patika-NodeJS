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