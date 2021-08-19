const SearchBarActive = ({ city, allCity, country, setCity, setSearchBarStatus, filterItems }) => {
  const closeBar = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSearchBarStatus(null)
    }
  }

  return (
    <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-50 backdrop" onClick={closeBar}>
      <div className="bg-white h-1/2">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="mt-8 flex justify-between items-center border-gray-300 border-2 rounded-xl shadow">
            <div className="border-r-2 w-1/3 p-4 pl-8">
              <p className="font-bold">LOCATION</p>
              <p name="city">{city}, {country}</p>
            </div>
            <div className="border-r-2 w-1/3 p-4 pl-8">
              <p className="font-bold">GUESTS</p>
              <p name="guest" className="text-gray-400">Add guests</p>
            </div>
            <div className="w-1/3 p-4 pl-8 flex justify-center">
              <p className="w-1/3 flex justify-center items-center bg-red-500 text-white rounded-2xl cursor-pointer" onClick={() => filterItems(city)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 my-3 mr-3"
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
                Search
              </p>
            </div>
          </div>

          <div className="mt-6 mb-3">
            {allCity.map((city, index) => {
              return (
                <div key={index} className="w-1/3 p-4 flex items-center cursor-pointer" onClick={() => setCity(city)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {city}, {country}
                </div>
              );
            })}
          </div>
          <button className="p-3 flex justify-center items-center bg-red-500 text-white rounded-2xl sm:hidden" onClick={() => filterItems(city)}>
              Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBarActive;
