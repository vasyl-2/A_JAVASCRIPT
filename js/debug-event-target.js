function debugEventTarget(e) {
    debugger;
    console.group('EVENT_TARGET____');
    console.log('target', e.target);
    console.log('currentTarget', e.currentTarget);
    console.groupEnd();
}
