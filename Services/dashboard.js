"use strict"
// API - RESPONSE
const localStorageKey = "bookList"; // NAME OF LOCALSTORAGE ITEM

async function getData () { // ASYNC FUNCTION / NYT API
    const localStorageBooks = localStorage.getItem(localStorageKey); // CHECK IF LOCALSTORAGE IS EMPTY
    let list = localStorageBooks ? JSON.parse(localStorageBooks) : [];
     
    if (!list || list.length === 0) {
    try {
        const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=FZi6T0tvXiCmPowsTGjVWaT4r0XgcVnw') // API CALL
        const data = await response.json() // RETURN A PROMISE AS JSON ( OBJECT )
        const results = data.results
        if (results && results.length > 0){
            localStorage.setItem(localStorageKey, JSON.stringify(results)) // SET LIST BOOKS NAMES AT LOCALSTORAGE
            list = results
        }
        /**
         * Corrección
         * bool es una variable que no existe
         */
        bool = true
    }
    catch (error) {
        console.log('Hubo un error')
    }
    
}
return list
}

async function startApp() { // CREATE DOM FUNCTION
    const booksData = await getData() // CALL TO API FUNCTION
booksData.forEach(result => { // FOREACH BOOK GENRE 1 CARD
   
    const ourData = {name: result.list_name, old: result.oldest_published_date,new: result.newest_published_date, update: result.updated}

    // DOM STRUCTURE
    const cardELEM = document.createElement("div")
    cardELEM.setAttribute("id","card");
    const h4ELEM = document.createElement("h4")
    h4ELEM.innerHTML = ourData.name

    const divINFO = document.createElement("div")
    divINFO.setAttribute("id","infoCard")
    for (let i = 0; i < 3; i++) {
        const pELEM = document.createElement("p") 
        pELEM.innerHTML = i === 0 ?
        "OLDEST: " + ourData.old : i === 1 ?
        "NEWEST: " + ourData.new : i === 2 ?
        "UPDATED: " + ourData.update : "";
        divINFO.append(pELEM);
    }

    const linkELEM = document.createElement("a");
    linkELEM.innerHTML = "READ MORE ▶"
    linkELEM.setAttribute('href', './details.html')
    cardELEM.append(h4ELEM)
    cardELEM.append(divINFO)
    cardELEM.append(linkELEM)
    const contentELEM = document.getElementById("content")
    contentELEM.append(cardELEM)
   
    
    linkELEM.onclick = () => {
        localStorage.setItem("bookGenre", h4ELEM.textContent)
    }

});
}

startApp()

// NAVBAR MENU

const liOptions = document.querySelectorAll("li");

liOptions[0].onclick = () => {
    location.replace("../index.html")
}
liOptions[1].onclick = () => {
    location.replace("./dashboard.html")
}
liOptions[2].onclick = () => {
    location.replace("./details.html")
}

if(localStorage.getItem("user")){
    liOptions[3].innerText = "LOG OUT"
}

liOptions[3].onclick = async () => {
    location.replace("./login.html")
}