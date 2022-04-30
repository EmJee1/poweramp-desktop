import { contextBridge, ipcRenderer } from 'electron';
import { Settings } from '../shared/types';

contextBridge.exposeInMainWorld('electronAPI', {
  openFolder: () => ipcRenderer.invoke('dialog:openFolder'),
  updateSettings: (settings: Partial<Settings>) =>
    ipcRenderer.invoke('settings:update', settings),
  getSettings: () => ipcRenderer.invoke('settings:get'),
  scanTracks: () => ipcRenderer.invoke('tracks:scan'),
  getTracks: () => ipcRenderer.invoke('tracks:get'),
  getFeaturedArtists: () => ipcRenderer.invoke('featured:artists:get'),
  getTracksByArtist: (artist: string) =>
    ipcRenderer.invoke('artist:tracks:get', artist),
  getTracksByAlbum: (albumartist: string, album: string) =>
    ipcRenderer.invoke('album:tracks:get', albumartist, album),
});
