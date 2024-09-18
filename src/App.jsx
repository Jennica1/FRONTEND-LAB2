import React from 'react';
import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header/>
      {artists.map((artist, index) => (
        <ArtistDetails key={index} artist={artist} />
      ))}
    </div>
  );
}

export default App;
