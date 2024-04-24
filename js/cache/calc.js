const calculationCache = {},
    calculationCallbacks = {},
    mathWorker = new Worker('js/cache/worker.js');

mathWorker.addEventListener('message', function(e) {
    const message = e.data;
    calculationCache[message.message.formula] = message.message.result;
    calculationCallbacks[message.message.formula](message.message.result);
});


function runCalculation(formula, callback) {
    if (formula in calculationCache) {
        return callback(calculationCache[formula]);
    }

    if (formula in calculationCallbacks) {
        return setTimeout(function() {
            runCalculation(formula, callback);
        }, 0);
    }

    mathWorker.postMessage(formula);
    calculationCallbacks[formula] = callback;
}

document.querySelector('#calc').addEventListener('click', (e) => {
    const formula = 'formula';
    const cB = function formula (res) { console.log('RES____', res); }
    runCalculation(formula, cB);
})

