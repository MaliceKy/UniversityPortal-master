const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.get('/api/assignments', (req, res) => {
  const data = fs.readFileSync('./src/data/assignments.json', 'utf-8');
  res.send(data);
});

app.post('/api/assignments', (req, res) => {
  const newAssignment = req.body;
  const data = JSON.parse(fs.readFileSync('./src/data/assignments.json', 'utf-8'));

  data.push(newAssignment);
  fs.writeFileSync('./src/data/assignments.json', JSON.stringify(data, null, 2));
  res.status(200).json({ message: 'Assignment added successfully' });
});

app.post('/api/register', (req, res) => {
  const { courseId, userId } = req.body;
  const data = JSON.parse(fs.readFileSync('./src/data/courses.json', 'utf-8'));
  const course = data.find(c => c.courseID === courseId);
  if (course) {
    course.studentsEnrolledArray.push(userId);
    fs.writeFileSync('./src/data/courses.json', JSON.stringify(data, null, 2));
    res.status(200).json({ message: 'Registration successful' });
  } else {
    res.status(400).json({ message: 'Invalid course ID' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

