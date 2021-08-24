const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.static('public'));


const pokemonRoute = require('./routes/pokemon');


app.use('/api/pokemon', pokemonRoute);


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});


const start = async () => {
	try {
		await mongoose.connect(process.env.DB_URL, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true ,
            useFindAndModify: false
        });
        app.listen(PORT, (err) => {
            console.log(`> Ready on http://localhost:${PORT}`);
        });
	} catch(e) {
		console.log(e);
	}
}

start();