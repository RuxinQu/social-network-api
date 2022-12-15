const router = require('express').Router();
const { getAllThought, getOneThought, postThought, deleteThought, updateThought } = require('../../controllers/thoughtController')

router.get('/', getAllThought)
    .post('/', postThought)
    .get('/:id', getOneThought)
    .put('/:id', updateThought)
    .delete('/:id', deleteThought)



module.exports = router;