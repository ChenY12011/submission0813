
function contactMe(){
    window.open('contactme.html')
}

function resume(){
    window.open('resume.html')
}

window.onload = function () {

    const form = document.querySelector("form");
    form.onsubmit = validate;
};

function selChange() {
    const sels = document.getElementsByName('sel')
    for(let i=0;i<sels.length;i++) {
        if(sels[i].checked ){
            const hiring = document.getElementById('hiringDiv')
            if(sels[i].value === 'Hiring'){
                hiring.style.display = ''
            }else{
                hiring.style.display = 'none'
            }
        }
    }
}

function validate() {
    const postalCode = document.getElementById("postalCode")
    const postalCodeMessage = document.getElementById("postalCodeMessage");
    postalCodeMessage.innerText = "";
    const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (postalCodeRegex.test(postalCode.value) == false) {
        postalCodeMessage.innerText = "must be a valid Canadian Postal Code, with or without a space";
        postalCode.focus();
        return false;
    }
    return true;
}
