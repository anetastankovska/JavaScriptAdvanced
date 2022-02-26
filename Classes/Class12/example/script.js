// let stopWatch = {
//     time: 0,
//     interval: null,

//     start: function () {
//         this.interval = setInterval(() => { 
//             this.time++;
//             console.log(this.time);
//         }, 1000);
//     },

//     stop: function () {
//         clearInterval(this.interval);
//         this.interval = null;
//     },

//     reset: function () {
//         if (this.interval) {
//             clearInterval(this.interval);
//             this.interval = null;
//         } 
//         this.time = 0;
//     }
// };


class StopWatch {
    constructor() {
        this.time = 0;
        this.interval = null;
    }

    init() {
        let startBtn = document.getElementById('start');
        let stopBtn = document.getElementById('stop');
        let resetBtn = document.getElementById('reset');
        let display = document.getElementById('counter');

        startBtn.addEventListener('click', function () {
            this.start(display);
        });
        stopBtn.addEventListener('click', this.stop);
        resetBtn.addEventListener('click', function() {
            this.reset();
            display.innerText = 0;
        });
    }



    start (element) {
        this.interval = setInterval(() => { 
            this.time++;
            element.innerText = this.time;
            console.log(this.time);
        }, 1000);
    }

    stop () {
        clearInterval(this.interval);
        this.interval = null;
    }

    reset () {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        } 
        this.time = 0;
    }
};



let stopwatch = new StopWatch();
stopwatch.work();