const user = document.querySelector(".user")


axios(`https://jsonplaceholder.typicode.com/users`)
    .then((us) => {
        console.log(us.data)
        us.data.map((el) => {
            user.innerHTML += `<div class="card my-4 py-2 mx-1 d-flex flex-wrap nav-fill gap-2 p-6 small alert alert-success  " style="width: 400px;">    
     <img src="./img/149071.png" width="200px" height="200px" alt="img">        <h4> Id : ${el.id}</h4>       <h4> Name : ${el.name}</h4>       <h4> Username : ${el.username}</h4>       <h4> Website : ${el.website}</h4>       <a class="phon"  href="tel:+996"> Phone : ${el.phone} </a ></div>`    })
    })