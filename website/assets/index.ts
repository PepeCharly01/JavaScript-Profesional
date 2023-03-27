import MediaPlayer from '../../mediaplayer/MediaPlayer';
import AutoPlay from '../../mediaplayer/src/plugins/AutoPlay';
import AutoPause from '../../mediaplayer/src/plugins/AutoPause';
import Ads from '../../mediaplayer/src/plugins/Ads/Ads'

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const playButton: HTMLElement = document.querySelector('#playButton') as HTMLElement;
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector('#muteButton') as HTMLElement;
muteButton.onclick = () => {
  player.media.muted
    ? player.unmute()
    : player.mute()
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}