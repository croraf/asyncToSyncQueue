const logger = require('./logger');

const queue = [];

const processQueue = async () => {

    logger.info('Processing queue, element:', queue[0]);
    
    try {
        const result = await queue[0]();
        logger.info('Async function finished with result: %s', result);
    } catch (error) {
        logger.info('Promise error: %s', error);
    }
    
    queue.shift();
    
    if (queue.length > 0) {processQueue();}
};

const putOnAsyncToSyncQueue = (asyncJobCreator) => {

    queue.push(asyncJobCreator);

    if (queue.length === 1) {
        logger.info('New job put on empty queue.');
        processQueue();
    }
};

module.exports = putOnAsyncToSyncQueue;
