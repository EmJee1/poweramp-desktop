import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useArtists from '../../hooks/use-artists';
import TracksContext from '../../context/tracks';
import { Track } from '../../../shared/types';
import Table from '../../components/Table';
import Link from '../../components/Link';

const Album = () => {
  const { tracks } = useContext(TracksContext);
  const { artists, getAlbumTracks } = useArtists();
  const [albumTracks, setAlbumTracks] = useState<Track[]>([]);
  const params = useParams();

  useEffect(() => {
    const { artist, album } = params;

    if (!artist || !artists.includes(artist) || !album) {
      return;
    }

    setAlbumTracks(getAlbumTracks(tracks, album, artist));
  }, [params, artists, tracks]);

  return (
    <div>
      <h2>{params.album}</h2>
      <Table headerItems={['Title', 'Artists']}>
        {albumTracks.map((track) => (
          <tr className="border-8">
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
