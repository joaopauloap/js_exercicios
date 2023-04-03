var express = require('express');
const app = express();

app.use(express.static('.'))

console.log('Server Running on port 5000!')
app.listen(5000);