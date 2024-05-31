'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [
      {
        name: 'https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-babochka-dlya-detei-na-prozrachnom-fone-3.png',
      },
      {
        name: 'https://pngicon.ru/file/uploads/malina.png',
      },
      {
        name: 'https://www.conphetti.ru/upload/iblock/842/7l36l3splkd1u1vpftn0hfe92hzv6itu.jpg',
      },
      {
        name: 'https://pngicon.ru/file/uploads/ezhik2.png',
      },
      {
        name: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612851481_2-p-krasnaya-mashina-bez-fona-2.png',
      },
      {
        name: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614589728_21-p-kartinka-sobaki-na-belom-fone-23.png',
      },
      {
        name: 'https://w.forfun.com/fetch/29/2942cda3da91073bcaf9915bec9195d5.jpeg',
      },
      {
        name: 'https://www.pngarts.com/files/3/Flying-Eagle-PNG-Picture.png',
      },
      {
        name: 'https://abrakadabra.fun/uploads/posts/2022-03/1646501838_1-abrakadabra-fun-p-klipart-romashka-na-prozrachnom-fone-1.png',
      },
      {
        name: 'https://www.funnyart.club/uploads/posts/2022-12/thumbs/1671647742_www-funnyart-club-p-kartinki-bez-fona-besplatno-krasivie-25.png',
      },
      {
        name: 'https://gas-kvas.com/uploads/posts/2023-02/1675462324_gas-kvas-com-p-fonovii-risunok-robot-16.png',
      },
      {
        name: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614554211_9-p-rozi-kartinki-na-belom-fone-16.png',
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
