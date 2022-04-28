export interface Settings {
  audioDirectories: string[];
}

export interface Track {
  path: string;
  title?: string;
  albumartist?: string;
  artists?: string[];
  genre?: string[];
  cover?: string;
  album?: string;
}
export interface Cache {
  artists: string[];
}
