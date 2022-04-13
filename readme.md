# NodeJS eğitimi, NodeJS nedir dersi 2. ödev

## Post Sıralama ve Post Ekleme
#### Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.


```javascript
// elimde bulunan postlar
const posts = [{title:'post1', img:'img1'},{title:'post2', img:'img2'}] 

// Postları listelemek için oluşturduğum fonksiyon 
const listPost = () =>{
    posts.map(items => {
        console.log(`${items.title}  ${items.img}`)
    })
    console.log('-----------------')
}
listPost();//Postları listele

// Buda callBack fonksiyonu kulladnım postları ekledikten sonra callback fonksiyonu çağırıyor bu fonksiyonu da addPost parametresi olarak çağırıyor
const addPost = (postName,postImg,callback) =>{
    posts.push({title:postName,img:postImg})
    callback();
}
//Yeni post ekle ve postları listele
addPost('post3','img3',listPost)
```
> #### Konsol'da çıkan sonuç 

```console
D:\nuh\node\Patika-NodeJS>node app.js
post1  img1
post2  img2
-----------------
post1  img1
post2  img2
post3  img3
-----------------
```