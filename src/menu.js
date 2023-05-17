const menuList = [
    "Burger - $9.99 - Juicy beef patty with melted cheese and fresh veggies",
    "Pasta - $12.99 - Classic Italian pasta with rich tomato sauce and herbs",
    "Salad - $8.99 - Fresh greens, colorful vegetables, and tangy dressing",
    "Pizza - $11.99 - Thin crust pizza topped with a variety of savory ingredients",
    "Steak - $19.99 - Grilled tender steak served with roasted vegetables",
    "Chicken Sandwich - $7.99 - Grilled chicken breast with lettuce, tomato, and mayo",
    "Sushi Roll - $9.99 - Assortment of fresh seafood rolled in sushi rice",
    "Fish Tacos - $10.99 - Crispy fish fillet with salsa and tangy sauce in soft tortillas",
    "Veggie Wrap - $8.99 - Assorted veggies and hummus wrapped in a tortilla",
    "Shrimp Stir-fry - $12.99 - Sautéed shrimp with mixed vegetables and flavorful sauce",
    // Add more menu items here
];


const ul = document.createElement("ul");
menuList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
});





let menuPage = document.createElement('div')
menuPage.className = 'menuPage'
menuPage.textContent = ''
menuPage.appendChild(ul)
document.body.appendChild(menuPage);
export {menuPage};

