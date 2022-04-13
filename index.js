// Diğer modulden dışarı aktardığım alan ve çevre hesaplama fonksiyonlarını require ve object destructing yöntemi ile çektim
const { circleArea, circleCircumference } = require ('./circle')

// Yukarıda yazdığım komut sayesinde diğer modulde yazdığım fonksiyonu burda çağırabiliyorum
circleArea(5)
circleCircumference(5)
