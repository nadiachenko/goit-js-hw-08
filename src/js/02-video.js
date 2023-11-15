
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

function setTimeStop(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
}

player.on('timeupdate', throttle(setTimeStop, 500))
const pausedValue = JSON.parse(localStorage.getItem("videoplayer-current-time"));
//console.log("test", pausedValue);

player.setCurrentTime(pausedValue).then(function (seconds) {
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
