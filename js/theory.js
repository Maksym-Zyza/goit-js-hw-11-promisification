const promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;

    setTimeout(() => {
        if (success) {
            resolve('Решено')
        }
        
        reject('Отклонено')
    }, 1000);
});

promise.then(result => {
    console.log(`%c${result}`, 'color:green; font-size: 20px');
}).catch(error => {
    console.log(`%c${error}`, 'color:red; font-size: 20px');
 })