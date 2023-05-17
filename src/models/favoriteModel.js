const connection =  require('./connection');

const getAll = async () => {
    const [favorite] = await connection.execute('SELECT * FROM favorites');
    return favorite;
};

const postId = async () => {
    const {idFavorite} = favorite;
    const [postId] = await connection.execute('INSERT INTO favorites(idFavorite) VALUES (?)', [idFavorite]);
    return postId;
;};

module.exports = {
    getAll,
    postId
};