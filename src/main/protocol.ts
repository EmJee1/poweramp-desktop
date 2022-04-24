import { ProtocolRequest, ProtocolResponse } from 'electron';

const powerampProtocolHandler = (
  req: ProtocolRequest,
  callback: (response: string | ProtocolResponse) => void
) => {
  const requestedPath = req.url.replace('poweramp://', '');

  // TODO: add logic to determine if user is allowed to read the file
  // Check for allowed filetypes and if basepath matches selected audioDirectory
  const allowFileRead = true;

  if (!allowFileRead) {
    callback({
      // return as -6 (file not found error) if the file is not allowed to be read
      error: -6,
    });
    return;
  }

  callback({
    path: requestedPath,
  });
};

export default powerampProtocolHandler;
