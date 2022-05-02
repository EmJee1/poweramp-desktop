import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TrackItem } from '../../../shared/types';
import Table from '../../components/Table';
import Link from '../../components/Link';
import PlayerContext from '../../context/player';
import useArtists from '../../hooks/use-artists';

const Album = () => {
  const { setCurrentTrack } = useContext(PlayerContext);
  const [albumTracks, setAlbumTracks] = useState<TrackItem[]>([]);
  const { albumInfo } = useArtists(albumTracks);
  const params = useParams();

  useEffect(() => {
    const { artist, album } = params;

    if (!artist || !album) {
      return;
    }

    const getTracks = async () => {
      const tracks = await window.electronAPI.getTracksByAlbum(artist, album);
      setAlbumTracks(tracks);
    };

    getTracks();
  }, [params]);

  return (
    <div>
      <div className="flex items-end gap-4">
        <img src={albumInfo.cover} alt="" className="h-48 w-48" />
        <div>
          <h2 className="text-4xl font-bold">{params.album}</h2>
          <div className="flex gap-2">
            {params.artist && (
              <Link to={`/artist/${params.artist}`}>{params.artist}</Link>
            )}
            <p className="flex scale-50 items-center text-xs">●</p>
            <p>{albumInfo.trackTotal} songs</p>
          </div>
        </div>
      </div>
      <Table headerItems={['#', 'Title', 'Artists']}>
        {albumTracks.map((track) => (
          <tr className="border-8" key={track._id}>
            <td>{track.trackNumber}</td>
            <td>
              <button
                type="button"
                className="text-left"
                onClick={() => setCurrentTrack(track)}
              >
                {track.title}
              </button>
            </td>
            <td className="flex gap-1">
              {track.artists
                ? track.artists.map((artist, i, arr) => (
                    <span key={artist}>
                      <Link to={`/artist/${artist}`} small>
                        {artist}
                      </Link>
                      {i < arr.length - 1 && (
                        <span className="-ml-1 text-sm text-slate-800">,</span>
                      )}
                    </span>
                  ))
                : 'Unknown'}
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default Album;
