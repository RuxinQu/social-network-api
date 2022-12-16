const router = require('express').Router();
const { getAllThought, getOneThought, postThought, deleteThought, updateThought } = require('../../controllers/thoughtController')
const { addReaction, deleteReaction } = require('../../controllers/reactionController')

router.route('/')
    .get(getAllThought)
    .post(postThought)

router.route('/:id')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought)

router.post('/:thoughtId/reactions', addReaction)
    .delete('/:thoughtId/reactions/:reactionId', deleteReaction)

module.exports = router;