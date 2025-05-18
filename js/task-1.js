const categoriesNumber = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesNumber.length}`);

categoriesNumber.forEach(category => {
    const titleText = category.querySelector("h2").textContent;
    const itemsLength = category.querySelectorAll("ul li").length;
    console.log(`Categoty: ${titleText}`);
    console.log(`Elements: ${itemsLength}`);
})