const Pokemon = require('../models/pokemon');


class PokemonController{
	async getPokemons(req, res){
		try {
			const pokemons = await Pokemon.find().sort({_id: -1}).exec();
			return res.status(200).json({
				pokemons
			});
		} catch(e) {
			return res.status(500).end();
		}
	}
	async addNewPokemon(req, res){
		const { title, description, img } = req.body;
		try {
			await Pokemon.create({title, description, img});
			return res.status(200).end();
		} catch(e) {
			return res.status(500).end();
		}
	}
	async deletePokemon(req, res){
		const { _id } = req.body;
		try {
			await Pokemon.deleteOne({_id});
			return res.status(200).end();
		} catch(e) {
			return res.status(500).end();
		}
	}
	async getGroupPokemons(req, res){
		const { data } = req.body;
		const groupData = {...data};
		try {
			const pokemons = [];
			for(let i in data){
				const pokemon = await Pokemon.findOne({_id: i});
				if(!pokemon){
					delete groupData[i];
				}else {
					pokemons.push(pokemon);
				}
			}
			return res.status(200).json({
				pokemons,
			});
		} catch(e) {
			console.log(e)
			return res.status(500).end();
		}
	}
}

module.exports = new PokemonController();