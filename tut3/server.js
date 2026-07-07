const express = require('express');
const mongoose = require('mongoose');
const Account = require('./models/account');

const app = express();
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/my_database';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.post('/register', async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    Account.findOne({
        username: username,
        password: password
    })
    .then(data => {
        if(data){
            res.json("User already exists");
        }else{
            return Account.create({
                username: username,
                password: password
            });
        }
     })
     .then(data =>{
        res.json("User created successfully");
     })
     .catch(err => {
        res.status(500).json('Error creating user: ' + err.message);
    
});
});
app.post('/login',async (req,res,next) => {
    const username = req.body.username;
    const password = req.body.password;

    Account.findOne({
        username:username,
        password:password
    })
    .then(data =>{
        if(data){
            res.json("Login successful");
        }else{
            res.status(400).json("Invalid username or password");
        }

    })
    .catch(err =>{
        res.status(500).json('Error logging in: ' + err.message);
    })
})

app.get('/', (req, res, next) => {
  res.json('Home');
});

app.use((error, req, res, next) => {
  res.status(500).json({
    error: error.message,
  });
});

app.use('/account',require('./router/account'));
mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Cannot connect to MongoDB:', error.message);
  });
