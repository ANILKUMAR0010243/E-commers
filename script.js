let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add item
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added!");
}
let user = localStorage.getItem("loginUser") ;
if (!user) {
    alert("Please login first!");
    window.location.href = "login.html";
   
}


function showCart() {
    let box = document.getElementById("cart-items");
    if (!box) return;

    let total = 0;
    box.innerHTML = "";

    cart.forEach((item, index) => {
        box.innerHTML += `
               <p> ${item.name} - $${item.price}
                <button onclick="removeFromCart(${index})">Remove</button>
            </p>
        `;
        total += item.price;
    });

    document.getElementById("total-amount").innerText = ("Total: $" + total);
}

// Remove item
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}
let inactivityTime = function () {
    let timer;
    let logoutTime = 1 * 60 * 1000; // 1 minute in milliseconds

    function logout() {
        alert("You have been logged out due to inactivity.");
        localStorage.removeItem("loginUser"); // Clear login info
        window.location.href = "login.html"; // Redirect to login
    }

    function resetTimer() {
        clearTimeout(timer);
        timer = setTimeout(logout, logoutTime);
    }

    // Reset timer on these events
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
    document.onclick = resetTimer;
    document.onscroll = resetTimer;
};

inactivityTime();



showCart();


