const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const Ticket = require("./model/ticket");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World")
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        const Port = process.env.PORT || 3000
        app.listen(Port, (err) => {
            if (err) {
                console.log(err);
                process.exit();
            }
            console.log(`Your app is listening on port ${Port}`)
        })
    })
    .catch((err) => {
        console.log(err);
        process.exit();
    })

app.post("/ticket", (req, res) => {
    const { address, occasionId, date, seatNumber } = req.body;
    const ticket = new Ticket({
        address,
        occasionId: occasionId.hex,
        date,
        seatNumber
    });
    ticket.save()
        .then((data) => {
            return res.status(201).send(data);
        })
        .catch((err) => {
            return res.status(500).send(err);
        })
})

app.get("/ticket/:address", (req, res) => {
    const { address } = req.params;
    Ticket.find({ address }, (err, data) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(data);
    })
})