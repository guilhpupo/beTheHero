const connection = require('../database/connection.js');

module.exports = {
    async index(req, res) {
        const ong_id = req.headers.authorization;

        const data = await connection('casos').where('ong_id', ong_id).select('*');

        return res.json(data);
    }
};