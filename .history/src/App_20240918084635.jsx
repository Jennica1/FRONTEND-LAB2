import React from 'react';
import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';

function App() {

  <div>
      {artists.map((artist, index) => (
        <ArtistDetails key={index} artists={artist} />
      ))}
  </div>
}

export default App;
