"use strict"
// API - RESPONSE
const localStorageKey = "bookList";

async function getData () {
    const localStorageBooks = localStorage.getItem(localStorageKey);
    let list = localStorageBooks ? JSON.parse(localStorageBooks) : [];
     
    if (!list || list.length === 0) {
    try {
        const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=FZi6T0tvXiCmPowsTGjVWaT4r0XgcVnw')
        const data = await response.json()
        const results = data.results
        if (results && results.length >0){
            localStorage.setItem(localStorageKey, JSON.stringify(results))
            list = results
        }
        bool = true
    }
    catch (error) {
        console.log('Hubo un error')
    }
    
}
return list
}

async function startApp() {
    const booksData = await getData()

booksData.forEach(result => {
   
    const ourData = {name: result.list_name, old: result.oldest_published_date,new: result.newest_published_date, update: result.updated}


    const cardELEM = document.createElement("div")
    cardELEM.setAttribute("id","card");
    const h4ELEM = document.createElement("h4")
    h4ELEM.innerHTML = ourData.name

    const divINFO = document.createElement("div")
    divINFO.setAttribute("id","infoCard")
    for (let i = 0; i < 3; i++) {
        const pELEM = document.createElement("p") 
        pELEM.innerHTML = i === 0 ?
        ourData.old : i === 1 ?
        ourData.new : i === 2 ?
        ourData.update : "";
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

/* <h3 class="dash">DASHBOARD</h3>
            <h3 class="detail">DETAILS</h3>
            <h3 class="login">LOGIN</h3>
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>
*/
const navBarMenu = document.getElementById("navbar")

if(innerWidth <= 764){

    const nytImg = document.createElement("img")
    nytImg.setAttribute("id","imgNav")
    nytImg.setAttribute("src","../Assets/NYT.png")
    navBarMenu.append(nytImg)

    const bocataDesplegable = document.createElement("div")
    bocataDesplegable.setAttribute("id","bocata")

    const slice1 = document.createElement("div")
    slice1.setAttribute("id","slice1")
    const slice2 = document.createElement("div")
    slice2.setAttribute("id","slice2")
    const slice3 = document.createElement("div")
    slice3.setAttribute("id","slice3")

    bocataDesplegable.append(slice1)
    bocataDesplegable.append(slice2)
    bocataDesplegable.append(slice3)


    navBarMenu.append(bocataDesplegable)

    const divOptions = document.createElement("div")
    divOptions.setAttribute("id","options")

    const h3Dash = document.createElement("h3")
    h3Dash.setAttribute("class","dash")
    h3Dash.innerHTML = "DASHBOARD"
    const h3Details = document.createElement("h3")
    h3Details.setAttribute("class","detail")
    h3Details.innerHTML = "DETAILS"
    const h3Login = document.createElement("h3")
    h3Login.setAttribute("class","login")
    h3Login.innerHTML = "LOGIN"
   
    h3Dash.hidden = true
    h3Details.hidden = true
    h3Login.hidden = true
    
    divOptions.append(h3Dash)
    divOptions.append(h3Details)
    divOptions.append(h3Login)

    
    

    bocataDesplegable.onclick = () => {
        if(h3Dash.hidden === true){
            h3Dash.hidden = false
            h3Details.hidden = false
            h3Login.hidden = false
            bocataDesplegable.append(divOptions);
            slice1.remove()
            slice2.remove()
            slice3.remove()
            
        }else{
            h3Dash.hidden = true
            h3Details.hidden = true
            h3Login.hidden = true
            divOptions.remove()
            bocataDesplegable.append(slice1)
            bocataDesplegable.append(slice2)
            bocataDesplegable.append(slice3)
        }
    }





    


}