const express = require('express');
const cors = require('cors');
const bearsRouter = require('./routes/bear.js');

const app = express();
const PORT = 3000;

app.use(cors()); // Erlaubt Anfragen vom Frontend
app.use('/api/bears', bearsRouter);

app.listen(PORT, () => console.log(`Backend läuft auf http://localhost:${PORT}`));
