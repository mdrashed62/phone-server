const express = require('express'); 
const cors = require('cors');
const phones = require('./phones.json'); 
const app = express();
const port = 5000;

//middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('My phone server is running');
})

app.get('/phones', (req, res) => {
    res.send(phones);
})

app.get('/phones/:_id', (req, res) => {
    const id = parseInt(req.params._id)
    console.log('i need data for id:', id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone)
})

app.listen(port, () => {
    console.log(`Phone server is running on port: ${port}`)
})