const allowedIps = ['127.0.0.1', '223.123.125.124', '::1']

const ipWhitelist = (req, res, next) => {
    if (!allowedIps.includes(req.ip)) {
        return res
            .status(403)
            .json({ error: 'You are not authorized to access this endpoint!' })
    }

    next()
}

module.exports = ipWhitelist
