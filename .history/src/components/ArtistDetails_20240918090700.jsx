import React from "react";

function ArtistDetails({ artist }) {
  return (
    <div className="card">
      <img src={artist.photo_url} width={100} height={50}className="photo"/>
      <div className="information">
        <h2>{artist.name}</h2>
        <p>{artist.country}</p>
        <p>{artist.years_active}</p>
      </div>
    </div>
  );
}

export default ArtistDetails;
