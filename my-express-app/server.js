const express = require('express');
const app = express();
const port = 3000;

// In-memory like count variable
let likeCount = 0;

// Define the route for incrementing the like count
app.post('/like', (req, res) => {
  likeCount++;
  res.json({ count: likeCount });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
