import { contextBridge, ipcRenderer } from 'electron';
import { Settings } from '../shared/types';

contextBridge.exposeInMainWorld('electronAPI', {
  openFolder: () => ipcRenderer.invoke('dialog:openFolder'),
  openImage: () => ipcRenderer.invoke('dialog:openImage'),
  updateSettings: (settings: Partial<Settings>) =>
    ipcRenderer.invoke('settings:update', settings),
  getSettings: () => ipcRenderer.invoke('settings:get'),
  scanTracks: () => ipcRenderer.invoke('tracks:scan'),
  getArtist: (artist: string) => ipcRenderer.invoke('artist:get', artist),
  updateArtistImage: (artist: string, imagePath: string) =>
    ipcRenderer.invoke('artist:update:image', artist, imagePath),
  getFeaturedArtists: () => ipcRenderer.invoke('featured:artists:get'),
  getTracksByArtist: (artist: string) =>
    ipcRenderer.invoke('artist:tracks:get', artist),
  getTracksByAlbum: (albumartist: string, album: string) =>
    ipcRenderer.invoke('album:tracks:get', albumartist, album),
});
