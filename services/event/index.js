const fs = require('fs')
// access global database
const events = require(global.database)

// write service method implementations
const event_service = {
    getAll() {
        return events
    }
}

module.exports = event_service