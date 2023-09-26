import React, { useState } from "react";

function ListingCard({ listing, handleDelete }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite)
  }

  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE", 
    })
    .then((res) => res.json())
    .then((data) => handleDelete(listing.id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button 
          onClick={handleFavoriteClick}
          className="emoji-button favorite active">★</button>
        ) : (
          <button 
          onClick={handleFavoriteClick}
          className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button 
        onClick={handleDeleteClick}
        className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
