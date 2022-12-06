
exports.up = function(knex) { //eslint-disable-line
  return knex.schema.createTable('movies', tbl => {
    tbl.increments()
    tbl.string('title', 250)
        .unique()
        .notNullable()
    tbl.string('Top_Ten', 15)
  })
};

exports.down = function(knex) { //eslint-disable-line
    return knex.schema.dropIfTableExists('movies')
};
