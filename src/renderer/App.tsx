import { useEffect, useState } from 'react';
import SettingsContext, { ISettingsContext } from './context/settings';
import Router from './router';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState() as [
    ISettingsContext['settings'],
    ISettingsContext['setSettings']
  ];

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
      {!loading && <Router />}
    </SettingsContext.Provider>
  );
};

export default App;
