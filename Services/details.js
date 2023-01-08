"use strict"

const localStorageKey = "bookGenre";

async function getData2 () {
    let list = localStorage.getItem(localStorageKey);
    try {
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/${localStorage.getItem(localStorageKey)}.json?api-key=FZi6T0tvXiCmPowsTGjVWaT4r0XgcVnw`)
        const data = await response.json()
        const results = data.results.books
        /**
         * Corrección
         * Debemos eliminar estos comentarios
         */
        // if (results && results.length >0){
        //     localStorage.setItem(localStorageKey, JSON.stringify(results))
        //     list = results
        // }
        // console.log(data.updated)
        return results
    }
    catch (error) {
        console.log('Hubo un error')
    }

}

async function startApp() {
    const booksData = await getData2()
    console.log(booksData)

booksData.forEach(result => {
   
    const ourData = {name: result.title, url: result.book_image, onList: result.weeks_on_list, description: result.description}

    console.log(ourData)



    const bookName = document.createElement('div')
    bookName.setAttribute('class','detailName')
    bookName.innerHTML= ourData.name

    const bookUrl = document.createElement('img')
    bookUrl.setAttribute('class','detailUrl')
    bookUrl.setAttribute('src', ourData.url)

    const bookLista = document.createElement('p')
    bookLista.setAttribute('class','detailLista greyBook')
    bookLista.innerHTML= 'Weeks on list: ' + ourData.onList

    const bookDescription = document.createElement('p')
    bookDescription.setAttribute('class','detailDescription greyBook')

    if(ourData.description === ""){
        bookDescription.innerHTML= "Descripción no disponible..."
    }else{
        bookDescription.innerHTML= ourData.description
    }
    

    const sonDetail = document.createElement('div')
    sonDetail.setAttribute('class', 'detail')
    sonDetail.append(bookName)
    sonDetail.append(bookUrl)
    sonDetail.append(bookLista)
    sonDetail.append(bookDescription)
    console.log(ourData.bookName)
    const detail = document.getElementById('textDetail')
    detail.append(sonDetail)

   
});

        const titleELEM = document.getElementById("title")
        const bookType = document.createElement("h2")
        bookType.setAttribute("class","greyBook")
        bookType.innerHTML = localStorage.getItem(localStorageKey)
        titleELEM.append(bookType)
        
 }

startApp() 




// NAV LINKS

const option1 = document.querySelector(".option1")
option1.onclick = () => {
    location.replace("../index.html")
}
const option2 = document.querySelector(".option2")
option2.onclick = () => {
    location.replace("./dashboard.html")
}
const option3 = document.querySelector(".option3")
option3.onclick = () => {
    location.replace("../details.html")
}
const option4 = document.querySelector(".option4")
option4.onclick = () => {
    location.replace("./login.html")
}

// LOADER 

window.onload = () =>{
    const loader = document.getElementById("loader")
    const container = document.getElementById("container")
    let aux = 0
    let idInterval = setInterval(() => {
        aux++
        if(aux === 2){
            loader.style.display = "none"
            clearInterval(idInterval)
        }
    },500)
    container.style.display = "flex"
}

