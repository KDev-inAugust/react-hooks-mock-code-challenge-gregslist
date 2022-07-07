import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

 const [passedSearch, setPassedSearch] = useState("")

  function onSearchSubmit (value){
    console.log("in APP function", value);
    setPassedSearch(value);
  }
 

  return (
    <div className="app">
      <Header onSearchSubmit={onSearchSubmit}/>
      <ListingsContainer passedSearch={passedSearch}/>
    </div>
  );
}

export default App;
