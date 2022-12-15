const { User, Thought } = require('../models');
const { exists } = require('../models/User');

const thoughtController = {
    async getAllThought(req, res) {
        try {
            const thoughts = await Thought.find();
            res.status(200).json(thoughts)
        } catch (error) { res.status(500).json(error) }
    },

    async getOneThought(req, res) {
        try {
            const thought = await Thought.findById(req.params.id)
            thought
                ? res.status(200).json(thought)
                : res.status(404).json({ message: 'Failed to find the thought' })
        } catch (error) { res.status(500).json(error) }
    },

    // check if the user exists, then post a thought and update the associated user's thought field, returns the user data with populated thoughts
    async postThought(req, res) {
        try {
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                res.status(400).json({ message: 'Couldn\'t find the user matching the username' })
                return;
            }
            const newThought = await Thought.create(req.body);
            const updateUser = await User.findOneAndUpdate(
                { username: req.body.username },
                { $push: { thoughts: newThought._id } },
                { new: true })
                .select('-__v')
                .populate('thoughts');
            updateUser
                ? res.status(200).json(updateUser)
                : res.status(404).json({ message: 'Failed to add new thoughts' })
        } catch (error) { res.status(500).json(error) }
    },

    //find the thought and update the thoughtText based on the id from req params
    async updateThought(req, res) {
        try {
            const updatedThought = await Thought.findOneAndUpdate(
                { _id: req.params.id },
                { $set: { thoughtText: req.body.thoughtText } },
                { new: true });
            updatedThought
                ? res.status(200).json(updatedThought)
                : res.status(404).json({ message: 'Failed to update the thought' })
        } catch (error) { res.status(500).json(error) }
    },

    // delete the thought based on the id
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.id })
            thought
                ? res.status(200).json('Successfully deleted the thought')
                : res.status(404).json({ message: 'Failed to delete the thought' })
        } catch (error) { res.status(500).json(error) }
    }
}


module.exports = thoughtController;