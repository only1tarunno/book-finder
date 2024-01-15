import BookCardList from "./BookCardList";
import BookSearch from "./BookSearch";
import BookSectionHeader from "./BookSectionHeader";
import BooksSorting from "./BooksSorting";

const BooksBoard = () => {
  return (
    <main className="my-10 lg:my-14">
      <div className="mb-8 lg:mb-10 mx-auto max-w-7xl">
        <div className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
          {/* <!-- info , title , search --> */}
          <div>
            <BookSectionHeader />
            <BookSearch />
          </div>
          <BooksSorting />
        </div>
      </div>
      {/* All books card  */}
      <BookCardList />
    </main>
  );
};

export default BooksBoard;
