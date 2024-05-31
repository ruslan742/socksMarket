'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Patterns', [
      {
        name: 'https://gas-kvas.com/uploads/posts/2023-01/1674487918_gas-kvas-com-p-risunki-uzori-rossii-14.png',
      },
      {
        name: 'https://fikiwiki.com/uploads/posts/2022-02/1644843603_51-fikiwiki-com-p-ornamenti-i-uzori-krasivie-kartinki-52.jpg',
      },
      {
        name: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612937378_133-p-krasnii-fon-uzor-vektor-193.jpg',
      },
      {
        name: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612159675_40-p-fon-fioletovie-uzori-56.jpg',
      },
      {
        name: 'https://img.staticdj.com/5d6c1ff6076e18e7db7441c367733973.jpeg',
      },
      {
        name: 'https://avatars.mds.yandex.net/get-mpic/4458042/img_id5263668534724899616.jpeg/orig',
      },
      {
        name: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1614519168_7-p-serdechko-na-belom-fone-9.png',
      },
      {
        name: 'https://udoba.org/sites/default/files/h5p/content/19142/images/file-619f18e245973.jpg',
      },
      {
        name: 'https://gas-kvas.com/grafic/uploads/posts/2023-09/1695835001_gas-kvas-com-p-kartinki-zvezdochka-2.png',
      },
      {
        name: 'https://gas-kvas.com/grafic/uploads/posts/2023-09/1695926774_gas-kvas-com-p-kartinki-snezhinka-12.png',
      },
      {
        name: 'https://gas-kvas.com/grafic/uploads/posts/2023-10/1696438347_gas-kvas-com-p-kartinki-smailik-radostnii-5.jpg',
      },
      {
        name: 'https://gas-kvas.com/grafic/uploads/posts/2023-09/1695818492_gas-kvas-com-p-kartinki-smailiki-12.png',
      },
      
     
   
   ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
