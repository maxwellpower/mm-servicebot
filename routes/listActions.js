// routes/listActions.js
const express = require('express');
const router = express.Router();
const fs = require('fs');

function lines(data) {
    return data.split(/\r\n|\r|\n/).filter(s => s);
}

function listActions() {
    return fs.readdirSync('actions').reduce(
        (acc, filename) => {
            const data = fs.readFileSync('actions/'+filename, 'utf-8')
            acc[filename.slice(0,-4)] = lines(data);
            return acc;
        }, {});
}

router.get('/', async (req, res) => {
    return res.json(listActions());
});

module.exports = router;

