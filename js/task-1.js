const categories = document.querySelectorAll("#categories .item")
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    console.log(category.querySelector("h2").textContent);
    console.log(category.querySelectorAll("ul li").length);
})