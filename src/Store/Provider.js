import SongContext from './Context';
import DataSong from './data/songs.json';

import React from 'react';
import { useState } from 'react';

export default function Provider({ children }) {
   const [song, setSong] = useState(DataSong[0]);
   const handleSetSong = (songId) => {
      const song = DataSong.find((song) => song.id === songId);
      if (!song) {
         setSong(DataSong[0]);
      } else {
         setSong(song);
      }
   };
   return <SongContext.Provider value={{ DataSong, song, handleSetSong }}>{children}</SongContext.Provider>;
}
