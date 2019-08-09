const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes'); 

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
});

const app = express();

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello');
});
app.use(employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT - ${PORT}`);
});