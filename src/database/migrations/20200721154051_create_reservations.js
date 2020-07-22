
exports.up = function(knex) {
   return knex.schema.createTable('reservations', function(table) {
      table.increments();

      table.string('client_id').notNullable();
      table.foreign('client_id').references('id').inTable('clients')

      table.string('book_id').notNullable();
      table.foreign('book_id').references('id').inTable('books')

      table.date('reserved_at').notNullable();
      table.date('reserved_until').notNullable();
   });
};

exports.down = function(knex) {
   return knex.schema.dropTable('reservations');
};
