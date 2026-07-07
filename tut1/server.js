const express = require('express');
const app = express();
const router = require('./apiRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    req.message="Hello World";
    res.send(req.message);
});
app.use('/api',router);

app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(400).json({ error: err.message });
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
