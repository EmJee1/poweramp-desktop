import { useContext } from 'react';
import { TrackItem } from '../../shared/types';
import PlayerContext from '../context/player';

interface TrackProps {
  track: TrackItem;
}

const Track = ({ track }: TrackProps) => {
  const { setCurrentTrack } = useContext(PlayerContext);

  return (
    <div className="flex">
      <img src={track.cover} alt="" className="h-12 w-12" />
      <div>
        <h5>{track.title}</h5>
        <p className="m-0">{track.artists?.join(', ')}</p>
      </div>
      <button type="button" onClick={() => setCurrentTrack(track)}>
        Play now!
      </button>
    </div>
  );
};

export default Track;
