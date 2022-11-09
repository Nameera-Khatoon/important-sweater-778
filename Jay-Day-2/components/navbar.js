function navbar () {
    return `<div id="navbar">
    <div id="logo">
        <img src="./img/fresh basket (1)-01.jpeg" alt="">
    </div>
    <div id="right">
        <div style="display: flex; border: 1px solid yellow; width: 100%; justify-content: space-between;">
            <div><span>Online Slots Availability</span></div>
            <p>|</p>
            <div><span>Fresh & Fast</span></div>
            <p>|</p>
            <div><span>Store Locator</span></div>
            <p>|</p>
            <div><span>Contact Us</span></div>
            <p>|</p>
            <div>
                <select name="" id="">
                    <option value="mumbai">Mumbai</option>
                    <option value="pune">Pune</option>
                    <option value="bengaluru">Bengaluru</option>
                    <option value="thane">Thane</option>
                    <option value="delhi ncr">Delhi NCR</option>
                    <option value="navi mumbai">Navi Mumbai</option>
                    <option value="kolkata">Kolkata</option>
                </select>
            </div>
            <div>
                <input type="text" readonly value="Enter Pincode">
            </div>
            <div style="display: flex;">
                <div>
                    <span>Login</span>
                </div>
                <div>
                    <span>|</span>
                    <span>Register</span>
                </div>
            </div>
        </div>
        <div style="display: flex;">
            <div style="width: 89%;">
                <div style=" width: 97%; border: 1px solid red;">
                    <div style=" width: 100%; border: none; display: flex;">
                        <input type="text" placeholder="Start shopping..."
                            style="text-align: center; color: rgb(147, 147, 147); height: 32px; width: 99%;">

                        <input type="image" id="btnSearch"
                            src="https://www.naturesbasket.co.in/Images/search-button.jpg"
                            style="border-width: 0px; margin-top: 0px; height:36px ;  ">
                    </div>
                    <!-- <div style="text-align: center;">
                        <h3 style="color: #b71761; font-weight: bold; margin-top: 10px;">Trending Searches</h3>
                        <ul>
                            <li>Organic</li>
                            <li>Fresh Artisinal Breads</li>
                            <li>Cold cuts & Seafood</li>
                            <li>Diabetic Friendly Foods</li>
                            <li>L'Exclusif</li>
                            <li>Healthy Alternatives</li>
                            <li>Birthdays & Anniversary Gift Hampers</li>
                            <li>Platters & Dips</li>
                            <li>Smoked Cheese</li>
                            <li>Ice crems & Desserts</li>
                            <li>Keto-Paleo</li>
                        </ul>
                    </div> -->
                </div>
            </div>
            <div style="display: flex;">
                <div>
                    <img src="https://img.icons8.com/ios-filled/40/85b93c/christmas-star.png" />
                </div>
                <div>
                    <img src="https://img.icons8.com/sf-regular/40/85b93c/shopping-cart.png" />
                    <span id="cartCount">0</span>
                </div>
            </div>
        </div>
    </div>
</div>`
};

export default navbar;