const { Schema, model } = require("mongoose");

const ticketSchema = new Schema({
  ticketTitle: {
    type: String,
    required: true,
  },
  ticketBody: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: String,
    required: true,
  },
  urgencyLevel: {
    type: String,
    enum: ["Low", "Medium", "High"],
  },
  dueBy: {
    type: Date,
  },
  status: {
    type: String,
    default: "to do"
  },
});

const Ticket = model("Ticket", ticketSchema);

module.exports = Ticket;
