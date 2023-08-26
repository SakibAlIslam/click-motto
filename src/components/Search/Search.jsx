const Search = ({
    placeholder = "Search..."
}) => {
  return (
    <>
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="flex items-center w-full bg-secondary rounded-xl px-8 pt-[13px] pb-4">
          <div className="w-full rounded-xl">
            <input
              type="text"
              id="simple-search"
              className="bg-secondary border-none outline-none text-[#333333] text-[22px] focus:ring-transparent focus:border-transparent block w-full p-0 "
              placeholder={placeholder}
              required
            />
          </div>
          <button
            type="submit"
            className="text-sm font-medium text-black"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
