const { User } = require('../models');

const userController = {
    async getAllUser(req, res) {
        try {
            const users = await User.find()
                .select('-__v')
                .populate('thoughts')
                .populate('friends')
            users
                ? res.status(200).json(users)
                : res.status(404).send()
        } catch (error) { res.status(500).json(error) }
    }
}

module.exports = userController;