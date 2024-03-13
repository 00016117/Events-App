const express = require('express')
const ticket_router = require('./event')

const router = express.Router()

// registering child routers
router.use('/event', ticket_router)
module.exports = router
