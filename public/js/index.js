class Lieux  {
    constructor (nom, personnes) {
        this.nom = nom
        this.personnes = personnes
    }

}

let molengeek = new Lieux (Molengeek, [])
let snack = new Lieux (snack, [])
let maison = new Lieux (maison, [])

class Personnes extends Bus {
    constructor (nom, prénom, argent) {
        this.nom = nom
        this.prénom = prénom
        this.argent = argent
    }

}

let amine = new Personnes ('reyes', 'sebastian', 10) 

class Bus {
    constructor (personnes, caisse)
}
