class Lieux  {
    constructor (nom, personnes) {
        this.nom = nom
        this.personnes = personnes
    }

}

let molengeek = new Lieux ('Molengeek', [])
let snack = new Lieux ('snack', [])
let maison = new Lieux ('maison', [])

class Personnes {
    constructor (nom, prénom, argent) {
        this.nom = nom
        this.prénom = prénom
        this.argent = argent
    }
    seDeplacer(lieu) {
        bus.embarquer(this,lieu)
    }
}

let perso = new Personnes ('reyes', 'sebastian', 10) 

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

let bus = new Bus ([], 0)

perso.seDeplacer(molengeek)
console.log(`${perso.prénom} est a MolenGeek`);
perso.seDeplacer(snack)
console.log(`${perso.prénom} est au snack`);
perso.seDeplacer(maison)
console.log(`${perso.prénom} est à la maison`);

console.log(`${perso.prénom} à ${perso.argent.toFixed(2)}`);
console.log(`le bus à ${bus.caisse.toFixed(2)}`);