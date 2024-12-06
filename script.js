
const posts = [
    { title: "Post One", content: "This is the content of post one.", category: "category1" },
    { title: "Post Two", content: "This is the content of post two.", category: "category2" },
    { title: "Post Three", content: "This is the content of post three.", category: "category1" },
];

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    const filter = document.getElementById('filterSelect').value;

    const filteredPosts = posts.filter(post => {
        const matchesQuery = post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query);
        const matchesFilter = filter ? post.category === filter : true;
        return matchesQuery && matchesFilter;
    });

    displayResults(filteredPosts);
});

function displayResults(posts) {
    const resultsDisplay = document.getElementById('resultsDisplay');
    
    resultsDisplay.innerHTML = '';
    
    if (posts.length === 0) {
        resultsDisplay.innerHTML = '<p>No results found.</p>';
        return;
    }

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        resultsDisplay.appendChild(postDiv);
    });
}