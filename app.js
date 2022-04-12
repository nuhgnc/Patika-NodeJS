const arguments = Number( process.argv.slice(2) ); // Konsola girilen 2. kelimeden sonrasını alır. Normalde dizi olarak alır fakat ben tek bir değer gireceğim için diziyi direkt Number metodu ile sayıya çeviriyorum. Birden fazla argümana ihtriycaım olsaydı işe yaramazdı

const alanHesapla = (yaricap) =>{ // Bir arrow fonksiyonu kurdum ve yaricap adında bir parametre ekledim
    const alan = Math.PI * yaricap*yaricap // Math.PI ile gelen sonucu, parametremin karesi ile çarptım ve bunu alan değişkenine aktardım.
    console.log (`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}'dır`) // Consola yarıcapı ve alanı yazdırdım.
}

alanHesapla(arguments); // 1. satırda alığım sonucu argüan olarak kullandım