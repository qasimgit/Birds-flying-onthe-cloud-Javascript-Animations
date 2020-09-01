var frames = [
  { transform: "translateX(100%)" },
  { transform: "translateX(-100%)" },
];

var sceenryTiming = {
  duration: 5000,
  iterations: Infinity,
  playbackRate: -2,
};

var background = document.getElementById("background");

var backgroundMove = background.animate(frames, sceenryTiming);

backgroundMove.currentTime = backgroundMove.effect.getTiming().duration / 2;

function flyFaster() {
  backgroundMove.playbackRate *= 1.1;
  console.log("playBackRate has increased");
}

setInterval(() => {
  if (backgroundMove.playbackRate > 0.4) {
    backgroundMove.playbackRate *= .9;
  }
}, 3000);

document.addEventListener("click", flyFaster);
