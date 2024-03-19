class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    escrever() {
        let attack = "";

        if (this.type === "wizard") {
            attack = "magic.";
        } else if (this.type === "warrior") {
            attack = "sword.";
        } else if (this.type === "monk") {
            attack = "martial arts.";
        } else {
            attack = "shuriken.";
        }

        console.log(`The ${this.type} attacked using ${attack}`);
    }
}

let statusHero = new Hero("Skyler", "25", "monk");
let statusHero2 = new Hero("Gwen", "19", "wizard");

statusHero.escrever();
statusHero2.escrever();