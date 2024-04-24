function setTime() {
    setTimeout(() => {
        let i = 0;
        while (i < 9000000000) {
            i++;
        }
        a++;
        console.log('START____________!!!!!1', a);
    }, 3000);

}

function addListener() {
    document.querySelector('body').addEventListener('click', () => {
        let i = 0;
        // while (i < 9000000000) {
        while (i < 900) {
            i++;
        }

        console.log('I___', i)

    })
}

function tryPromise() {
    const prom = new Promise((res, rej) => {
        res(5)
    })
}
addListener();
setTime()

