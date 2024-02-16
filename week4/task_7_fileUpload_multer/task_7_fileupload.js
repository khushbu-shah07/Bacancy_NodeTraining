/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
const express = require('express');

const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = 3000;

app.use('/api/v1/', apiRoutes);


app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

