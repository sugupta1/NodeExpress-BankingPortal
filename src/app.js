const fs = require('fs');
const path = require('path');
const express = require('express');
const { title } = require('process');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000
const accountData = fs.readFileSync(src/json/accounts.json,{encoding: 'utf8'});
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync(src/json/users.json,{encoding: 'utf8'});
const users = JSON.parse(userData);


app.get('/', (req, res) => {
    res.locals = {title: 'account summary',accounts: accounts};
    res.render('index',{title: 'Index'});
});
app.get('/savings', (req, res) => {
    res.render('account',{account: accounts.savings});
});

app.listen(port, () => {
  console.log('PS Project Running on port 3000!')
});