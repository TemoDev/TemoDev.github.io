var btn = document.querySelector('.submit');
var textVal = document.querySelector('.textVal');
var todoCon = document.querySelector('.todos');
var searchBar = document.querySelector('.searchFilter');

function mainAction() {
    if (textVal.value === "") {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
        })
        alert('Please enter book name');
    } else {
        // create elemtns
        const todo = document.createElement('div');
        const name = document.createElement('div');
        const delBtn = document.createElement('div');
        const check = document.createElement('input');
        const todoContent = document.createElement('div');
        check.setAttribute('type', 'checkbox');

        // text content
        delBtn.textContent = 'Delete';
        name.textContent = textVal.value;

        // add css classes
        todo.classList.add('todo');
        delBtn.classList.add('todo__delete');
        name.classList.add('todo__name');
        todoContent.classList.add('todo__content');
        check.classList.add('checkbox');

        // append
        todoContent.appendChild(check);
        todoContent.appendChild(name);
        todo.appendChild(todoContent);
        todo.appendChild(delBtn);
        todoCon.appendChild(todo);

        delBtn.addEventListener('click', function () {
            todo.parentNode.removeChild(todo);
        })

        check.addEventListener('change', function () {
            name.classList.toggle('checkbox-checked');
        })

        if (todoCon.clientHeight > 460) {
            todoCon.style.height = "460px";
            todoCon.style.overflow = "scroll";
            todoCon.style.overflowX = "hidden";
        } else if (todoCon.clientHeight < 460) {
            todoCon.style.maxHeight = '460px';
            todoCon.style.overflowY = "auto";
            todoCon.style.overflowX = "hidden";
        }

        if (window.innerHeight < 700) {
            if (todoCon.clientHeight > 260) {
                todoCon.style.height = "260px";
                todoCon.style.overflow = "scroll";
                todoCon.style.overflowX = "hidden";
            } else if (todoCon.clientHeight < 260) {
                todoCon.style.maxHeight = '260px';
                todoCon.style.overflowY = "auto";
                todoCon.style.overflowX = "hidden";
            }
        }
        console.log(window.innerHeight);

        // search filter
        searchBar.addEventListener('keyup', function (e) {
            const term = e.target.value.toLowerCase();
            const title = name.textContent;
            if (title.toLocaleLowerCase().indexOf(term) != -1) {
                todo.style.display = "flex";
            } else {
                todo.style.display = "none";
            }
        })
    }
    textVal.value = "";
}

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        mainAction();
    }
});

btn.addEventListener('click', () => {
    mainAction();
});