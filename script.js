class Coach {
    constructor(name, position, rating) {
        this.name = name;
        this.position = position;
        this.rating = rating;
    }

    displayInfo() {
        console.log(`Coach:${this.name}, Speciallization:${this.position}, Rating:${this.rating}`)
    }
}

const coach1 = new Coach('Anna Lukievich', 'Fitness', '4.2')
const coach2 = new Coach('Pawel Lagoda', 'Boks', '4.9')

coach1.displayInfo()
coach2.displayInfo()