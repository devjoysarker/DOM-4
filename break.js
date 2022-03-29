
// const input = document.querySelector('.box input');
// const output = document.querySelector('#output');


// input.addEventListener('change', () => {

//     alert();

// })




const signUp = document.querySelector('#signup_form');
const name   = document.querySelector('#name');
const email  = document.querySelector('#email');
const uname  = document.querySelector('#uname');
const msg    = document.querySelector('.msg');

// signUp.addEventListener('submit',(e) => {
    
//     e.preventDefault();

//     if (name.value == '' || email.value == '' || uname.value == '') {
    
//         alert('All fields are required');
        
//     } else {
        
//         alert('done');
//     }
    
// });

  signUp.onsubmit = (e) => {

    e.preventDefault();

    name.style.border = (name.value == '') ? '1px solid red' : '1px solid black';

    email.style.border = (email.value == '') ? '1px solid red' : '1px solid black';

    uname.style.border =(uname.value == '') ? '1px solid red' : '1px solid black';
    //     name.style.border = '1px solid red';
    // } else {
    //     name.style.border = '1px solid black';
    // }
    // if (email.value == '') {
    //     email.style.border = '1px solid red';
    // } else {
    //     email.style.border = '1px solid black';
    // }
    // if (uname.value == '') {
    //     uname.style.border = '1px solid red';
    // } else {
    //     uname.style.border = '1px solid black';
    // }



    if (name.value == '' || email.value == '' || uname.value == '') {
        msg.innerHTML = `<p class ="alert alert-danger">All fields are required</p>`
    } else {
        msg.innerHTML =`<p class ="alert alert-success">Data Stable</p>`;
    }

  };



