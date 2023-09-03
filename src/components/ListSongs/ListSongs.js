import { useContext, useState, useEffect } from 'react';
import SongContext from '../../Store/Context';

function ListSongs() {
   const { DataSong, handleSetSong, song } = useContext(SongContext);
   const [songId, setSongId] = useState(0);
   const handlePlay = (songId) => {
      setSongId(songId);
      handleSetSong(songId);
   };
   useEffect(() => {
      setSongId(song.id);
   }, [song]);
   return (
      <div className="col-span-2 overflow-hidden overflow-y-scroll Prevent-User-Select ">
         <table className="table table-auto w-full relative">
            <thead className="sticky top-0 h-12 text-white bg-slate-700">
               <tr>
                  <th className="w-[10%]">#</th>
                  <th className="text-left w-[60%]">Title</th>
                  <th className="w-[20%]">Author</th>
                  <th className="w-[10%]">
                     <i className="fa fa-download"></i>
                  </th>
               </tr>
            </thead>
            <tbody className="bg-slate-800 mt-3 h-full">
               {DataSong.map((song, index) => (
                  <tr
                     key={index}
                     className={`h-12 hover:bg-slate-600 text-gray-400 ${
                        song.id === songId && 'hover:bg-slate-600 text-teal-300'
                     }`}
                     onClick={() => handlePlay(song.id)}
                  >
                     <td className="text-center">{index + 1}</td>
                     <td>{song.name}</td>
                     <td className="text-center">{song.author}</td>
                     <td className="text-center">
                        <a href={song.url}>
                           <i className="fa fa-download"></i>
                        </a>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}

export default ListSongs;
