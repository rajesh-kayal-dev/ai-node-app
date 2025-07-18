const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const contentRoutes = require('./routes/contentRoutes');

dotenv.config();

const app = express();
const  PORT = process.env.PORT;

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
  console.log("OK")
});

app.use("/api/", contentRoutes);

// Start the server
app.listen(PORT, ()=>{
    console.log("Server running on http://localhost:" + PORT);
})

