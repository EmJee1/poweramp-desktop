import { useEffect, useState } from 'react';
import SettingsContext, { ISettingsContext } from './context/settings';
import PlayerContext, { IPlayerContext } from './context/player';
import Router from './router';
import 'tailwindcss/tailwind.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState() as [
    ISettingsContext['settings'],
    ISettingsContext['setSettings']
  ];
  const [currentTrack, setCurrentTrackState] =
    useState<IPlayerContext['currentTrack']>(null);
  const [audioElement] = useState<IPlayerContext['audioElement']>(new Audio());

  const setCurrentTrack: IPlayerContext['setCurrentTrack'] = async (track) => {
    if (!track) {
      setCurrentTrackState(null);
      audioElement.pause();
      return;
    }

    audioElement.src = `poweramp://${track.path}`;
    await audioElement.play();
    setCurrentTrackState(track);
  };

  useEffect(() => {
    const fetchSettings = async () => {
      const res = await window.electronAPI.getSettings();
      setSettings(res);
      setLoading(false);
    };

    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      <PlayerContext.Provider
        value={{ currentTrack, setCurrentTrack, audioElement }}
      >
        {!loading && <Router />}
      </PlayerContext.Provider>
    </SettingsContext.Provider>
  );
};

export default App;
