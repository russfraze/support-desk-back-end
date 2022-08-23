// bring in express with common syntax instead of import 
const express = require('express')
const express = require('dotenv').config()
const PORT = process.env.PORT || 8000

//initalize app
const app = express()

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' })
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))