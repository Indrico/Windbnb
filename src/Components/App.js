import { useState } from "react";
import useFetch from "./useFetch";
const { default: Header } = require("./Header");
const { default: ListRoom } = require("./ListRoom");

function App() {
  let [location, setLocation] = useState("Helsinki, Finland");
  const { data, isPending, error } = useFetch('./stays.json');

  console.log(data);

  return (
    <div className="App">
      <Header location={location} setLocation={setLocation}/>
      {error && <div>{error}</div>}
      {isPending && <div>Loading</div>}
      {data && <ListRoom data={data}/>}
    </div>
  );
}

export default App;
