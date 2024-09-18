// ArtistDetails.jsx
import React from "react";

function ArtistDetails({ artist }) {
  return (
    <div className="card">
      <h2>{artist.name}</h2>
      <p>{artist.country}</p>
      <p>{artist.years_active}</p>
    </div>
  );
}

export default ArtistDetails;
