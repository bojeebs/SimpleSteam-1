import Client from './api'

export const GetUserWishlistGames = async (userId) => {
  try {
    const res = await Client.get('/api/wishlist',  { data: { id: 2 } })
    return res.data
  } catch (error) {
    throw error
  }
}

// export const DeleteGames = async (postId) => {
//   try {
//     const res = await Client.delete('/wishlist', { data: { id: postId } })
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }