//Alert function

const setAlert = (msg, type = 'danger') => {
 return `<p class="alert alert-${type} d-flex justify-content-between">${msg} <button data-bs-dismiss="alert" class= "btn-close"></button></p>`;
}


/**
 * Check value is number or not
 */
    const numberCheck = (num) => {
    let Pattern = /^[0-9]{1}$/;
    return Pattern.test(num);
}

/**
 * Check value is email or not
 */
    const emailCheck = (email) => {
        let Pattern = /^[a-z0-9_\.]{1,}@[a-z0-9]{2,}\.[a-z]{2,5}$/;
        return Pattern.test(email);
    }

/**
 * Check value is cellnumber or not
 */
    const cellnumberCheck = (cell) => {
        let Pattern = /^(01 | 8801 | \+8801)[0-9]{9}$/;
        return Pattern.test(cell);
    }