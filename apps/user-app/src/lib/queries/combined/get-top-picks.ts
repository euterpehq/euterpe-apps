import { fetchAlbums } from "../album/get-albums";
import { fetchArtistProfiles } from "../artist/get-artists";


export const fetchAlbumsAndArtists = async () => {
    const [albums, artists] = await Promise.all([
      fetchAlbums(), // Fetch albums data
      fetchArtistProfiles(), // Fetch artists data
    ]);
    return { albums, artists }; // Return both in a single object
  };
  