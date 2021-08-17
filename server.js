const express = require('express');
const app = express();
const { join } = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.static(join(__dirname, '/build')));

app.listen(PORT, () => console.log(`app listening on port: ${PORT}`));
