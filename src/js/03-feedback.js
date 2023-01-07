const emailInput = document.querySelector('[name="email"]');
const msgInput = document.querySelector('[name="message"]');

function update(){
    if(localStorage.getItem("feedback-form-state")==undefined){return 0;}
    const both = localStorage.getItem("feedback-form-state");
    const values = both.split(',');
    emailInput.value = values.splice(0, 1);
    msgInput.value = values;
}
update();

emailInput.addEventListener("input", e => {
    localStorage.setItem(
        "feedback-form-state",
        `${emailInput.value},${msgInput.value}`
        )
});

msgInput.addEventListener("input", e => {
    localStorage.setItem(
        "feedback-form-state",
        `${emailInput.value},${msgInput.value}`
        )
});

