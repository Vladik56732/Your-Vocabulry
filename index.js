const base = localStorage.getItem('base')
    ? JSON.parse(localStorage.getItem('base'))
    : []

const create = document.querySelector('.create')

const word = document.querySelector('.word')

const translate = document.querySelector('.translate')

const cards = document.querySelector('.cards')

const button = document.querySelector('.delete')

button.addEventListener('click', () => {
    localStorage.clear()
    cards.innerHTML = ''
    base = []
})

for (let i = 0; i < base.length; i++) {
    cards.innerHTML += ` <div class="card">
<div class="front">${base[i].word}</div>
<div class="back">${base[i].translate}</div>
</div>`
}
create.addEventListener('click', () => {
    if (word.value != '' && translate.value != '') {
        base.push({
            word: word.value,
            translation: translate.value,
        })
        console.log(base)
        cards.innerHTML += ` <div class="card">
        <div class="front">${word.value}</div>
        <div class="back">${translate.value}</div>
        </div>`
        localStorage.setItem('base', JSON.stringify(base))
    }
})
