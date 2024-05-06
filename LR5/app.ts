// 2.	Создать промис myPromise, который через 3 секунды генерирует случайное число. Результат выполнения промиса (сгенерированное число) вывести в консоль.
let myPromise = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(Math.random() * 100)
  }, 3000);
})

myPromise.then((result) => {
  console.log(result);
})
// 3.	Создать функцию, которая принимает параметр delay и возвращает промис myPromise (промис из предыдущей задачи). Сгенерируйте 3 числа
// (т.е. необходимо вызвать функцию 3 раза) и только после того, как все промисы выполняться успешно, вывести числа в консоль. Использовать Promise.all.

function foo(delay: number): Promise<number> {
  return myPromise;
}

Promise.all([foo(2), foo(4), foo(5)]).then((results) => {
  console.log(results);
})

// // 4.	Что будет выведено в консоль и почему? Что возвращают методы then и catch?

let pr = new Promise((res, rej) => {
  rej('ku')
})

pr
  .then(() => console.log(1))
  .catch((val) => console.log(2))
  .catch((val) => console.log(3))
  .then(() => console.log(4))
  .then(() => console.log(5))


// 5. Создайте промис, который выполнился успешно, результат выполнения промиса число 21. Вызовите цепочку методов then.
// Первый вызов метода then выводит в консоль результат выполнения предыдущего промиса.
// Второй вызов метода then выводит в консоль результат выполнения предыдущего промиса умноженного на 2. В результате в консоль последовательно должны выводиться числа 21 и 42.

new Promise<number>((resolve) => {
  resolve(21);
}).then((res : number) : number => {
  console.log(res);
  return res;
}).then((res : number) => {
  console.log(res * 2);
});

// 6.

async function func() : Promise<number> {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return 21;
}

func().then((res : number) =>{
  console.log(res);
  return res;
}).then((res : number) => {
  console.log(res*2);
})

