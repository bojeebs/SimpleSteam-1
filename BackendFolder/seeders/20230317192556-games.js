'use strict';
const axios = require('axios');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const response = await axios.get(`https://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=STEAMKEY&format=json`);

    const namelist = response.data.applist.apps
    console.log(namelist[0].appid)
    let list = []
    for(let i = 100; i< 150; i++){
      const response = await axios.get(`https://store.steampowered.com/api/appdetails?appids=${namelist[i].appid}`)
      const gamelist = response.data
      console.log(gamelist[namelist[i].appid].data)
      if(gamelist[namelist[i].appid].success)
        list.push({
        title: gamelist[namelist[i].appid].data.name,
        // categories: gamelist.genres.description,
        shortdescription: gamelist[namelist[i].appid].data.short_description,
        thumbnailimage: gamelist[namelist[i].appid].data.header_image,
        createdAt: new Date(),
        updatedAt: new Date() 
      })
    }
  
    // const list = [...Array(50)].map((_) => ({
    //   title: gamelist.name,
    //   categories: gamelist.genres.description,
    //   shortdescription: gamelist.short_description,
    //   thumbnailimage: gamelist.header_image,
    //   createdAt: new Date(),
    //   updatedAt: new Date() 
    // }))


    await queryInterface.bulkInsert('games', list)
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('games')
  }
};
