const Parse = require('parse/node');
Parse.initialize('m8PUnyxiSJkj77YYOrfRwuzCkhITu2YrD7X8LvsD', 'eRiwi5SegjX0BrDZBVlaoYN4PXSaj4FfaGinnyRG');
Parse.serverURL = 'https://parseapi.back4app.com/';

const getAll = async () => {
  const notice = Parse.Object.extend('noticia');
  const query = new Parse.Query(notice);

  const objects = await query.find();
  return objects;
};

module.exports = {
  getAll,
};