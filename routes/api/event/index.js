const express = require('express');

const router = express.Router();
const ticket_controller = require('../../../controllers/api/event');

// Define API routes
router.get('/', (req, res)=>{
    ticket_controller.getAll(req, res);
});

module.exports = router;
