const dbPool = require('./../config/database');

const getAllPortalOut = () => {
    const SQLQuery = 'SELECT * FROM portal_keluar ORDER BY waktu DESC;';
    return dbPool.execute(SQLQuery);
}

const postPortalOut = (body) => {
    const SQLQuery = `INSERT INTO portal_keluar (nama, kompi) VALUES ("${body.nama}", "${body.kompi}");`;
    return dbPool.execute(SQLQuery);
}

const updatePortalOut = (body, id) => {
    const SQLQuery = `UPDATE portal_keluar SET nama="${body.nama}", kompi="${body.kompi}" WHERE id="${id}";`;
    return dbPool.execute(SQLQuery);
}

const deletePortalOut = (id) => {
    const SQLQuery = `DELETE FROM portal_keluar WHERE id="${id}";`;
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllPortalOut,
    postPortalOut,
    updatePortalOut,
    deletePortalOut
}