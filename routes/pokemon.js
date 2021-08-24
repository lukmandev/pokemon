const {Router} = require('express');
const router = Router();
const { check } = require('express-validator');


const PokemonController = require('../controllers/pokemon');


router.get('/get-all', PokemonController.getPokemons);

router.post('/group-pokemons', PokemonController.getGroupPokemons);

router.post('/add-new', PokemonController.addNewPokemon);

router.delete('/delete-by-id', PokemonController.deletePokemon);



module.exports = router;