import { contextBridge, ipcRenderer } from 'electron';
import { Settings } from '../shared/types';

contextBridge.exposeInMainWorld('electronAPI', {
  openFolder: () => ipcRenderer.invoke('dialog:openFolder'),
  updateSettings: (settings: Partial<Settings>) =>
    ipcRenderer.invoke('settings:update', settings),
  getSettings: () => ipcRenderer.invoke('settings:get'),
  scanLibrary: () => ipcRenderer.invoke('library:scan'),
});
