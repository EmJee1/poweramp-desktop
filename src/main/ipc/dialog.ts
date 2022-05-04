import { dialog } from 'electron';

export const handleDialogOpenFolder = async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openDirectory'],
  });

  if (canceled) {
    return null;
  }

  return filePaths[0] ?? null;
};

export const handleDialogOpenImage = async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [{ name: 'image', extensions: ['png', 'jpg', 'jpeg', 'webp'] }],
  });

  if (canceled) {
    return null;
  }

  return filePaths[0] ?? null;
};
