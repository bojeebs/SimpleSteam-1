import Client from './api'

export const GetGames = async () => {
  try {
    const res = await Client.get('/api/games')
    return res.data
  } catch (error) {
    throw error
  }
}