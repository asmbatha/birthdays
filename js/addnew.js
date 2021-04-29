import { birthdays, addNew } from './api.js'
import { stringToHTML } from './helpers.js'

window.onload = init

function init () {
    
    const form = document.querySelector('form')

    form.onsubmit = function (e) {
        e.preventDefault()

        var title = document.querySelector('.title')
        var date = document.querySelector('.date')

        if (title.value && date.value) {
            addNew({
                title: title.value,
                date: date.value
            })

            form.reset()

            render()
        }
    }

    render()
}


function render () {
    const birthdaysContainer = document.querySelector('.birthdays')

    birthdaysContainer.innerHTML = ''

    birthdays.forEach(birthday => {
        birthdaysContainer.appendChild(stringToHTML(`
            <div class="birthday-item">
                <div class="birthday-title">
                    ${ birthday.title }
                </div>
                <div class="birthday-date">
                    ${ birthday.date }
                </div>
            </div>
        `))
    })
    
}

