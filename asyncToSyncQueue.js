
const queue = [];

const processQueue = () => {

    console.log('Processing queue, element:', queue[0]);
    
    queue[0]().then(
        (value) => {
            console.log('promise finished with value:', value);
            queue.shift();
            if (queue.length > 0) {processQueue();}
        },
        (reason) => {
            console.log('promise failed with reason:', reason);
            queue.shift();
            if (queue.length > 0) {processQueue();}
        }
    );
};

const putOnAsyncToSyncQueue = (asyncJobCreator) => {

    queue.push(asyncJobCreator);

    if (queue.length === 1) {
        console.log('New job put on empty queue.');
        processQueue();
    }
};

module.exports = putOnAsyncToSyncQueue;
