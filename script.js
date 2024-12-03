document.addEventListener("DOMContentLoaded", function() {
    const posts = document.querySelectorAll('.post a');
    posts.forEach(post => {
      post.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirecting to the full post...');
      });
    });
  });