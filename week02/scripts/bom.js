
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');




button.addEventListener('click', function () {
    if (input.value.trim() !== '') {

        const li = document.createElement('li');
        li.textContent = input.value;
        const deleteButon = document.createElement('button');
        deleteButon.textContent = '❌';
        li.append(deleteButon);
        list.append(li);
        input.value = '';
        input.focus();

        deleteButon.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

    }


    else {
        alert('Please write a scripture');

    }
});


input.focus();
