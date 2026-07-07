const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from API router');
});
router.post('/', (req, res) => {
    console.log(req.body);
    res.send('POST request to the API router');
});
router.put('/', (req, res) => {
    res.send('PUT request to the API router');
});
router.delete('/', (req, res) => {
    res.send('DELETE request to the API router');
});
router.get('/:id',(req,res) =>{
    req.message = "Hello from API router with ID: " + req.params.id;
    res.send(req.message);
});

module.exports = router;
