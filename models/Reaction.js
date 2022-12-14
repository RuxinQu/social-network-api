const { Schema, Types } = require('mongoose');
const { DateTime } = require("luxon");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createAt: {
            type: Date,
            default: DateTime.now(),
            get: (createAt) => { return createAt.setLocale('en-us').toLocaleString() }
        }
    }
)

module.exports = reactionSchema;
