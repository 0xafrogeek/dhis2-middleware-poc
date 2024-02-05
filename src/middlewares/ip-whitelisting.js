const allowedIps = ['127.0.0.1', '223.123.125.124']

const ipWhitelist = (req, res, next) => {
    if (!allowedIps.includes(req.ip)) {
        return res.status(403).json({ error: 'Unauthorized!' })
    }

    next()
}

module.exports = ipWhitelist
