import { useContext } from 'react';
import { Settings } from '../../../types';
import SettingsContext from '../../context/settings';

const Home = () => {
  const { settings, setSettings } = useContext(SettingsContext);

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

  return (
    <div>
      <h1>Hello, Home!</h1>
      <button type="button" onClick={onFolderSelect}>
        Select folder
      </button>
      <p>Selected folder: {settings.audioDirectories}</p>
    </div>
  );
};

export default Home;
