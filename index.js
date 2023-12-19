const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.port || 5002;

app.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
})