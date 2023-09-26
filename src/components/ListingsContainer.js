import React, { useState, useEffect } from "react";
// import ListingCard from "./ListingCard";
import ListingCard from "./ListingCard"


function ListingsContainer({ searchInput }) {
const [listings, setListings] = useState([])

useEffect(() => {
  fetch(" http://localhost:6001/listings")
  .then((res) => res.json())
  .then((data) => setListings(data))
}, [])



function handleDelete(id) {
  const filteredListings = listings.filter((l) => {
    return l.id !== id
  })

  setListings(filteredListings)
}

const filteredSearchListings = listings.filter((l) => {
  return l.description
  .toLowerCase()
  .includes(searchInput.toLowerCase())
})

const visibleListings = filteredSearchListings.map((l) => {
  return (
    <ListingCard
    key={l.description}
    listing={l}
    handleDelete={handleDelete}
    ></ListingCard>
  )   
})
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {visibleListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
