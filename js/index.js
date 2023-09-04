/* 1) Создать кнопку получить данные, по клику на нее вызвать GET запрос
   на адрес https://jsonplaceholder.typicode.com/users
   Сделать все это с помощью async await.*/
//============================================================================
const btn = document.getElementById('btn')
const URL = 'https://jsonplaceholder.typicode.com/users'

btn.addEventListener('click', 
    async function getUsers () {
        const response = await fetch(URL)
        const users = await response.json()
        console.log(users);
})
//=============================================================================

/* Создать кнопку получить данные, по клику на нее вызвать GET запрос
   на адрес https://jsonplaceholder.typicode.com/users
   Сделать все это с помощью async await, с помощтю InnerHTML отобразить данные
   На странице.*/
//=============================================================================
function showUsersList() {
    
}
//=============================================================================