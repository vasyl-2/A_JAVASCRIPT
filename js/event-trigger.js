document.querySelector('.list').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.group('EVENT_TARGET____');
    console.log('target', e.target);
    console.log('currentTarget', e.currentTarget);
    console.groupEnd();
})

console.log('ELEMENT___', document.querySelector('.list'));
