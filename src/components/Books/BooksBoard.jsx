import { useState } from "react";
import BookCardList from "./BookCardList";
import BookSearch from "./BookSearch";
import BookSectionHeader from "./BookSectionHeader";
import BooksName from "./BooksName";
import BooksSorting from "./BooksSorting";

const BooksBoard = () => {
  const [books, setBooks] = useState(BooksName);
  // copy of all books for search
  const [books2] = useState(BooksName);

  // search books
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    const filtered = books2.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks(filtered);
  };

  // add favoririte
  const handleFav = (id) => {
    const bookIndex = books.findIndex((book) => book.id === id);
    const newBooksArray = [...books];
    newBooksArray[bookIndex].isFav = !newBooksArray[bookIndex].isFav;
    setBooks(newBooksArray);
  };

  return (
    <main className="my-10 lg:my-14">
      <div className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          {/* <!-- info , title , search --> */}
          <div>
            <BookSectionHeader />
            <BookSearch handleSearch={handleSearch} />
          </div>
          <BooksSorting />
        </div>
      </div>
      {/* All books card  */}
      <BookCardList books={books} handleFav={handleFav} />
    </main>
  );
};

export default BooksBoard;
