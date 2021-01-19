const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchQuery = form.elements.searchInput.value;
    console.log(searchQuery);
})