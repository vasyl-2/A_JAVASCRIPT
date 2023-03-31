function setTime() {
    setTimeout(() => {
        console.log('SOME______');
    }, 30000);

    console.log('setTime_________')
}

function addListener() {
    document.querySelector('body').addEventListener('click', () => {
        console.log('CLICK_______');
        // setTimeout(() => {
        //     console.log('NEXT_TIME_OUT____')
        // }, 30);
    })
}

// addListener();

// setTime();

function test() { console.log('CLICK_______')}
