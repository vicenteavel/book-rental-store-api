
exports.up = function(knex) {
   return knex.schema.createTable('clients', function(table) {
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
   });
};

exports.down = function(knex) {
   return knex.schema.dropTable('clients');
};
