
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        { title: 'Saving Private Ryan'	},
        { title: 'Forest Gump',  Top_Ten: 5 }	,	
        { title: 'Cast Away' },
        { title: 'Good Will Hunting',  Top_Ten: 2 }	,	
        { title: 'Dead Poets Society', Top_Ten: 7},		
        { title: 'Remember the Titans',  Top_Ten: 4 }	,	
        { title: 'Its a Wonderful Life',  Top_Ten: 1 },		
        { title: 'Monty Python and the Holy Grail' },		
        { title: 'Green Mile', Top_Ten: 3 },		
      ]);
    });
};
