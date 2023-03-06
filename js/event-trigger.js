function addListenerToList() {
    document.querySelector('.list').addEventListener('click', debugEventTarget, false);
}

// function addListenerToBody() {
//     document.querySelector('body').addEventListener('click', debugEventTarget, true);
// }

function addListenerToBody() {
    // false - is default
    document.querySelector('body').addEventListener('click', debugEventTarget, false);
}

function addListenerToItem() {
    document.querySelector('.item1').addEventListener('click', debugEventTarget, false );
}

