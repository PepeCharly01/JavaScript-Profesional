import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector("video");
const player = new MediaPlayer({
    el: video, 
    Plugins: [new AutoPlay(), new AutoPause()],
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