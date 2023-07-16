const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Define the route for incrementing the like count
app.post('/like', (req, res) => {
  let likeCount = getLikeCount();
  likeCount++;
  updateLikeCount(likeCount);
  res.json({ count: likeCount });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
