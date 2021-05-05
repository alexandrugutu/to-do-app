const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const moviesRouter = require('./movies');
const PORT = 3000;
const server = express();

server.use(cors({
    origin: '*'
}));

server.use(bodyParser.urlencoded({ extended: false}));
server.use(bodyParser.json());
server.use('/', moviesRouter);

// server.use((req, res, next) => {
//     console.log(req.body); //Object.create(null) 
//     next();
// });

// server.get('/', (req, res) => {
//     res.send('it works!');
// });


server.listen (PORT, () => {
    console.log(`Server started!! App listening at http://localhost:${PORT}/`)
});