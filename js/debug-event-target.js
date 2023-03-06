function debugEventTarget (e, handler) {
    // e.stopImmediatePropagation();
    // e.stopPropagation();

    console.group('EVENT_TARGET____');
    console.log('target', e.target);
    console.log('currentTarget', e.currentTarget);
    // debugger;
    console.groupEnd();
}
