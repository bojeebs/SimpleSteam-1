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

    
    const res = await Client.delete(`/api/wishlists/${data.userId}/${data.gamesId}`, data)

    const res = await Client.post('/api/wishlists', data)

    return res.data
  } catch (error) {
    throw error
  }
}