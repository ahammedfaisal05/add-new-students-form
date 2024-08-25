
//get elements
const student_form = document.getElementById('student_form');
const email_validation = document.getElementById('email_validation');
const msg = document.querySelector('.msg');
const goranti = document.querySelector('.goranti');
const emailField = document.querySelector('input[name="email"]');

// student form submit
student_form.onsubmit = (e) => {
    e.preventDefault();

    // loading show
    goranti.style.display = 'block';

    // timeout start
    let timeout = setTimeout(()=>{
        goranti.style.display = 'none';

    //formdata object
    const form_data = new FormData(e.target);
    const {name, email, cell, uname, gender, course} = Object.fromEntries(form_data.entries());
    
    // form validation
    if( !name || !email  || !cell  || !uname ){
        msg.innerHTML = setAlert('All feilds are required');
    }else{
        msg.innerHTML = setAlert('Data stable', 'success');
        e.target.reset();
    }
        clearTimeout(timeout);  
    },2000);
     
}

// validation email field
emailField.onkeyup = (e) =>{
    let email = e.target.value;
    if(emailCheck(email)){
        email_validation.textContent = 'Email is okey now'; 
        email_validation.className = 'text-success'; 
    }else{
        email_validation.textContent = 'Invalid email'; 
        email_validation.className = 'text-danger'; 
    }
    
}