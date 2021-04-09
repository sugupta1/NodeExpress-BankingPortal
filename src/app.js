const fs = require('fs');
const path = require('path');
const express = require('express');
const { title } = require('process');
const accountRoutes = require('./routes/accounts.js');
const servicesRoutes = require('./routes/services.js');

const{ accounts, users, writeJSON} = require('./data');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));

const port = 3000;


app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts: accounts }));

app.use('/account',accountRoutes);
app.use('/services',servicesRoutes);

app.get('/profile', (req, res) => {
    res.render('profile',{user: users[0]});
});

app.listen(port, () => {
  console.log('PS Project Running on port 3000!')
});