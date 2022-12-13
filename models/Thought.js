const { Schema, model } = require('mongoose');
const { DateTime } = require("luxon");
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createAt: {
            type: Date,
            default: DateTime.now(),
            get: (createAt) => { return createAt.setLocale('en-us').toLocaleString() }
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    }
);


thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thoughts = model('Thoughts', thoughtSchema);

module.exports = Thoughts;