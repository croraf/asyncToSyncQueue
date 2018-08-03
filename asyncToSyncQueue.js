
const queue = [];

const processQueue = async () => {

    console.log('Processing queue, element:', queue[0]);
    
    try {
        const result = await queue[0]();
        console.log('Async function finished with result:', result);
    } catch (error) {
        console.log('Promise error:', error);
    }
    
    queue.shift();
    
    if (queue.length > 0) {processQueue();}
};

const putOnAsyncToSyncQueue = (asyncJobCreator) => {

    queue.push(asyncJobCreator);

    if (queue.length === 1) {
        console.log('New job put on empty queue.');
        processQueue();
    }
};

module.exports = putOnAsyncToSyncQueue;
