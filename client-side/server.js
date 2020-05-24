const express = require('express');
const serveStatic = require('serve-static');

const app = express();
app.use(serveStatic(`${__dirname}/dist`));
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Server for deployment running on port ${port}`);