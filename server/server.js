const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000; 
const fs = require('fs'); 

app.use(cors());

app.get('/api/data', (req, res) => {
    try {
      const data = fs.readFileSync('data.json', 'utf8');
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (error) {
      console.error('Error reading JSON file:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
