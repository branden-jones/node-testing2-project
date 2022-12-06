
exports.up = function(knex) { //eslint-disable-line
  return knex.schema.createTable('movies', tbl => {
    tbl.increments()
    tbl.string('title', 250)
        .unique()
        .notNullable()
    tbl.integer('Top_Ten', 15)
       .unique()
  })
};

exports.down = function(knex) { //eslint-disable-line
    return knex.schema.dropTableIfExists("movies")
};
