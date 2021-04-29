import { birthdays } from './api.js'
import { stringToHTML } from './helpers.js'

window.onload = render

function render () {
    const birthdaysContainer = document.querySelector('.birthdays')

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


