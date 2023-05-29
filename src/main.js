// const log = Vue.createApp({
//     data: function() {
//         return {
//             message: 'Hello World',
//         }
//     },
//     render() {
//         return Vue.h('div', [
//             Vue.h('div', this.message),
//             Vue.h('div', this.message)
//         ]);
//     }
// });

const app = Vue.createApp({
    data: function() {
        return {
            counter: 0,
            timer: null,
        }
    },
    methods: {
        addMessage: function(message) {
            const messageElm = document.createElement('div');
            const now = new Date().toLocaleTimeString();
            messageElm.innerText = now + ' ' + message;
            this.$refs.log.appendChild(messageElm);
        },
        startButton: function() {
            let seconds = 0;
            if (this.timer !== null) return;
            this.timer = setInterval(() => {
                seconds++;
                this.counter = seconds;
                console.log(seconds);
            }, 1000);
            this.addMessage('start');
        },
        stopButton: function() {
            if (this.timer === null) return;
            clearInterval(this.timer);
            this.timer = null;
            this.addMessage('stop');
        },
        resetButton: function() {
            if (this.counter === 0) return;
            this.counter = 0;
            logElm = document.getElementById('log');
            logElm.innerText = '';
        }
    }
});
app.mount('#app');
// log.mount('#log');