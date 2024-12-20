const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")

const authModel = require("../models/auth")

const generateRandomID = () => { return Math.random().toString(36).slice(2) }

router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await authModel.create({
            userID: generateRandomID(),
            username,
            email,
            password: hashedPassword,
            roles: ['customer'],
            status: 'active'
        })

        res.status(201).json({ message: "User created succesfully!" })
    }
    catch (err) {
        console.error(err)
        res.status(400).json({ message: err.message })
    }
})

module.exports = router