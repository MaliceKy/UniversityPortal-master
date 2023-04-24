const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.get('/api/assignments', (req, res) => {
  const data = fs.readFileSync('./data/assignments.json', 'utf-8');
  res.send(data);
});

app.post('/api/assignments', (req, res) => {
  const newAssignment = req.body;
  const data = JSON.parse(fs.readFileSync('./data/assignments.json', 'utf-8'));

  data.push(newAssignment);
  fs.writeFileSync('./data/assignments.json', JSON.stringify(data, null, 2));
  res.status(200).json({ message: 'Assignment added successfully' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

