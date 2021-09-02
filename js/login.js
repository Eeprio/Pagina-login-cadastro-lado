const init = () => {
 const inputEmail = document.querySelector('input[type="email"]');
 const inputPassword = document.querySelector('input[type="password"]');
 const submitButton = document.querySelector('.btn-login');

 if (submitButton){
     submitButton.addEventListener('click', (event) => {
         event.preventDefault();

         fetch('https://reqres.in/api/login', {
             method: 'POST',
             header: {
                 'contentType': 'aplication/json'
             },
             body: JSON.stringify({
                email: inputEmail.value,
                password: inputPassword.value,
             })
         }).then((response) => {
             return response.json();
         }).then((data) =>{
             console.log(data)
         })
     })
 }
}

window.onload = init;