import { artists } from '../best-selling-music-artists';

function ArtistDetails(props) {

    const {artist} = props;
   

    return (
        <>
        <img source={{ uri: item.photo_url }} style={{ width: 100, height: 100 }} />
          <p>{item.name}</p>
          <p>{item.country}</p>
          <p>{item.years_active}</p>
        </>
    )
}