const express = require('express');

const app = express();
app.use(express.static('public'));
const port = 3000;
const mainRouter = require('./routers/main');
app.use("/",mainRouter);
app.use("/about", mainRouter);



app.listen(port, () => console.log('Server running in port ' + port))