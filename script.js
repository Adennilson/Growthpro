function startCountdown(duration, display) {
      let timer = duration, minutes, seconds;
      setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = "00:" + minutes + ":" + seconds;
        if (--timer < 0) timer = 0;
      }, 1000);
    }
    window.onload = function () {
      const tenMinutes = 60 * 10;
      const display = document.querySelector('#timer');
      startCountdown(tenMinutes, display);
    };