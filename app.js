const form = document.querySelector("#form");
const resultsContainer = document.querySelector("#resultsContainer");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchQuery = form.elements.searchInput.value;
    generateResults(searchQuery);
});

const generateResults = async (searchQuery) => {
    try {
        const res = await axios.get(`http://musicbrainz.org/ws/2/artist/?query=artist:${searchQuery}`);
        const results = res.data.artists;
        displayResults(results);
    } catch (err) {
        console.log(err);
    }
}

const displayResults = (results) => {
    for(let result of results) {
        const artistContainer = document.createElement("div");
        const artistHeader = document.createElement("h3");

        artistHeader.innerText = result.name;

        artistContainer.appendChild(artistHeader);

        resultsContainer.appendChild(artistContainer);
    }
}