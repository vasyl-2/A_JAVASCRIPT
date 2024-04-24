/*
* Here, the runCalculation function is synchronous when the result has already
been cached but is asynchronous otherwise. There are three possible
scenarios.
• The formula has already been computed, so the result is in the calculationCache. In this case, runCalculation is synchronous.
• The formula has been sent to the worker, but the result hasn’t been
received yet. In this case, runCalculation sets a timeout to call itself again;
the process will repeat until the result is in calculationCache.
• The formula hasn’t yet been sent to the worker. In this case, we’ll invoke
the callback from the worker’s 'message' event listener*/


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
        // return callback(calculationCache[formula]);
        callback(calculationCache[formula]);
        return;
    }

    if (formula in calculationCallbacks) {
        console.log('HERE')
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

