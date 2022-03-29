/**
 * 
 * befor break time
 * 
 * 
 * 
  const input = document.querySelector('.box input');
const output = document.querySelector('#output');

input.addEventListener('keyup', () => {

//  output.innerHTML = input.value;

let username = input.value;

let pattern  =/^[a-z]{5,12}$/;

if (username == '') {
    output.innerHTML = `<span style = "color:warning;">Plz set a user-name</span>`;   
}else if(pattern.test(username) == false){
    output.innerHTML=`<span style="color:orange;">Username length should be more than 5 and less then 12 && only lowercase latter allow.</span>`;
}else{
 output.innerHTML =` `;
}
 
});
 */



// username.length < 5  || username.length > 12



