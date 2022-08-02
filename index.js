import { Cirkas } from "./js/Cirkas.js";
console.clear();


const besieliuCirkas = new Cirkas ('Besieliai');

besieliuCirkas.intro();
console.log(besieliuCirkas.intro());
//Sveiki atvyke i 'Besieliai' cirka!

console.log(besieliuCirkas.tvarkarastis());
// "Besieliai" cirko tvarkarastis:
// Siuo metu pasirodymu nera suplanuota.

console.log(besieliuCirkas.naujasPasirodymas(2022, 9, 1));
// Naujas pasirodymas 2022 Rugsėjo 1 dieną!

console.log(besieliuCirkas.naujasPasirodymas(2022, 8, 25));
// Naujas pasirodymas 2022 Rugpjucio 25 dieną!

console.log(besieliuCirkas.naujasPasirodymas(2022, 3, 17));
// Naujas pasirodymas 2022 Kovo 17 dieną!

//console.log(besieliuCirkas.tvarkarastis());
// "Besieliai" cirko tvarkarastis:
// 1) 2022 Kovo 17d (jau ivykes);
// 2) 2022 Rugpjucio 25d;
// 3) 2022 Rugsėjo 1d.

//console.log(besieliuCirkas.pakeistiData(3, 2022, 9, 2));
// Pasirodymo data pakeista į 2022 Rugsėjo 2 dieną!

//console.log(besieliuCirkas.tvarkarastis());
// "Besieliai" cirko tvarkarastis:
// 1) 2022 Kovo 17d (jau ivykes);
// 2) 2022 Rugpjucio 25d.
// 3) 2022 Rugsėjo 2d.

//console.log(besieliuCirkas.atsauktiPasirodyma(1));
// Atsaukti jau praejusio pasirodymo negalima!

//console.log(besieliuCirkas.atsauktiPasirodyma(2));
// Pasirodymas atsauktas (2022 Rugpjūčio 25d)!

//console.log(besieliuCirkas.tvarkarastis());
// "Besieliai" cirko tvarkarastis:
// 1) 2022 Kovo 17d (jau ivykes);
// 2) 2022 Rugsėjo 2d.





