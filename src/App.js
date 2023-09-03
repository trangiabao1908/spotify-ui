import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSongs from './components/ListSongs';
import Provider from './Store/Provider';
import PlayingAudio from './components/PlayingAudio';

function App() {
   return (
      <div className="App">
         <Provider>
            <Navbar></Navbar>
            <div className="grid grid-cols-3 bg-slate-700 h-screen-content">
               {/* span 1 */}
               <DetailSong></DetailSong>
               {/* span 2 */}
               <ListSongs></ListSongs>
            </div>
            <div className="relative h-[100px]">
               <PlayingAudio></PlayingAudio>
            </div>
         </Provider>
      </div>
   );
}

export default App;
