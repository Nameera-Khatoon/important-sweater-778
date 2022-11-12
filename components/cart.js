totalPrice();
function totalPrice() {
    let toatl = 0;
    let items = JSON.parse(localStorage.getItem("items"));

    for (let i = 0; i < items.length; i++) {
        // let quantity = 
        total += Number(items[i].price);
    }

    let h2 = document.getElementsByClassName("total-price");
    h2.innerText = total;
}


let label = document.getElementById("label");
let cartContainer = document.getElementById("cart-container");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculaton = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((X) => X.item).reduce((x, y) => x + y, 0);
};

calculaton();

let generateCartItems = () => {
    if (basket.length !== 0) {
        return (cartContainer.innerHTML = basket.map((x) => {
            return `
            <div class = "cart-item">
            <img width="20%" src="" alt="" />
            </div>
            `;
        })
        .join(""));
    }
    else {
        cartContainer.innerHTML = ``;
        label.innerHTML = `
    <h2>RESTOCK YOUR BASKET</h2>
    `;
    }
}

generateCartItems();
