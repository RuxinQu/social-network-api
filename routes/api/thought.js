const router = require('express').Router();
const { getAllThought, getOneThought, postThought, deleteThought, updateThought } = require('../../controllers/thoughtController')
const { addReaction, deleteReaction } = require('../../controllers/reactionController')

router.get('/', getAllThought)
    .post('/', postThought)
    .get('/:id', getOneThought)
    .put('/:id', updateThought)
    .delete('/:id', deleteThought)
    .post('/:thoughtId/reactions', addReaction)
    .delete('/:thoughtId/reactions/:reactionId', deleteReaction)

module.exports = router;