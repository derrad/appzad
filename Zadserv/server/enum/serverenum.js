// module.exports.StepenSS = Object.freeze({
//     Nekvalifikovan:   Symbol("Nekvalifikovan"),
//     Polukvalifikovan:  Symbol("Polukvalifikovan"),
//     Kvalifikovan: Symbol("Kvalifikovan"),
//     Srednja_Strucna_Sprema: Symbol("Srednja Strucna Sprema"),
//     VKV: Symbol("VKV"),
//     Visa_skola: Symbol("Visa skola"),
//     Fakultet: Symbol("Fakultet"),
//     Magistar: Symbol("Magistar"),
//     Doktor_Nauka: Symbol("Doktor Nauka")

// });

// const Strucna = new Set();
// Strucna.add("Nekvalifikovan");
// Strucna.add("Polukvalifikovan");
// Strucna.add("Kvalifikovan");
// Strucna.add("Srednja Strucna Sprema");
// Strucna.add("VKV");
// Strucna.add("Visa skola");
// Strucna.add("Fakultet");
// Strucna.add("Magistar");
// Strucna.add("Doktor Nauka");

module.exports.StepenSS =[
    'Nekvalifikovan', 
    'Polukvalifikovan', 
    'Kvalifikovan',
    'Srednja Strucna Sprema',
    'VKV',
    'Visa skola',
    'Fakultet',
    'Magistar',
    'Doktor Nauka'];



module.exports.Activities =[
    'Start',
    'Changes',
    'Status',
    'Create/Add new',
    'Void',
    'Delete'
];

module.exports.TipIsplate =[
    'Gotovina',
    'Tekuci',
    'Stedna'
];

module.exports.TipZadrugar =[
    'Ucenik',
    'Osiguranik'
];

module.exports.PolZadruga =[
    'Musko',
    'Zensko',
    'Neodredjen'
];

module.exports.IdentZadrugara =[
    'JMBG_EBS',
    'Izbeglicka_Legitimacija',
    'Pasos',
    'Eksterni_Identifikator',
    'Ostalo'
];

