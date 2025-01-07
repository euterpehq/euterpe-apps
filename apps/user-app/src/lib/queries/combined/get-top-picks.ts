import { getAlbums } from "../album/get-albums";
import { getArtists } from "../artist/get-artists";


export const getAlbumsAndArtists = async () => {
    const [albums, artists] = await Promise.all([
      getAlbums(), // Fetch albums data
      getArtists(), // Fetch artists data
    ]);
    return { albums, artists }; // Return both in a single object
  };
  