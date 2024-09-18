import React from "react";

function ArtistDetails({ArtistDetails}) {

  return (
    <div>
      <h1>{artists.name}</h1>
      <p>{artists.country}</p>
      <p>{artists.years_active}</p>
    </div>
  )

}

export default ArtistDetails;