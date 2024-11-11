const mongoose = require("mongoose")


const TicketModel = mongoose.Schema({
    address: String,
    occasionId: String,
    date: {
        type: Date,
        default: Date.now
    },
    seatNumber: String
})

const Ticket = mongoose.model("Ticket", TicketModel)

module.exports = Ticket