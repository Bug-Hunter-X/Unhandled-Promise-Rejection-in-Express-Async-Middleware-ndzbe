const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    // Error handling is missing here.  The error is swallowed!
    console.error('Error:', error);
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  // In a real app, this could be database query, file read, etc.
  if (Math.random() < 0.5) {
    throw new Error('Something went wrong!');
  } else {
    return 'Operation succeeded';
  }
}