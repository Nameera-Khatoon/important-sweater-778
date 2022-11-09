import navbar from "./vaibhav-day-2/components/navbar.js";
let nav= document.getElementById("navbar")
nav.innerHTML=navbar()


const APIKIY = `sjYjaQYJg7twCbi4Lj3gr51ujbvUxshEKI3HsvYG5H4`

let gallery = document.getElementById("Scontainer") 


const data = async () => {
    try {
        let searchParam = document.getElementById("query").value;
        let res = await fetch(`https://api.unsplash.com/search/photos?client_id=${APIKIY}&query=${searchParam}&per_page=20`)
        let data = await res.json()
      
        let final_data = data.results
         console.log(final_data);
       display(final_data)
    } catch (error) {
        console.log(error);
    }
}

const display = (data) => {
    gallery.innerHTML = null;
    data.forEach((el) => {
        console.log('el',el)
        let div = document.createElement("div");
        div.setAttribute("id", "Tcard")

        const img = document.createElement('img');
        img.src = el.urls.small;
        img.setAttribute("class", "Tproimg");


        const heading = document.createElement("h5");
        heading.innerText = el.alt_description;
        heading.setAttribute("class", "Tproh");

        let Sdiv=document.createElement('div');
        Sdiv.setAttribute('class','SDiv')

        const bun = document.createElement("p")
        bun.innerText = "price 30$";

        
        Tsearch.addEventListener('click',()=>{

            SaveItems(el)

        })
        


        Sdiv.append(bun)
        div.append(img, heading, Sdiv)
        gallery.append(div)
    });
}

let buttonSearch = document.getElementById("Tsearch");
buttonSearch.addEventListener("click", function () {
    data  ()
})


