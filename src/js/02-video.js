import vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

const throttledFunction = throttle(player.on("timeupdate", function(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}), 1000);

throttledFunction();
