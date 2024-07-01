const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/confirm', (req, res) => {
    const confirmationData = req.body;
    console.log('Received confirmation data:', confirmationData);
    // Perform your logic here with confirmationData
    res.json({ message: 'Data received successfully', data: confirmationData });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
