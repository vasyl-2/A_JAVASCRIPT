export const tasks = [];

export function startQueue() {
    setInterval(() => {
        const nextTask = tasks.shift();
        nextTask && nextTask();
    });
}

