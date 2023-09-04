/* 1) Создать кнопку получить данные, по клику на нее вызвать GET запрос
   на адрес https://jsonplaceholder.typicode.com/users
   Сделать все это с помощью async await.*/
//============================================================================
// const btn = document.getElementById('btn')
// const URL = 'https://jsonplaceholder.typicode.com/users'

// btn.addEventListener('click', 
//    async function getUsers () {
//         const response = await fetch(URL)
//         const users = await response.json()
//         console.log(users);
//    }
// )
//=============================================================================


/* 2) Создать кнопку получить данные, по клику на нее вызвать GET запрос
   на адрес https://jsonplaceholder.typicode.com/users
   Сделать все это с помощью async await, с помощтю InnerHTML отобразить данные
   На странице.*/
//=============================================================================
const btn = document.getElementById('btn')
const URL = 'https://jsonplaceholder.typicode.com/users'
const usersList = document.getElementById('usersList')

btn.addEventListener('click', 
   async function getUsers () {
      const response = await fetch(URL)
      const users = await response.json()
      users.forEach(user => {
         usersList.innerHTML += `<li>${user.name}</li>`
      });
   }
)
//=============================================================================


/* 3) Создать input type=“number”, получить с него value которое будет сравниваться
      с вашим возрастом, в async function вернуть либо Promise.resolve(“Успех”),
      либо Promise.reject(“Ошибка”)
      Отобразить в консоли результат использовать then и catch*/
//=============================================================================
const input = document.getElementById('inputNum')
const btnNum = document.getElementById('btnNum')

btnNum.addEventListener('click', function() {
   const inputValue = parseInt(input.value)
   const myAge = 18
   async function compareAge() {
         if (inputValue === myAge) {
            return Promise.resolve("Успех")
         } else {
            return Promise.reject("Ошибка")
         }
   }
   compareAge()
      .then((result) => {
         console.log(result);
      })
      .catch((error) => {
         console.log(error);
      })
})
//=============================================================================