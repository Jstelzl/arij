const { Schema, model } = require("mongoose");

<<<<<<< HEAD
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
});
=======
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
>>>>>>> 13e1281dddb05e42d7fe1179a29b2c2e5e938676

const User = model("User", userSchema);

module.exports = User;
