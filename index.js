const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');

const app = express();
dotenv.config();

app.use(express.json());

const mongoURI = process.env.MONGO_URI;

const db = async () => {
    await mongoose.connect(mongoURI)
        .then(() => {
            console.log('✅ MongoDB connected');
        })
        .catch((e) => {
            console.error('❌ MongoDB connection error:', e);
        });
};
db();

app.get('/', (req, res) => {
    res.send('Backend is running');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
