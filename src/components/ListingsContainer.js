import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

// import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(res=>res.json())
    .then(data=>setListings(data))
  
  },[])

  function onDeleteClick(deletedItem){
    const update = listings.filter((index)=>
      index.id !==deletedItem.id);
      setListings(update);
      console.log(deletedItem)
  }

  return (
    <main>
      <ul className="cards">
        {listings.map((index)=>{
          return(
            <ListingCard listing={index} onDeleteClick={onDeleteClick}/>
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
