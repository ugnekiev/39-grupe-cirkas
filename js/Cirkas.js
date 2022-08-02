class Cirkas {
    constructor(name) {
        this.name = name;
    }

    intro() {
        return `Sveiki atvyke i "${this.name}" cirka!`
    }

    tvarkarastis() {
       return `"${this.name}" cirko tvarkarastis:
Siuo metu pasirodymu nera suplanuota.`
    }

    naujasPasirodymas(y, m, d) {
        const months = ["Sausio", "Vasario", "Kovo", "Balandzio", "Geguzes", "Birzelio", "Liepos", "Rugpjucio", "Rugsejo", "Spalio", "Lapkricio", "Gruodzio"];
        return `Naujas pasirodymas ${y} ${months [m-1]} ${d} dieną!`
    }

 }

export { Cirkas }