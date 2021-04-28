class Api {
    constructor () {
        this.birthdays = JSON.parse(localStorage.birthdays) || []
    }

    sync () {
        localStorage.birthdays = JSON.stringify(this.birthdays)
    }

    addEvent (event) {
        this.birthdays.push(event)
        this.sync()
    }

    get allEvents () {
        return this.birthdays
    }

    get monthEvents (month) {
        console.log('month', month)
        return this.birthdays
    }
}

export default new Api()
