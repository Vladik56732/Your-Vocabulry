const base = localStorage.getItem('base')
    ? JSON.parse(localStorage.getItem('base'))
    : []

const create = document.querySelector('.create')

const word = document.querySelector('.word')

const translate = document.querySelector('.translate')

const cards = document.querySelector('.cards')

for (let i = 0; base.length > i; i++) {
    cards.innerHTML += `<div class="card"><p>${base[i].word}</p></div>`
}
create.addEventListener('click', () => {
    if (word.value != '' && translate.value != '') {
        base.push({
            word: word.value,
            translation: translate.value,
        })
        console.log(base)
        cards.innerHTML += `<div class="card"><p>${word.value}</p></div>`
        localStorage.setItem('base', JSON.stringify(base))
    }
})
