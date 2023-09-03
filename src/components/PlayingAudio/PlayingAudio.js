import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import classNames from 'classnames/bind';
import styles from './PlayingAudio.module.scss';
import { useContext } from 'react';
import SongContext from '../../Store/Context';
const cx = classNames.bind(styles);
function PlayingAudio() {
   const { song, handleSetSong } = useContext(SongContext);
   const handleClickNext = () => {
      handleSetSong(song.id + 1);
   };
   const handleClickPrevious = () => {
      handleSetSong(song.id - 1);
   };
   return (
      <AudioPlayer
         src={song.url}
         layout="stacked-reverse"
         className={cx('format-bg-audio')}
         showSkipControls={true}
         showJumpControls={false}
         onClickNext={handleClickNext}
         onClickPrevious={handleClickPrevious}
      />
   );
}

export default PlayingAudio;
