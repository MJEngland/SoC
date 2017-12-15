var books = {
  "Harry Potter": {
    author: "J.K Rowling",
    published: "26th June 1997"
  },
  "A song of fire and ice": {
    author: "George R R Martin ",
    published: "25th September 2000"
  },
  "Lord of the Rings": {
    author: "JRR Tolkein",
    published: "10th October 1990"
  }
}
  function getBookAuthor(name){
    return books[name].author;
  }



    function getDatePublished(name){
      return books[name].published;
}

module.exports = {
  getBookAuthor:getBookAuthor,
  getDatePublished:getDatePublished
}
