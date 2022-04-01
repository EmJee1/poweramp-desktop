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
