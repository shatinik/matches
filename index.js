const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.setHeader('Content-Type', 'text/event-stream')

    const matches = [
        [{countryCode: 'DEU', score: 0}, {countryCode: 'POL', score: 0}],
        [{countryCode: 'BRA', score: 0}, {countryCode: 'MEX', score: 0}],
        [{countryCode: 'ARG', score: 0}, {countryCode: 'URY', score: 0}],
    ];
    let counter = 0;

    res.write('matches: ' + JSON.stringify(matches));

    var timer = setInterval(function () {
        matches[Math.round(Math.random() * 2)][Math.round(Math.random())].score += 1;
        res.write('matches: ' + JSON.stringify(matches));

        counter += 1;
        if (counter > 8) {
            clearInterval(timer);
            res.end();
        }
    }, 10000);

    res.on('close', () => clearInterval(timer));
})

app.listen(80)