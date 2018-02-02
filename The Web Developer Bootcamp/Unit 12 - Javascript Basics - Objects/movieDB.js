// A data structure set up as an array of objects, each object containing a Title, Rating and Has Watched boolean per movie.
var movies = [
  {
    title: "Pulp Fiction",
    rating: 5,
    haveWatched: true
  },
  {
    title: "Django Unchained",
    rating: 4.5,
    haveWatched: true
  },
  {
    title: "Inglorious Basterds",
    rating: 4.2,
    haveWatched: false
  },
  {
    title: "The Hateful 8",
    rating: 3.7,
    haveWatched: false
  },
];

// Console.log data for each entry in the movie data structure.
movies.forEach(function(movie){
  console.log("You have " + (movie.haveWatched ? "seen " : "not seen ") + "\"" +movie.title + "\"" +" - "+ movie.rating + " stars.");
});
