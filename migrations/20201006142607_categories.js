
exports.up = function(knex) {
    return knex.schema.createTable('categories', tbl => {
        tbl.uuid('id').primary();
        tbl.string('name').unique().index();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('categories');
  };
  