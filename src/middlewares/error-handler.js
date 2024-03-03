const { logger } = require('../config/dhis2-config')

module.exports = (err, req, res, next) => {
    logger.error(`${req.method} ${req.originalUrl} Error: ${err.message}`)
    if (process.env.NODE_ENV === 'development') {
        res.status(500).send({
            message: 'An error occurred:',
            error: err.stack,
        })
    } else {
        res.status(500).send('An error occured')
    }
}
