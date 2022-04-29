import { useContext, useEffect, useState } from 'react';
import TracksContext from '../../context/tracks';
import PlayerContext from '../../context/player';
import ShowcaseList from '../../components/ShowcaseList';
import ShowcaseListItem from '../../components/ShowcaseListItem';
import { ArtistItem } from '../../../shared/types';

const Home = () => {
  const { tracks } = useContext(TracksContext);
  const { setCurrentTrack } = useContext(PlayerContext);
  const [featuredArtists, setFeaturedArtists] = useState<ArtistItem[]>([]);

  useEffect(() => {
    const getFeaturedArtists = async () => {
      const artists = await window.electronAPI.getFeaturedArtists();
      setFeaturedArtists(artists);
    };

    getFeaturedArtists();
  }, []);

  return (
    <div>
      <h4>Artists:</h4>
      <ShowcaseList title="Featured artists">
        {featuredArtists.map((artist) => (
          <ShowcaseListItem
            key={artist._id}
            title={artist.name}
            subtitle={`${artist.tracksAmount} songs`}
            to={`/artist/${artist.name}`}
          />
        ))}
      </ShowcaseList>
      <h4>Tracks:</h4>
      {tracks.map((track) => (
        <button
          type="button"
          className="block"
          key={track.path}
          onClick={() => setCurrentTrack(track)}
        >
          {track.albumartist} : {track.title}
        </button>
      ))}
    </div>
  );
};

export default Home;
