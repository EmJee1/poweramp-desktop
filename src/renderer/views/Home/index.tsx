import { useContext, useState } from 'react';
import { Settings } from '../../../shared/types';
import SettingsContext from '../../context/settings';

const Home = () => {
  const { settings, setSettings } = useContext(SettingsContext);
  const [tracks, setTracks] = useState<string[]>([]);

  const onFolderSelect = async () => {
    const filePath = await window.electronAPI.openFolder();

    if (!filePath) {
      return;
    }

    const updated: Partial<Settings> = {
      ...settings,
      audioDirectories: [filePath],
    };
    await window.electronAPI.updateSettings(updated);
    const newSettings = await window.electronAPI.getSettings();
    setSettings(newSettings);
  };

  const onFolderScan = async () => {
    const libraryContents = await window.electronAPI.scanLibrary();
    setTracks(libraryContents);
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
        <p key={track}>{track}</p>
      ))}
    </div>
  );
};

export default Home;
