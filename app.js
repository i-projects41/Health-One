// app.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files in the "public" directory
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Route to handle form submission
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Save user details to a local file
  const userData = `Username: ${username}, Email: ${email}, Password: ${password}\n`;
  fs.appendFileSync('users.txt', userData, (err) => {
    if (err) throw err;
  });

  res.send('Signup details saved successfully!');
});
app.post('/login', (req, res) => {
    const { username } = req.body;
  
    // Read the users.txt file and check if the username exists
    fs.readFile('users.txt', 'utf8', (err, data) => {
      if (err) throw err;
  
      // Check if the username exists in the file
      const userExists = data.includes(`Username: ${username},`);
  
      if (userExists) {
        res.send('Login successful!'); // Username exists, allow login
      } else {
        res.send('Username not found. Please sign up first.'); // Redirect to sign-up page
      }
    });
  });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
