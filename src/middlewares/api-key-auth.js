const crypto = require('crypto')
const { StatusCodes } = require('http-status-codes')
const { logger } = require('../config/logger-config')

const dotenv = require('dotenv')

dotenv.config()

const apiKeyAuth = (req, res, next) => {
    try {
        const authHeader = req.get('Authorization')

        if (!authHeader) {
            logger.error('No API token provided')
            return res.status(StatusCodes.UNAUTHORIZED).json({
                success: false,
                message: 'No API token provided',
            })
        }

        const [prefix, apiKey] = authHeader.split(' ')

        if (
            prefix !== 'ApiToken' ||
            !apiKey ||
            !crypto.timingSafeEqual(
                Buffer.from(apiKey),
                Buffer.from(process.env.API_KEY)
            )
        ) {
            logger.error('Invalid API Key')
            return res.status(StatusCodes.FORBIDDEN).json({
                success: false,
                message: 'Invalid API key',
            })
        }

        next()
    } catch (error) {
        if (error) {
            logger.error('An error occurred during authentication', error)
        } else {
            logger.error(
                'An error occurred during authentication, but the error object was not defined'
            )
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'An error occurred during authentication',
        })
    }
}

module.exports = apiKeyAuth
