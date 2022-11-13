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
            let { id, item } = x;
            let search = obj.find((y) => y.id === id) || [];
            return `
            <div class="cart-item">
                <div class="img_desc">
                    <img width="20%" src="img/Fresh_Basket_Logo.jpg" alt="" />
                </div>
                <div class="cart-price">
                    <p>&#8377;{search.name}</p>
                </div>
                <div class="cart-price">
                    <p>&#8377;{search.Price}</p>
                </div>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="fa-solid fa-dash"></i>
                    <div id=${id} class="quantity">&#8377;{item}</div>
                    <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                </div>
                <div>
                    <p>&#8377;0</p>
                </div>
                <div>
                    <p>&#8377;{item*search.Price}</p>
                </div>
                <div>
                    <i onclick="removeItem(${id})" class="fas fa-trash-alt cart-remove"></i>
                </div>
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

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }

    generateCartItems();
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};


let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    TotalAmount();
};


let removeItem = (id) => {
    let selectedItem = id;
    basket = basket.filter((x) => x.id !== selectedItem.id);
    generateCartItems();
    TotalAmount();
    localStorage.setItem("data", JSON.stringify(basket));
};


let TotalAmount = () => {
    if (basket.length !== 0) {
        let amount = basket
            .map((x) => {
                let { item, id } = x;
                let search = obj.find((y) => y.id === id) || [];
                return item * search.price;
            })
            .reduce((x, y) => x + y, 0);
        label.innerHTML = `
      <h2>Total Bill : &#8377; ${amount}</h2>
      `;
    } else return;
};

TotalAmount()