import { useContext } from 'react';
import SongContext from '../../Store/Context';

function DetailSong() {
   const { song } = useContext(SongContext);
   return (
      <div className="col-span-1 p-3">
         <h2 className="text-cyan-400 font-semibold">Now playing</h2>
         <h2 className="text-gray-400 text-2xl mt-1">{song.name}</h2>
         <div className="w-[256px] mt-16 m-auto">
            <img
               className="w-full object-cover h-[256px]"
               src={song.links.images[0].url}
               alt="Producer of this song"
            ></img>
         </div>
         <div className="flex justify-evenly items-center mt-4">
            <img className="w-[64px] rounded-full" src={song.links.images[1].url} alt=""></img>
            <span className="text-white text-xl">{song.author}</span>
         </div>
      </div>
   );
}

export default DetailSong;
