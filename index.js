const express = require('express');
const helmet = require('helmet');

const server = express();
const PORT = process.env.PORT || 5000;

server.use(helmet());
server.use(express.json());

server.get('/', (req,res) => {
    res.status(200).json({ hello: 'Waddup!' });
});

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));