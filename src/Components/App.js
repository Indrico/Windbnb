import { useState, useEffect } from "react";
import SearchBarActive from "./SearchBarActive";
import useFetch from "./useFetch";
const { default: Header } = require("./Header");
const { default: ListRoom } = require("./ListRoom");

function App() {
  let [city, setCity] = useState("Helsinki");
  const { data, isPending, error } = useFetch('./stays.json');
  const [searchBarStatus, setSearchBarStatus] = useState(null);

  console.log(data);

  return (
    <div className="App">
      <Header city={city} setSearchBarStatus={setSearchBarStatus}/>
      {error && <div>{error}</div>}
      {isPending && <div>Loading</div>}
      {data && <ListRoom data={data}/>}
      {searchBarStatus && <SearchBarActive/>}
    </div>
  );
}

export default App;
