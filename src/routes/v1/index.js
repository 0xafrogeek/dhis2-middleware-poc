const express = require('express')
const indicatorsRoute = require('./indicators-route')

const router = express.Router()

router.use('/indicators', indicatorsRoute)

module.exports = router
