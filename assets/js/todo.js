let contactForm = document.querySelector('.form-group');
let lists = document.querySelector('.lists');
let resetButton = document.querySelector('.reset');

let todoİtems = [];

if(typeof localStorage.todoİtems !== 'undefined') {
    todoİtems = JSON.parse(localStorage.todoİtems);
    renderSubmitForm();
}

function handleSubmitForm(e) {
    e.preventDefault();

    let formdata = new FormData(contactForm);
    let formobj = Object.fromEntries(formdata);
    todoİtems.push(formobj);

    contactForm.reset();
    renderSubmitForm();
    save();
}

contactForm.addEventListener('submit', handleSubmitForm);

function save() {
    localStorage.todoİtems =JSON.stringify(todoİtems);
}

function renderSubmitForm() { 
    lists.innerHTML = ''
    for(let i = 0; i < todoİtems.length; i++) {
        lists.innerHTML += `<li>${todoİtems[i].todo}</li>`
    }
}

function reset() {
    localStorage.clear();

    todoİtems = [];
    renderSubmitForm();
}

resetButton.addEventListener('click',reset);