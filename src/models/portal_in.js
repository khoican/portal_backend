const dbPool = require('./../config/database');

const getAllPortalIn = () => {
    const SQLQuery = 'SELECT * FROM portal_masuk';
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllPortalIn
}