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