import { useState } from 'react';
import { Settings } from '../../../types';

const Home = () => {
  const [settings, setSettings] = useState<Settings>();

  const onFolderSelect = async () => {
    const filePath = await window.electronAPI.openFolder();
    console.log(filePath);

    if (!filePath) {
      return;
    }

    const updated: Partial<Settings> = { audioDirectories: [filePath] };
    console.log(updated);
    await window.electronAPI.updateSettings(updated);
    const newSettings = await window.electronAPI.getSettings();
    console.log(newSettings);
    setSettings(newSettings);
  };

  return (
    <div>
      <h1>Hello, Home!</h1>
      <button type="button" onClick={onFolderSelect}>
        Select folder
      </button>
      <p>Selected folder: {settings?.audioDirectories}</p>
    </div>
  );
};

export default Home;
