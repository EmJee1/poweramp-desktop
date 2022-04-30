import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TrackItem } from '../../../shared/types';
import Table from '../../components/Table';
import Link from '../../components/Link';

const Album = () => {
  const [albumTracks, setAlbumTracks] = useState<TrackItem[]>([]);
  const params = useParams();

  useEffect(() => {
    const { artist, album } = params;

    if (!artist || !album) {
      return;
    }

    const getTracks = async () => {
      setAlbumTracks(await window.electronAPI.getTracksByAlbum(artist, album));
    };

    getTracks();
  }, [params]);

  const image = useMemo(() => {
    if (!albumTracks.length) {
      return undefined;
    }

    return albumTracks[0].cover;
  }, [albumTracks]);

  return (
    <div>
      <div className="flex items-end gap-4">
        <img src={image} alt="" className="h-48 w-48" />
        <div>
          <h2 className="text-4xl font-bold">{params.album}</h2>
          <div className="flex gap-2">
            {params.artist && (
              <Link to={`/artist/${params.artist}`}>{params.artist}</Link>
            )}
            <p className="flex scale-50 items-center text-xs">●</p>
            <p>{albumTracks.length} songs</p>
          </div>
        </div>
      </div>
      <Table headerItems={['Title', 'Artists']}>
        {albumTracks.map((track) => (
          <tr className="border-8" key={track._id}>
            <td className="">{track.title}</td>
            <td className="flex gap-1">
              {track.artists
                ? track.artists.map((artist, i, arr) => (
                    <>
                      <Link to={`/artist/${artist}`} small>
                        {artist}
                      </Link>
                      {i < arr.length - 1 && (
                        <span className="-ml-1 text-sm text-slate-800">,</span>
                      )}
                    </>
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
