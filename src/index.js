const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const { logger } = require('./config/logger-config')

const errorHandler = require('./middlewares/error-handler')
const rateLimiter = require('./middlewares/rate-limiting')
const ipWhitelist = require('./middlewares/ip-whitelisting')

const apiRoutes = require('./routes')

const app = express()

app.use(helmet())

app.use(
    cors({
        origin: ['http://127.0.0.1', 'http://localhost'],
    })
)

// Middleware to log all requests
app.use((req, res, next) => {
    const start = Date.now()

    res.on('finish', () => {
        const duration = Date.now() - start
        logger.info(
            JSON.stringify({
                method: req.method,
                path: req.originalUrl,
                status: res.statusCode,
                duration,
                ip: req.ip,
            })
        )
    })

    next()
})

// Routes
app.use('/api', apiRoutes)

// Error handling
app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log(`Successfully started the server on PORT: ${process.env.PORT}`)
})
