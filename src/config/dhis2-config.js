const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const baseUrl = process.env.DHIS2_API_URL
const username = process.env.USERNAME
const password = process.env.PASSWORD
const auth = Buffer.from(`${username}:${password}`).toString('base64')

const getAxiosInstance = () => {
    return axios.create({
        baseURL: baseUrl,
        headers: {
            Authorization: `Basic ${auth}`,
        },
    })
}

module.exports = getAxiosInstance
