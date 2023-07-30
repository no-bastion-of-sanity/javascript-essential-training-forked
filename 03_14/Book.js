class Book {
  // constructor
  constructor(
    title,
    author,
    publisher_name,
    publisher_city,
    publisher_date,
    pages
  ) {
    this.title = title;
    this.author = author;
    this.publisher_name = publisher_name;
    this.publisher_date = publisher_date;
    this.publisher_city = publisher_city;
    this.pages = pages;
  }
  citationString() {
    return this.title.concat(" ", this.publisher_date);
  }
}

export default Book;
