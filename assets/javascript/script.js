time = 60;
var clockCountdown = function () {
    time = time - 1;
    console.log(time);
}
var clockRefresh = function () {
    setInterval(clockCountdown, 1000);

}


$("#start-btn").on("click", clockRefresh);