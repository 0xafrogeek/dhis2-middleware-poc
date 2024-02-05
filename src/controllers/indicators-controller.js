const { StatusCodes } = require('http-status-codes')

const { getIndicatorGroups } = require('../services')

const { logger } = require('../config/logger-config')

const indicators = async (req, res) => {
    const { id } = req.query

    try {
        const data = await getIndicatorGroups(id)
        return res.status(StatusCodes.OK).json({
            success: true,
            data,
        })
    } catch (error) {
        logger.error(`Error fetching indicator groups: ${error.message}`)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: 'Error fetching indicator groups',
        })
    }
}

module.exports = indicators
