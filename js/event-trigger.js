function addListenerToList() {
    document.querySelector('.list')
        .addEventListener('click', (e) => debugEventTarget(e));
}
