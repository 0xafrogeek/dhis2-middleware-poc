const getAxiosInstance = require('../config/dhis2-config')

const getIndicatorGroups = async (id) => {
    let url = `/api/indicatorGroups`
    if (id) {
        url += `/${id}`
    }

    const instance = getAxiosInstance()

    try {
        const response = await instance.get(url)
        return response.data
    } catch (error) {
        throw new Error(`Failed to fetch indicator groups`)
    }
}

module.exports = {
    getIndicatorGroups,
}
