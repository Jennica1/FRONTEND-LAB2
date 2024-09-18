// App.jsx
import React from 'react';
import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';

function App() {
  return (
    <div>
      {artists.map((artist, index) => (
        <ArtistDetails key={index} artist={artist} />
      ))}
    </div>
  );
}

export default App;
