// during first 3 seconds if we were to click we would see console log
// after 3 sec callback from setTimeout is being queued, so whatever goes to queue should wait until queue is empty

function cpuPress() {
    let i = 0;
    while (i < 9000000000) { i++; }
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
addListener();
// setTime();
tryPromiseCPUIntensive();

