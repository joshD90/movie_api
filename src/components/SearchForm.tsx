import React from "react";

function SearchForm() {
  return (
    <>
      <form className="bg-stone-600 rounded-lg w-1/3 min-w-fit">
        <div className="flex flex-col justify-start p-5 ">
          <label htmlFor="search" className="text-stone-200">
            Movie Name
          </label>
          <input
            type="text"
            name="search"
            placeholder="Insert Movie Name Here"
            className="p-2 text-stone-800 rounded-md"
          />
        </div>
        <div className="w-full flex items-center justify-center p-5 pt-0">
          <button className="bg-lime-700 p-2 rounded-md hover:bg-lime-600 text-white">
            Search Movie
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
