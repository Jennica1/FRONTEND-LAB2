import { artists } from './best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails';

function App() {

  return (
    <div className="app">
      <ArtistDetails artists={artists}/>
    </div>
  );
}

export default App;
