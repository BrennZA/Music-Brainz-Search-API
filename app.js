const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchQuery = form.elements.searchInput.value;
    generateResults(searchQuery);
});

const generateResults = async (searchQuery) => {
    try {
        const res = await axios.get(`http://musicbrainz.org/ws/2/artist/?query=artist:${searchQuery}`);
        const artists = res.data.artists;
        console.log(artists);
    } catch (err) {
        console.log(err);
    }
}