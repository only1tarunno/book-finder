/* eslint-disable react/prop-types */

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import star from "../../assets/star.svg";

const BookCardList = ({ books, handleFav }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books?.map((book) => (
        <div key={book.id} className="space-y-3">
          {/* <!-- thumbnail --> */}
          <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
            <img
              className="max-w-[144px] h-[206px]"
              src={book.image}
              alt="book name"
            />
          </div>
          {/* <!-- info --> */}
          <div className="space-y-3">
            <h4 className="text-lg font-bold lg:text-xl">{book.title}</h4>
            <p className="text-xs lg:text-sm">
              By : <span>{book.writter}</span>
            </p>
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold lg:text-xl">${book.price}</h4>
              {/* <!-- stars --> */}
              <div className="flex items-center space-x-1">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <span className="text-xs lg:text-sm">({book.rating} Star)</span>
              </div>
              {/* <!-- stars ends --> */}
            </div>

            <div className="flex items-center gap-3 text-xs lg:text-sm">
              <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                <IoCartOutline className="text-lg" />
                Add to Cart
              </button>
              <button
                onClick={() => handleFav(book.id)}
                className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md  py-1.5 ${
                  book.isFav
                    ? "text-[#DC2954] hover:bg-[#DC2954]/[24%] bg-[#DC2954]/[14%]"
                    : "text-[#1C4336] hover:bg-[#1C4336]/[24%] bg-[#1C4336]/[14%]"
                } transition-all  lg:py-1.5`}
              >
                {book.isFav ? (
                  <FaHeart className="text-lg" />
                ) : (
                  <FaRegHeart className="text-lg" />
                )}
                Favourite
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCardList;
