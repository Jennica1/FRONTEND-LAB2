// ArtistDetails.jsx
import React from "react";

function ArtistDetails({ artist }) {
  return (
    <div>
      <h1>{artist.name}</h1>
      <p>{artist.country}</p>
      <p>{artist.years_active}</p>
    </div>
  );
}

export default ArtistDetails;
