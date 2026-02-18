const posts = [
  { date: "2026-02-18", title: "First Post", file: "2026-02-18-first-post.html" },
];

const list = document.getElementById('post-list');

// Sort by date descending
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

if (posts.length === 0) {
  list.innerHTML = '<li class="empty-state">Nothing here yet. Soon, maybe.</li>';
} else {
  // Detect if we're on the posts index page (in /posts/ dir)
  const prefix = window.location.pathname.includes('/posts/') ? './' : 'posts/';
  list.innerHTML = posts.map(post => `
    <li>
      <a href="${prefix}${post.file}">${post.title}</a>
      <small>${post.date}</small>
    </li>
  `).join('');
}
