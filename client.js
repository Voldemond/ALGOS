document.addEventListener('DOMContentLoaded', function() {
    // Fetch the initial like count from the server and update the counter on page load
    fetch('/like')
      .then(response => response.json())
      .then(data => {
        const likeCount = data.count || 0;
        document.getElementById('likeCount').textContent = likeCount;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
    // Like button click event handler
    document.getElementById('likeButton').addEventListener('click', function() {
      // Send a POST request to the server to increment the like count
      fetch('/like', {
        method: 'POST'
      })
        .then(response => response.json())
        .then(data => {
          const likeCount = data.count || 0;
          document.getElementById('likeCount').textContent = likeCount;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  });
  