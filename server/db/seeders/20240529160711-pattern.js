'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Patterns', [
      {
        name: 'https://gas-kvas.com/uploads/posts/2023-01/1674487918_gas-kvas-com-p-risunki-uzori-rossii-14.png',
      },
      {
        name: 'https://free-png.ru/wp-content/uploads/2021/10/free-png.ru-344.png',
      },
      {
        name: 'https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-pryamoi-uzor-na-prozrachnom-fone-35.png',
      },
      {
        name: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612785028_6-p-goluboi-uzor-na-belom-fone-6.png',
      },
      {
        name: 'http://png.pngtree.com/png-clipart/20220313/original/pngtree-fullcolor-flowers-corner-set-nature-vector-png-image_7431897.png',
      },
      {
        name: 'https://bumper-stickers.ru/40103-thickbox_default/uzor.jpg',
      },
      {
        name: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1614519168_7-p-serdechko-na-belom-fone-9.png',
      },
      {
        name: 'https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-krasivii-zolotoi-uzor-na-prozrachnom-fone-11.png',
      },
      {
        name: 'https://gas-kvas.com/grafic/uploads/posts/2023-09/1695835001_gas-kvas-com-p-kartinki-zvezdochka-2.png',
      },
      {
        name: 'https://gas-kvas.com/grafic/uploads/posts/2023-09/1695926774_gas-kvas-com-p-kartinki-snezhinka-12.png',
      },
      {
        name: 'https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-kazakhskii-uzor-na-prozrachnom-fone-6.png',
      },
      {
        name: 'https://sopranoclub.ru/images/prozrachniy-fon-png/file19112.png',
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
