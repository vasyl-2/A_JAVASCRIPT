const PubSub = {
    handlers: {}
}

PubSub.on = function(eventType, handler) {
    if (!(eventType in this.handlers)) {
        this.handlers[eventType] = [];
    }
    this.handlers[eventType].push(handler);
    return this;

}

PubSub.emit = function(eventType, ...args) {
    for (let i = 0; i < this.handlers[eventType].length; i++) {
        this.handlers[eventType][i].apply(this, args);
    }
    return this;
}

export { PubSub }
