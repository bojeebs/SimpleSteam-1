import Client from './api'

export const GetUserWishlistGames = async (userId) => {
  try {
    const res = await Client.get(`/api/wishlist/${userId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const RemoveGames = async (data) => {
  try {
    console.log(data, "line14!!!!")
    const res = await Client.post('/api/wishlists', data)
    return res.data
  } catch (error) {
    throw error
  }
}