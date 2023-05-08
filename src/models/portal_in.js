const dbPool = require('./../config/database');

const getAllPortalIn = () => {
    const SQLQuery = 'SELECT * FROM portal_masuk;';
    return dbPool.execute(SQLQuery);
}

const postPortalIn = (body) => {
    const SQLQuery = `INSERT INTO portal_masuk (nama, kompi) VALUES ("${body.nama}", "${body.kompi}");`;
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllPortalIn,
    postPortalIn
}