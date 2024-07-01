const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/confirm', (req, res) => {
  const confirmationData = req.body;

  // Perform any operations with confirmationData here
  console.log('Received confirmation data:', confirmationData);

  // Send a response back to the client
  res.status(200).json({ message: 'Data received successfully', data: confirmationData });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
