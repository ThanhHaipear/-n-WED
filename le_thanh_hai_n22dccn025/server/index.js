const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let contacts = [];

app.get('/api/contacts', (req, res) => {
    res.json(contacts);
});

app.post('/api/contacts', (req, res) => {
    const newContact = { ...req.body, id: Date.now() };
    contacts.push(newContact);
    res.status(201).json(newContact);
});

app.listen(3000, () => console.log(" API running at http://localhost:3000"));
