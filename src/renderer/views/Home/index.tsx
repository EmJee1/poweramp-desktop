import { useContext } from 'react';
import SettingsContext from '../../context/settings';
import TracksContext from '../../context/tracks';

const Home = () => {
  const { settings, setSettings } = useContext(SettingsContext);
  const { tracks, setTracks } = useContext(TracksContext);

  const onFolderSelect = async () => {
    const filePath = await window.electronAPI.openFolder();

    if (!filePath) {
      return;
    }

    await window.electronAPI.updateSettings({ audioDirectories: [filePath] });
    const newSettings = await window.electronAPI.getSettings();
    setSettings(newSettings);
  };

  const onFolderScan = async () => {
    await window.electronAPI.scanTracks();
    const newTracks = await window.electronAPI.getTracks();
    setTracks(newTracks);
  };

  return (
    <div>
      <h1>Hello, Home!</h1>
      <button type="button" onClick={onFolderSelect}>
        Select folder
      </button>
      <button type="button" onClick={onFolderScan}>
        Scan folders
      </button>
      <h4>Settings:</h4>
      <p>Selected folder: {settings.audioDirectories}</p>
      <h4>Tracks:</h4>
      {tracks.map((track) => (
        <p key={track.path}>
          {track.albumartist} : {track.title}
        </p>
      ))}
    </div>
  );
};

export default Home;
