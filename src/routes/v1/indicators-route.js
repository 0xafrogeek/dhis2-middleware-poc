const express = require('express')
const apicache = require('apicache')

const apiKeyAuth = require('../../middlewares/api-key-auth')
const indicators = require('../../controllers/indicators-controller')

const cache = apicache.middleware

const router = express.Router()

router.get('/', apiKeyAuth, cache('1 day'), indicators)

module.exports = router
