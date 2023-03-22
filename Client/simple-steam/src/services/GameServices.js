import Client from './api'

export const GetGames = async () => {
  try {
    const res = await Client.get('/api/games')
    return res.data
  } catch (error) {
    throw error
  }
}
export const AddGames = async (data) => {
  try {
    console.log(data)
    const res = await Client.post('/api/gamesadd', data)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const notloggedInGetGames = async () => {
  try {
    const res = await Client.get('/api/')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GameId  = async () => {
  try {
    const res = await Client.post('/api/gamesadd')
    return res.data
  } catch (error) {
    throw error
  }
}