const { Thought } = require('../models');

const thoughtController = {
    async getAllThought(req, res) {
        try {
            const thoughts = await Thought.find();
            res.status(200).json(thoughts)
        } catch (error) { res.status(500).json(error) }
    },
}


module.exports = thoughtController;