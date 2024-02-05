const { logger } = require('../config/dhis2-config')

module.exports = (err, req, res, next) => {
    logger.error(`${req.method} ${req.originalUrl} Error: ${err.message}`)
    res.status(500).send('An error occurred')
}
