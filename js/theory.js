/* ====== 1. Создание промиса
 *  - Класс Promise
 *  - resolve, reject
 *  - Promise.prototype.then(onResolve, onReject)
 *  - then, catch
 */

// const promise = new Promise((resolve, reject) => {
//     const success = Math.random() > 0.5;

//     setTimeout(() => {
//         if (success) {
//             resolve('Решено')
//         }
        
//         reject('Отклонено')
//     }, 1000);
// });

// promise.then(result => {
//     console.log(`%c${result}`, 'color:green; font-size: 20px');
// }).catch(error => {
//     console.log(`%c${error}`, 'color:red; font-size: 20px');
// })
 
 
/* ===== 2. Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

// const promise = new Promise(resolve => {
//     resolve(5);
//  })

// promise
//   .then(x => {
//     console.log(x);

//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('Я буду выполнен в любом случае'));

// // ===== 3. Промисификация
// //  - ф-я возвращает промис и к нeму чейница then, catch 
// // -  получаем доступ к результату промиса своего колбека

// const fetchUser = userName => {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = Math.random() > 0.3;

//         if (success) {
//             const user = { name: userName, age: 26, posts: 74 };
//             resolve(user);
//         }
        
//         const error = 'Произошла ошибка!';
//         reject(error);  
//      }, 1000)
//      });
// };
 
// fetchUser('Mango').then(onFetchUserSuccess).catch(onFetchUserError)

// function onFetchUserSuccess(user) {
//     console.log(user);
// }
 
// function onFetchUserError(user) {
//     console.log('ERROR!');
//  }


// ===== 3. Иподром
// const horses = [
//   'Secretariat',
//   'Eclipse',
//   'West Australian',
//   'Flying Fox',
//   'Seabiscuit',
// ];

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const run = horse => {
//     return new Promise(resolve => { 
//         const time = getRandomTime(2000, 3500);

//         setTimeout(() => {
//             resolve({horse, time})
//          }, time)
//     })
//  }

// //  Для одной лошади
// run(horses[0]).then(result => {
//     console.log(result);
//  })

// // Для самой бистрой лошади
// const promises = horses.map(run)

// Promise.race(promises).then(winner => {console.log(winner)})

// //  Для всех лошадей - Promise.all() (ждет виполнения последнего)
// console.log('Заезд начался, ставки не принимаются');

// Promise.all(promises).then(results => {
//     console.log('Заезд оконч, ставки принимаются');
//     console.table(results);
//  }).catch(console.log)

// ===== 4. Получение данних с сервера
// const fetchTodo = id => {
//     return fetch(`http://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
//     res.json(),
//     )
// }
 
// fetchTodo(5).then(todo => {
//     console.log(todo);
//  }).catch(console.log)