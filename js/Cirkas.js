class Cirkas {
    constructor(name) {
        this.name = name;
        this.list = [];

        this.months = ["Sausio", "Vasario", "Kovo", "Balandzio", "Geguzes", "Birzelio", "Liepos", "Rugpjucio", "Rugsejo", "Spalio", "Lapkricio", "Gruodzio"];
    }

    intro() {
        return `Sveiki atvyke i "${this.name}" cirka!`
    }

    tvarkarastis() {
        let res = `"Besieliai" cirko tvarkarastis:`;

        if (this.list.lenght === 0) {
            res += `\nSiuo metu pasirodymu nera suplanuota.`;
        }   else {
                let index = 0;
                for (const item of this.list) {
                    res += `\n${++index}) ${item.y} ${this.months[item.m-1]} ${item.d}d`;
                    if (item.mili < Date.now()) {
                        res += ` (jau ivykes)`;
                    }
                    res += index < this.list.length ? ';' : '.';
                }
                
            }
            
       return res
    }

    naujasPasirodymas(y, m, d) {
        this.list.push({y, m, d, mili: new Date(y, m - 1, d).getTime()});
        this.list.sort((a, b) => a.mili - b.mili);
        return `Naujas pasirodymas ${y} ${this.months [m-1]} ${d} dieną!`
    }

    pakeistiData(nr, y, m, d) {
        this.list [nr - 1] = {y, m, d, mili: new Date(y, m - 1, d).getTime()}
        this.list.sort((a, b) => a.mili - b.mili);
        return `Pasirodymo data pakeista į ${y} ${this.months[m-1]} ${d} dieną!`
    }

    atsauktiPasirodyma(nr) {
        if (this.list[nr - 1].mili < Date.now()) {
            return `Atsaukti jau praejusio pasirodymo negalima!`

        } else {
            const item = this.list[nr - 1];
            this.list.slice(nr - 1, 1);
            return `Pasirodymas atsauktas (${item.y} ${this.months[item.m - 1]} ${item.d}d)!`

        }
        
    }

 }

export { Cirkas }