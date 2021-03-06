'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Banks',
      [
        {
          cardNumber: '4564654564564564',
          name: 'SquadHelp',
          expiry: '11/20',
          cvc: '453',
          balance: 0,
        },
        {
          cardNumber: '4111111111111111',
          name: 'buyer',
          expiry: '12/22',
          cvc: '111',
          balance: 999999,
        },
        {
          cardNumber: '4000000000000000',
          name: 'creative',
          expiry: '12/22',
          cvc: '000',
          balance: 999999,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Banks', null, {});
  },
};
