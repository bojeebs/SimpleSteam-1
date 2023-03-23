const middleware = require('../Middleware/index.js')
const axios = require('axios')


async function getSteamData(apiUrl) {
  try {
    const steamResponse = await axios.get(apiUrl)
    const appData = steamResponse.data[50].data
    const processedData = {
      name: appData.name,
      shortDescription: appData.short_description,
      headerImage: appData.header_image
    }
    return processedData
  } catch (error) {
    throw error
  }
}

module.exports = { getSteamData }







