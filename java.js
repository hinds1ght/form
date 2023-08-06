const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const form = document.querySelector("#form");



form.addEventListener('submit', (e) => {
    if (password.value === cpassword.value){
    } 
    else {
        alert ('password did not match')
    e.preventDefault();
    }
})

