const form = document.getElementById('form')
const Nutzername = document.getElementById('Nutzername')
const Email = document.getElementById('Email')
const Passwort = document.getElementById('Passwort')
const Passwort2= document.getElementById('Passwort2')

// Show input error message
function showError(input, message) {
const formControl = input.parentElement;
formControl.className = 'form-control error';
const small = formControl.querySelector('small');
small.innerText = message;
}

// Show success outline
function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
   };

   // Check email
   function isValidEmail(email){
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

   }




// Event listeners
form.addEventListener('submit', function(e){
e.preventDefault();

if(Nutzername.value ===''){
    showError(Nutzername, 'Nutzername ist verlangt')
}else{
    showSuccess(Nutzername);
}
if (Email.value === ''){
    showError(Email, 'Email ist falsch')
} else if (!isValidEmail(Email.value)) {
    showError(Email, 'Email ist falsch')
}
{
    showSuccess(Email);
}
if(Passwort.value ===''){
    showError(Passwort, 'Passwort ist falsch')
}else{
    showSuccess(Passwort);
}
if(Passwort2.value ===''){
    showError(Passwort2, 'Passwort ist falsch')
}else{
    showSuccess(Passwort2);
}
});

