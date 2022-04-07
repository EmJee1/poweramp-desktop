import { contextBridge, ipcRenderer } from 'electron';
import { Settings } from '../types';

contextBridge.exposeInMainWorld('electronAPI', {
  openFolder: () => ipcRenderer.invoke('dialog:openFolder'),
  updateSettings: (settings: Partial<Settings>) =>
    ipcRenderer.invoke('settings:update', settings),
  getSettings: () => ipcRenderer.invoke('settings:get'),
});
