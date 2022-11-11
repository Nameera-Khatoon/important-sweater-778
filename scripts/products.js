const APIKIY = `sjYjaQYJg7twCbi4Lj3gr51ujbvUxshEKI3HsvYG5H4`
let gallery = document.getElementById("products")
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
        console.log('el',el);

        let div = document.createElement("div");
       
        let imgDiv= document.createElement("div");
        imgDiv.setAttribute("class", "image");

        const img = document.createElement('img');
        img.src = el.urls.small;
       
        imgDiv.append(img);

        let textDiv= document.createElement('div');

        const heading = document.createElement("p");
        heading.innerText = el.alt_description;
        
        const priceBtn = document.createElement("button");
        priceBtn.setAttribute ("id","priceBtn")
        
        let sTag= document.createElement("s");
        sTag.innerText = "MRP ₹30" ;
        priceBtn.append(sTag);

        const priceBtn2 = document.createElement("button");
        priceBtn2.setAttribute ("id","priceBtn")
        priceBtn2.innerText = "₹30";

        const bun = document.createElement("button");
        bun.setAttribute ("id","addBtn")
        bun.innerText="ADD"

        textDiv.append(heading,priceBtn,priceBtn2,bun);
        
       
        div.append(imgDiv, textDiv);
        gallery.append(div)
    });
}
let buttonSearch = document.getElementById("Tsearch");
buttonSearch.addEventListener("click", function () {
    data  ()
})

// Tsearch.addEventListener('click',()=>{
//     SaveItems(el)
// })