// ArtistDetails.jsx
import React from "react";

function ArtistDetails({ artist }) {
  return (
    <div>
      <h3>{artist.name}</h3>
      <p>{artist.country}</p>
      <p>{artist.years_active}</p>
    </div>
  );
}

export default ArtistDetails;
