import { useEffect, useMemo, useState } from 'react';
import SettingsContext, { ISettingsContext } from './context/settings';
import TracksContext, { ITracksContext } from './context/tracks';
import PlayerContext, { IPlayerContext } from './context/player';
import Router from './router';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [loading, setLoading] = useState({ settings: true, tracks: true });
  const [settings, setSettings] = useState() as [
    ISettingsContext['settings'],
    ISettingsContext['setSettings']
  ];
  const [tracks, setTracks] = useState() as [
    ITracksContext['tracks'],
    ITracksContext['setTracks']
  ];
  const [currentTrack, setCurrentTrack] =
    useState<IPlayerContext['currentTrack']>(null);
  const [audioElement] = useState<IPlayerContext['audioElement']>(new Audio());

  useEffect(() => {
    const fetchSettings = async () => {
      const res = await window.electronAPI.getSettings();
      setSettings(res);
      setLoading((curr) => ({ ...curr, settings: false }));
    };

    const fetchTracks = async () => {
      const res = await window.electronAPI.getTracks();
      setTracks(res);
      setLoading((curr) => ({ ...curr, tracks: false }));
    };

    fetchSettings();
    fetchTracks();
  }, []);

  const isLoading = useMemo(
    () => loading.settings || loading.tracks,
    [loading]
  );

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      <TracksContext.Provider value={{ tracks, setTracks }}>
        <PlayerContext.Provider
          value={{ currentTrack, setCurrentTrack, audioElement }}
        >
          {!isLoading && <Router />}
        </PlayerContext.Provider>
      </TracksContext.Provider>
    </SettingsContext.Provider>
  );
};

export default App;
