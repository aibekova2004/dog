const breeds = document.querySelector(".breeds")
const breedsImg = document.querySelector(".breed-img")
const sel = document.querySelector(".select-opt")
const input = document.querySelector(".search-input")
const btn = document.querySelector(".search-btn")

function fetchAll() {
    axios (`https://dog.ceo/api/breeds/list/all`)
        .then((res) => {
            Object.keys(res.data.message).map((el)=> {
                breeds.innerHTML += `<button class="breed-btn btn btn-success m-1  ">${el}</button>`
                sel.innerHTML += `<option value="${el}" > ${el}</option>`
            })
        })
        .then(() => getBtn())
}

fetchAll()

function getBtn() {
    const buttons = document.querySelectorAll(".breed-btn")
    buttons.forEach(btn  => {
        btn.addEventListener("click",()=> {
            fetchImg(btn.innerHTML)
        })
    })
}
function fetchImg(API) {
    axios(`https://dog.ceo/api/breed/${API}/images/random`)
        .then((res) => {
            breedsImg.innerHTML = `<img src="${res.data.message}" alt=""/>`
        })
}
sel.addEventListener("change" ,(e) => {
    fetchImg(e.target.value)
})


input.addEventListener("change", (e) => {
    fetchImg(e.target.value)
})

btn.addEventListener("click", (e) => {
    fetchImg(e.target.value)
})

