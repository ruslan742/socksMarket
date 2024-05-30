'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [
      {
        name: 'https://content.podarki.ru/goods-images/10ac8777-fad0-45fb-a155-c974dd55905b.jpg',
      },
      {
        name: 'https://kukla-sharzh.ru/wp-content/uploads/2016/10/114-830x1024.jpg',
      },
      {
        name: 'https://www.conphetti.ru/upload/iblock/842/7l36l3splkd1u1vpftn0hfe92hzv6itu.jpg',
      },
      {
        name: 'https://pibig.info/uploads/posts/2022-12/1670595462_1-pibig-info-p-podelki-iz-plastilina-vozdushnogo-zhivotni-1.jpg',
      },
      {
        name: 'https://w-dog.ru/wallpapers/14/3/515585793483105/leopard-glaza-golubye-okras-lezhit.jpg',
      },
      {
        name: 'https://www.w-dog.ru/wallpapers/0/10/318536220608052/milye-sozdaniya-svetlenkij-shhenok-i-polosatenkij-kotenok-druzhat-drug-s-drugom.jpg',
      },
      {
        name: 'https://w.forfun.com/fetch/29/2942cda3da91073bcaf9915bec9195d5.jpeg',
      },
      {
        name: 'https://i.pinimg.com/originals/c4/4a/74/c44a74f0553bcf43d178c64a65d52779.jpg',
      },
      {
        name: 'https://klike.net/uploads/posts/2022-08/1661403869_j-21.jpg',
      },
      {
        name: 'https://model.gdebirka.ru/image/data/drift/drift-car-zyk-k2669-5.jpg',
      },
      {
        name: 'https://gas-kvas.com/uploads/posts/2023-02/1675462324_gas-kvas-com-p-fonovii-risunok-robot-16.png',
      },
      {
        name: 'https://get.pxhere.com/photo/sweet-flower-cute-decoration-green-frog-amphibian-yellow-fauna-deco-tree-frog-close-up-crown-fun-figure-vertebrate-funny-macro-photography-frog-prince-800991.jpg',
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
