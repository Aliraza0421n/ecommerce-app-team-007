async function fetchData() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
let c = []
console.log(c)
fetchData();



let a = document.getElementById('card').innerHTML = `<div class="card product-card">
          <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Product 1">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">$59.99</p>
            <a href="#" class="btn btn-outline-primary w-100">Add to Cart</a>
          </div>
        </div>`




/*

0:
category: 
"men's clothing"
description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
id:1
image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
price:109.95
rating:{rate: 3.9, count: 120}
title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"

*/