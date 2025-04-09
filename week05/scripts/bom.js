
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getCaptherList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});




button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    li.textContent = item;
    let deleteButon = document.createElement('button');
    deleteButon.textContent = '❌';
    li.append(deleteButon);
    list.append(li);
    deleteButon.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })

}

function setChapterList() {
    localStorage.setItem('BOMlist', JSON.stringify(chaptersArray));
}


function getCaptherList() {
    return JSON.parse(localStorage.getItem('BOMlist'));

}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}


/*   else {
       alert('Please write a scripture');

   }
});


input.focus();*/
