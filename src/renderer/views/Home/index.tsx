import { useEffect, useState } from 'react';
import ShowcaseList from '../../components/ShowcaseList';
import ShowcaseListItem from '../../components/ShowcaseListItem';
import { ArtistItem } from '../../../shared/types';

const Home = () => {
  const [featuredArtists, setFeaturedArtists] = useState<ArtistItem[]>([]);

  useEffect(() => {
    const getFeaturedArtists = async () => {
      const artists = await window.electronAPI.getFeaturedArtists();
      setFeaturedArtists(artists);
    };

    getFeaturedArtists();
  }, []);

  return (
    <ShowcaseList title="Featured artists">
      {featuredArtists.map((artist) => (
        <ShowcaseListItem
          key={artist._id}
          title={artist.name}
          subtitle={`${artist.tracksAmount} songs`}
          img={artist.image}
          to={`/artist/${artist.name}`}
        />
      ))}
    </ShowcaseList>
  );
};

export default Home;
