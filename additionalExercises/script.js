let stopwatch = {
    time = 0,
    interval = null,

    start: function () {
        this.interval = setInterval(() => {
            this.time++;
            console.log(this.time);
        }, 1000);
    },

    stop: function () {
        clearInterval(this.interval);
        this.interval = null;
    },

    reset: function () {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        this.time = 0;
    }
};