const putOnAsyncToSyncQueue = require('./asyncToSyncQueue');

const jobs = [
    async (timer) =>  {

        console.log('job1 async started');
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('job1 ended');
                resolve('job1');
            }, timer);
        })
        console.log('job1 async ended');
        return result;
    },
    async (timer) =>  {

        console.log('job2 async started');
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {+
                console.log('job2 ended');
                resolve('job2');
            }, timer);
        })
        console.log('job2 async ended');
        return result;
    },
    async (timer) =>  {

        console.log('job3 async started');
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('job3 ended');
                resolve('job3');
            }, timer);
        })
        console.log('job3 async ended');
        return result;
    }
];

/* jobs.forEach((job, index) => {

    console.log('starting job:', index);
    job((index+1)*2000);
}); */

jobs.forEach((job, index) => {

    console.log('Putting on asyncToSyncQueue job:', index);
    putOnAsyncToSyncQueue( () => job((index+1)*2000) );
});