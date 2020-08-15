// Import dependencies.
const path = require('path');

// Importing modules
const cat = require('./routes/cat');
const dog = require('./routes/dog');

// Initialise express app.
const express = require('express');
const app = express();
const port = 3333


// View engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

// Router modules
app.use('/cat', cat); // For cat
app.use('/dog', dog); // For dog

// Server listen
app.listen(port, () => {
    console.log(`I am running on http://localhost:${port}`)
});
