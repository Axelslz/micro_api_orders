const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const orderRoutes = require('./routes/OrderRoutes');

const app = express();
const port = 3000;

// Habilitar CORS
app.use(cors());

app.use(bodyParser.json());
app.use('/api', orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
