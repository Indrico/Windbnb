import { useState } from "react";
import SearchBarActive from "./SearchBarActive";
import items from "../stays.json"
const { default: Header } = require("./Header");
const { default: ListRoom } = require("./ListRoom");

const allCity = [...new Set (items.map((item) => item.city))];

function App() {
  const [city, setCity] = useState("Helsinki");
  const [country] = useState("Finland");
  const [searchBarStatus, setSearchBarStatus] = useState(null);
  const [data, setData] = useState(items);

  const filterItems = (city) => {
    console.log(city);
    const newItems = items.filter((item) => {
      return item.city === city
      // Perlu dikasih kondisi bila ada Tamu atau tidak
    })
    setData(newItems);
    setSearchBarStatus(null);
  }

  return (
    <div className="App">
      <Header city={city} setSearchBarStatus={setSearchBarStatus}/>
      {data && <ListRoom data={data}/>}
      {searchBarStatus && <SearchBarActive allCity={allCity} country={country} city={city} 
        setCity={setCity} setSearchBarStatus={setSearchBarStatus} filterItems={filterItems}/>}
    </div>
  );
}

export default App;
