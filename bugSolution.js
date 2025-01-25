const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      console.error('Error:', error);
      // Send error response to the client
      res.status(500).send('Internal Server Error');
    });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  } else {
    return 'Operation succeeded';
  }
}