const connection = require('../database/connection');

module.exports = {
   async index(req, res) {
      const reservations = await connection('reservations').select('*');

      return res.json(reservations);
   },

   async create(req, res) {
      const { client_id, book_id, reserved_at, reserved_until } = req.body;

      const [id] = await connection('reservations').insert({
         client_id,
         book_id,
         reserved_at,
         reserved_until
      });

      return res.json({ id });
   },

   async delete(req, res) {
      const { id } = req.params;

      const response = await connection('reservations').where('id', id).delete();

      return res.json({ status: !!response });
   }
}