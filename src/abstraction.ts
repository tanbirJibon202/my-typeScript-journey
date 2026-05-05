/*
  1. Interface
  2. Abstract Class
*/

// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// class MusicPlayer implements MediaPlayer {
//   play(): void {
//     console.log("Playing music");
//   }
//   pause(): void {
//     console.log("Music paused");
//   }
//   stop(): void {
//     console.log("Music stopped");
//   }
// }

// const audioMack = new MusicPlayer();

// audioMack.play();
// audioMack.pause();
// audioMack.stop();

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class Audiomack extends MediaPlayer {
  play(): void {
    console.log("Playing music");
  }
  pause(): void {
    console.log("Music paused");
  }
  stop(): void {
    console.log("Music stopped");
  }
}

const audio = new Audiomack();
audio.play();
audio.pause();
audio.stop();
