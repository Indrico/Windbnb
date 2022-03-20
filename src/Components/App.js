import { useState, useEffect } from 'react';
import SearchBarActive from './SearchBarActive';
import items from '../stays.json';
const { default: Header } = require('./Header');
const { default: ListRoom } = require('./ListRoom');

const allCity = [...new Set(items.map((item) => item.city))];

function App() {
  const [city, setCity] = useState('Helsinki');
  const [country] = useState('Finland');
  const [guest, setGuest] = useState(0);
  const [searchBarStatus, setSearchBarStatus] = useState(null);
  const [data, setData] = useState(items);
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);

  useEffect(() => {  
    if (adult < 0) {
      setAdult(0);
    }
    if (children < 0) {
      setChildren(0);
    }

    setGuest(adult + children);
  }, [adult, children])

  const filterItems = (city) => {
    const newItems = items.filter((item) => {
      return item.city === city && item.maxGuests >= guest;
      // Perlu dikasih kondisi bila ada Tamu atau tidak
    });
    setData(newItems);
    setSearchBarStatus(null);
  };

  return (
    <div className="App">
      <Header city={city} setSearchBarStatus={setSearchBarStatus} guest={guest} />
      {data && <ListRoom data={data} />}
      {searchBarStatus && (
        <SearchBarActive
          allCity={allCity}
          country={country}
          city={city}
          setCity={setCity}
          searchBarStatus={searchBarStatus}
          setSearchBarStatus={setSearchBarStatus}
          filterItems={filterItems}
          setGuest={setGuest}
          guest={guest}
          adult={adult}
          setAdult={setAdult}
          children={children}
          setChildren={setChildren}
        />
      )}
    </div>
  );
}

export default App;
