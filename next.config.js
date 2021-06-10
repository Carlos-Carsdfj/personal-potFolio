// module.exports = {
//     future: {
//       webpack5: true,
//     },
//     i18n: {
//       locales: ['en', 'es'],
//       defaultLocale: 'en',
//     }   
//   }

const nextTranslate = require("next-translate");

module.exports = {
  ...nextTranslate(),
};

  