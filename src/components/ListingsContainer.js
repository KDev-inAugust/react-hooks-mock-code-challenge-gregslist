import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

// import ListingCard from "./ListingCard";

function ListingsContainer({passedSearch}) {
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

console.log("passed search=", passedSearch)

  

  let filtered = listings.filter((index)=>{ 
    if(passedSearch===""){
      return listings;
    }
    else return index.description.toLowerCase().includes(passedSearch); 
})



  return (
    <main>
      <ul className="cards">
        {filtered.map((index)=>{
          return(
            <ListingCard listing={index} onDeleteClick={onDeleteClick}/>
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
