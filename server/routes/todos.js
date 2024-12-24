const express = require("express")
const router = express.Router()

const todosModel = require('../models/todos')

const generateRandomID = () => { return Math.random().toString(36).slice(5) }

router.post("/create", async (req, res) => {
    try {
        const { userID, title, description, status } = req.body

        await todosModel.create({
            userID,
            todoID: generateRandomID(),
            title,
            description,
            status
        })

        res.status(201).json({ message: "Todo created!" })
    }
    catch (err) {
        console.error(err)
        res.status(400).json({ message: err.message })
    }
})

module.exports = router