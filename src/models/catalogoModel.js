const Parse = require('parse/node');
Parse.initialize('FrLZPOEsndCW47I6s5FAeQZrasMWHU0LOM9wrEbo', 'UIXbQnWRR7MA6cibuGsjstMseCJc2GZrwJV44pYt');
Parse.serverURL = 'https://parseapi.back4app.com/';

const getAll = async () => {
  const notice = Parse.Object.extend('animes');
  const query = new Parse.Query(notice);

  const objects = await query.find();
  return objects;
};

module.exports = {
  getAll,
};