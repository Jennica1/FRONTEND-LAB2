import best from './src/best-selling-music-artist.js';

export default function ArtistDetails(props) {

    const {artist} = props;

    return 
        <>
            <p>Hi im {artist.name}</p>
        </>
}
