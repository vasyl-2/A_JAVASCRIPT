function cpuPress() {
    let i = 0;
    while (i < 5_000_000_000) {
        i++;
    }
}

onmessage = function(event) {
    console.log('Worker: Message received from main script');
    const prom = new Promise((res, rej) => {
        setTimeout(() => {
            cpuPress();
            res(5);
        })

    });

    prom.then((res) => {
        console.log('PROMISED_RESULT____', res);
        postMessage(res);
    })

}
