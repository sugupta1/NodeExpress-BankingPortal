const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
app.set('views', path.join(__dirname, 'views'));
console.log(__dirname);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})