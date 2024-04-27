// during first 3 seconds if we were to click we would see console log
// after 3 sec callback from setTimeout is being queued, so whatever goes to queue should wait until queue is empty

import { PubSub } from "./pubsub/pubsub.js";
import {tasks, startQueue } from "./queue/queue.js";

function cpuPress() {
    let i = 0;
    while (i < 5_000_000_000) {
        i++;
    }
}

function cpuPressFor() {
    let counter = 0;
    for (let i = 0; i < 5_000_000_000; i++) {
        counter++;
    }
}

function setTime() {
    setTimeout(() => {
        cpuPress();
        console.log('START____________!!!!!');
    }, 3000);

}

function addListener() {
    let i = 0;
    document.querySelector('body').addEventListener('click', (event) => {
        // cpuPress();
        i++;
        console.log('I___', i);

    })
}

function tryPromiseCPUIntensive() {
    const prom = new Promise((res, rej) => {
        setTimeout(() => {
            cpuPress();
            res(5);
        })

    });

    prom.then((res) => {
        console.log('PROMISED_RESULT____', res);
    })
}

function tryPromiseCPUIntensiveWithWorker() {
    const myWorker = new Worker('js/worker.js');
    myWorker.postMessage('start');
    myWorker.onmessage = function(e) {
        console.log('FROM_______WORKER___________', e);
    }
}

// addListener();
// setTime();
// tryPromiseCPUIntensive();
// tryPromiseCPUIntensiveWithWorker();

const newEvent = 'newEvent';
startQueue();

PubSub.on(newEvent, (e) => {
    tasks.push(() => console.log('EVENT___EMITTED________', e))
});
PubSub.emit(newEvent, [1,2,3]);

