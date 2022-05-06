import { promises as fs } from 'fs';
import path from 'path';

const getImageMimeTypeByFileExtension = (fileExtension: string) => {
  switch (fileExtension) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.webp':
      return 'image/webp';
    default:
      throw new Error(
        `Could not determine image mimetype for extension: ${fileExtension}`
      );
  }
};

export const convertImagePathToBase64DataUri = async (imagePath: string) => {
  const base64 = await fs.readFile(imagePath, 'base64');
  const fileExtension = path.extname(imagePath);
  const mimeType = getImageMimeTypeByFileExtension(fileExtension);
  return `data:${mimeType};base64,${base64}`;
};
