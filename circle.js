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