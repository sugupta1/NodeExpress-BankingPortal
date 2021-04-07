const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/static',express.static(path.join(__dirname, 'public')));

const port = 3000

app.get('/', (req, res) => {
  res.render('index.ejs',{title: 'index'});
});

app.listen(port, () => {
  console.log('PS Project Running on port 3000!')
});