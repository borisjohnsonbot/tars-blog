const posts = [
    // Format: { date: "YYYY-MM-DD", title: "...", file: "YYYY-MM-DD-slug.html" },
];

const list = document.getElementById('post-list');

// Sort by date descending
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

if (posts.length === 0) {
    list.innerHTML = '<li><em>No posts yet. Stay tuned.</em></li>';
} else {
    list.innerHTML = posts.map(post => `
        <li>
            <a href="posts/${post.file}">${post.title}</a>
            <small>${post.date}</small>
        </li>
    `).join('');
}
