const form = document.querySelector("#form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchQuery = form.elements.searchInput.value;
    const res = await axios.get(`http://musicbrainz.org/ws/2/artist/?query=artist:${searchQuery}`);
    const artists = res.data.artists;
    console.log(artists);
})