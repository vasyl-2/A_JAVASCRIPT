onmessage = function (e) {
    postMessage({
       message: {
           formula: e.data,
           result: '4'
       }
    })

}
