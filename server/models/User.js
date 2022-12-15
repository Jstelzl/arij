const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            minlength: 5
          },
        tickets: [{
            type: Schema.Types.ObjectId,
            ref: 'Ticket'
        }],
        groups: [{
            type: Schema.Types.ObjectId,
            ref: 'Group'
        }]
})

const User = model('User', userSchema);

module.exports = User