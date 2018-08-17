const logger = require('./logger');

const putOnAsyncToSyncQueue = require('./asyncToSyncQueue');

const jobs = [
    async (timer) =>  {

        logger.info('job1 async started');
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                logger.info('job1 ended');
                resolve('job1');
            }, timer);
        })
        logger.info('job1 async ended');
        return result;
    },
    async (timer) =>  {

        logger.info('job2 async started');
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {+
                logger.info('job2 ended');
                resolve('job2');
            }, timer);
        })
        logger.info('job2 async ended');
        return result;
    },
    async (timer) =>  {

        logger.info('job3 async started');
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                logger.info('job3 ended');
                resolve('job3');
            }, timer);
        })
        logger.info('job3 async ended');
        return result;
    }
];

/* jobs.forEach((job, index) => {

    logger.info('starting job:', index);
    job((index+1)*2000);
}); */

/* jobs.forEach((job, index) => {

    logger.info('Putting on asyncToSyncQueue job: %d', index);
    putOnAsyncToSyncQueue( () => job((index+1)*2000) );
}); */




const object = {
    razina11: {razina21: {razina3: 'abc'}, razina22: {razina3: ['1']}},
    razina12: {razina22: {razina3: ['cde', 'xyz']}} 
};

const object2 = ['abc', 'def', {a: '123'}];

logger.error(object);

console.log('abc');
