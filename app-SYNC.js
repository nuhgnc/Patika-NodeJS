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
