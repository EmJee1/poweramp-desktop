import { useContext } from 'react';
import SettingsContext from '../../context/settings';

const Settings = () => {
  const { settings, setSettings } = useContext(SettingsContext);

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
  };

  return (
    <div>
      <h1>Settings</h1>
      <button type="button" onClick={onFolderSelect}>
        Select folder
      </button>
      <button type="button" onClick={onFolderScan}>
        Scan folders
      </button>
      <h4>Settings:</h4>
      <p>Selected folder: {settings.audioDirectories}</p>
    </div>
  );
};

export default Settings;
