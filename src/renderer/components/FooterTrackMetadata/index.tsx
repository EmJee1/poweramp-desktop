import { useContext, useMemo } from 'react';
import PlayerContext from '../../context/player';
import { Link } from 'react-router-dom';

const FooterTrackMetadata = () => {
  const { currentTrack } = useContext(PlayerContext);

  const metadata = useMemo(() => {
    if (!currentTrack) {
      return null;
    }

    return {
      title: currentTrack.title || 'No title found',
      artists: currentTrack.artists || 'No artist(s) found',
    };
  }, [currentTrack]);

  if (!metadata) {
    return (
      <div>
        <h5>No track selected</h5>
        <p>-</p>
      </div>
    );
  }

  return (
    <div>
      <h5>{metadata.title}</h5>
      {typeof metadata.artists === 'object' ? (
        <div className="flex gap-1 text-xs">
          {metadata.artists.map((artist) => (
            <Link to={`/artist/${artist}`} key={artist}>
              {artist}
            </Link>
          ))}
        </div>
      ) : (
        <p>{metadata.artists}</p>
      )}
    </div>
  );
};

export default FooterTrackMetadata;
