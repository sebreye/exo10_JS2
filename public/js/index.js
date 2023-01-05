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
    seDeplacer(lieu) {
        Bus.embarquer(this,lieu)
    }
}

let amine = new Personnes ('reyes', 'sebastian', 10) 

class Bus {
    constructor (personnes, caisse) {
        this.personnes = personnes
        this.caisse = caisse
    }
    
    embarquer(personne, lieu){
        if (personne.argent >= 2.8) {
            personne.argent -= 2.8
            this.caisse += 2.8
            this.personnes.push(personne)
            lieu.personnes.push(personne)
        }
    }
}
