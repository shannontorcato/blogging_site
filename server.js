const express = require('express');
const path = require('path');
const fileupload = require('express-upload');

let initial_path = path.join(__dirname, "path");

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
})

app.listen("3000", () =>{
    console.log('listening.....');
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
})