const crypto = require('crypto');

const connection = require('../database/connection.js');

module.exports = {
    async index(req, res) {
        const data = await connection('ongs').select('*');

        res.json(data);
    },
    async create(req, res) {
        const { nome, email, whatsapp, cidade, uf } = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            uf
        });

        res.json({ id });
    }
};