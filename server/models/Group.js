const { SchemaMetaFieldDef } = require('graphql');
const { Schema, model } = require('mongoose');

const groupSchema = new Schema(
    {
        groupName: {
            type: String,
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        tickets: [{
            type: Schema.Types.ObjectId,
            ref: 'tickets'
        }]
    })

const Group = model('Group', groupSchema);

module.exports = Group