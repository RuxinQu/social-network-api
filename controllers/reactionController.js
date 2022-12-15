const { Thought } = require('../models');

const reactionController = {
    async addReaction(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                { $push: { reactions: req.body } },
                { new: true });
            thought
                ? res.status(200).json(thought)
                : res.status(404).json({ message: 'Fail to add new reactions' })
        } catch (error) { res.status(500).json(error) }
    },

    //find the thought based on id, and find the reaction inside of it, use $pull to remove the element inside an array.
    async deleteReaction(req, res) {
        try {
            const reaction = await Thought.findOneAndUpdate(
                {
                    _id: req.params.thoughtId,
                    'reactions.reactionId': req.params.reactionId
                },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            );
            reaction
                ? res.status(200).json(reaction)
                : res.status(404).json({ message: 'Fail to delete reactions' })
        } catch (error) { res.status(500).json(error) }
    }
}

module.exports = reactionController;