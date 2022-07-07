import React, {useState}from "react";

function ListingCard({listing, onDeleteClick}) {
  const {id, description, image, location} = listing
  const [favorite, setFavorite]=useState("emoji-button favorite")

function handleFavoriteClick (){
  favorite==="emoji-button favorite" ? setFavorite("emoji-button favorite active")
  :
  setFavorite("emoji-button favorite") 
}

function handleDeleteCLick (){
  fetch(`http://localhost:6001/listings/${listing.id}`, {
    method: "DELETE",
})
.then((res)=>res.json())
.then(()=>onDeleteClick(listing));
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <div onClick={handleFavoriteClick}>
        {favorite==="emoji-button favorite active" ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        </div>
        <strong>{description}</strong>
        <span> {location}</span>
        <button onClick={handleDeleteCLick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
