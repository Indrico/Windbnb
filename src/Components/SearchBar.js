const SearchBar = ({ city, setSearchBarStatus, guest }) => {
  const handleClick = (param) => {
    setSearchBarStatus(param);
  };

  return (
    <form className="shadow flex rounded-lg border-gray-100 border-2 overflow-hidden">
      <p
        name="city"
        className="p-3 outline-none border-r-2"
        onClick={() => handleClick(1)}
      >
        {city}, Finland
      </p>
      <p
        type="text"
        name="guest"
        className="p-3 outline-none border-r-2 text-gray-400 w-28 text-center"
        onClick={() => handleClick(2)}
      >
        {guest ? `${guest} guest${guest >= 2 ? 's' : ''}` : 'Add Guest'}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 m-3 text-red-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </form>
  );
};

export default SearchBar;
