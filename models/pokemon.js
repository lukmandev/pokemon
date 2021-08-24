const mongoose = require('mongoose');
const { Schema, model} = require('mongoose');


const schema = new Schema({
	title: {type: String, required: true},
	description: {type: String, required: true},
	img: {type: String, required: true}
});


module.exports = model('pokemon', schema, 'pokemons');