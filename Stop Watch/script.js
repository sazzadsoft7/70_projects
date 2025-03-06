let timer;
        let startTime;
        let elapsedTime = 0;
        let running = false;

        function startStopwatch() {
            if (!running) {
                startTime = Date.now() - elapsedTime;
                timer = setInterval(updateDisplay, 10);
                running = true;
            }
        }

        function stopStopwatch() {
            if (running) {
                clearInterval(timer);
                elapsedTime = Date.now() - startTime;
                running = false;
            }
        }

        function resetStopwatch() {
            clearInterval(timer);
            elapsedTime = 0;
            running = false;
            updateDisplay();
        }

        function updateDisplay() {
            let time = elapsedTime;
            if (running) {
                time = Date.now() - startTime;
            }
            
            let milliseconds = Math.floor((time % 1000) / 10);
            let seconds = Math.floor((time / 1000) % 60);
            let minutes = Math.floor((time / (1000 * 60)) % 60);

            document.getElementById("display").innerText = 
                `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
        }