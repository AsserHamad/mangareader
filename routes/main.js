const express = require('express');
const router = express.Router();
const fs = require('fs')
let variables = [];

router.get('/', (req, res, next) => {
    let data =[];
    fs.readdirSync('./public/chapters').forEach(file => {
        let volume = file;
        fs.readdirSync(`./public/chapters/${file}`).forEach(_file => {
            data.push(`${volume}/${_file}`);
        });
    });
    res.render('index', {
        title: 'Mamma Mia Manga Reader',
        data
    })
});

module.exports = router;