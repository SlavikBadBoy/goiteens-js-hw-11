const movie = {
  title: "Cars",
  director: "Brian Fee, John Lasseter",
  year: 2006,
  rating: 7.2,
  checkRating() {
    return movie.rating > 8;
  },
};
console.log(movie.checkRating());
