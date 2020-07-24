const connection = require('../database/connection');

module.exports = {
   async index(req, res) {
      const reservations = await connection('reservations').select('*');

      const reservationsSerialized = [];
      
      const promises = reservations.map(async reservation => {
         const [client] = await connection('clients').where('id', reservation.client_id);
         const [book] = await connection('books').where('id', reservation.book_id);

         reservationsSerialized.push({
            id: reservation.id,
            client,
            book,
            reserved_at: reservation.reserved_at,
            reserved_until: reservation.reserved_until
         });
      });

      await Promise.all(promises);

      return res.json(reservationsSerialized);
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
