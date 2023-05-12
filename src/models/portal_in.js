const dbPool = require('./../config/database');

const getAllPortalIn = () => {
    const SQLQuery = 'SELECT * FROM portal_masuk ORDER BY waktu DESC;';
    return dbPool.execute(SQLQuery);
}

const getDatePortalIn = (body) => {
    const SQLQuery = `SELECT * FROM portal_masuk WHERE date(waktu) BETWEEN '${body.waktuThen}' AND '${body.waktuNow}';`;
    return dbPool.execute(SQLQuery);
}

const postPortalIn = (body) => {
    const SQLQuery = `INSERT INTO portal_masuk (nama, kompi) VALUES ("${body.nama}", "${body.kompi}");`;
    return dbPool.execute(SQLQuery);
}

const updatePortalIn = (body, id) => {
    const SQLQuery = `UPDATE portal_masuk SET nama="${body.nama}", kompi="${body.kompi}" WHERE id="${id}";`;
    return dbPool.execute(SQLQuery);
}

const deletePortalIn = (id) => {
    const SQLQuery = `DELETE FROM portal_masuk WHERE id="${id}";`;
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllPortalIn,
    getDatePortalIn,
    postPortalIn,
    updatePortalIn,
    deletePortalIn
}