
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        { title: 'Saving Private Ryan'	},
        { title: 'Forest Gump',  Top_Ten: '5 out of 10' }	,	
        { title: 'Cast Away' }		
      ]);
    });
};
