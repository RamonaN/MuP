const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('code'));
app.use(express.static('images'))
app.use(express.static("scripts"));

app.listen(port, () => console.log(`listening on port ${port}!`));