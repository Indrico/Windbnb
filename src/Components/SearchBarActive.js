const SearchBarActive = ({
  city,
  allCity,
  country,
  setCity,
  searchBarStatus,
  setSearchBarStatus,
  filterItems,
  guest,
  adult,
  setAdult,
  children,
  setChildren,
}) => {
  const closeBar = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSearchBarStatus(null);
    }
  };

  const handleOnFocusLocation = (e) => {
    setSearchBarStatus(1);
    console.log('Hei');
    console.log(searchBarStatus);
  };

  const handleOnFocusGuest = (e) => {
    setSearchBarStatus(2);
  };

  return (
    <div
      className="fixed w-screen h-screen inset-0 bg-black bg-opacity-50 backdrop"
      onClick={closeBar}
    >
      <div className="bg-white xl:h-[55vh]">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-gray-300 border-2 rounded-xl shadow">
            <div className="md:border-r-2 border-b-2 md:border-b-0 w-full md:w-1/3 p-4 pl-8">
              <p className="font-bold">LOCATION</p>
              <input
                type="text"
                name="city"
                value={`${city}, ${country}`}
                readOnly
                onFocus={handleOnFocusLocation}
              />
            </div>
            <div className="md:border-r-2 w-full md:w-1/3 p-4 pl-8">
              <label className="font-bold block" htmlFor="guest">
                GUESTS
              </label>
              <input
                type="text"
                name="guest"
                className="text-gray-400"
                onFocus={handleOnFocusGuest}
                placeholder="Add guest"
                value={`${guest} guest${guest >= 2 ? 's' : ''}`}
                readOnly
              />
            </div>
            <div className="hidden w-full md:w-1/3 p-4 pl-8 md:flex justify-center">
              <p
                className="w-1/3 flex justify-center items-center bg-red-500 text-white rounded-2xl cursor-pointer"
                onClick={() => filterItems(city)}
              >
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

          <div className="mt-6 mb-3 md:grid-cols-3 grid">
            <div>
              {searchBarStatus === 1 &&
                allCity.map((city, index) => {
                  return (
                    <div
                      key={index}
                      className="p-4 flex items-center cursor-pointer"
                      onClick={() => setCity(city)}
                    >
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
            {searchBarStatus === 2 && (
              <div className="p-4 space-y-4">
                <div>
                  <p className="font-bold">Adults</p>
                  <p className="text-gray-500">Ages 13 or above</p>
                  <div className="flex space-x-8 mt-2">
                    <button
                      className="rounded-md border-2 px-2"
                      onClick={() => setAdult(adult - 1)}
                    >
                      -
                    </button>
                    <p>{adult}</p>
                    <button
                      className="rounded-md border-2 px-2"
                      onClick={() => setAdult(adult + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <p className="font-bold">Children</p>
                  <p className="text-gray-500">Ages 2 - 12</p>
                  <div className="flex space-x-8 mt-2">
                    <button
                      className="rounded-md border-2 px-2"
                      onClick={() => setChildren(children - 1)}
                    >
                      -
                    </button>
                    <p>{children}</p>
                    <button
                      className="rounded-md border-2 px-2"
                      onClick={() => setChildren(children + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex md:hidden justify-center items-center">
            <button
              type="button"
              className="p-3 px-4 bg-red-500 text-white rounded-2xl sm:hidden"
              onClick={() => filterItems(city)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBarActive;
