//Levesek lista----------------------
levesGomb.addEventListener("click", levesKiiratas);
document.querySelector("#leves").innerHTML = leves.etelFajta + ":";
let levesLista = "";
for (let i = 0; i < leves.etelLista.length; i++) {
    levesLista += "<li>" + leves.etelLista[i] + "</li>";
}
document.querySelector("#levesLista").innerHTML = levesLista;

function levesKiiratas() {
    let allapot = document.querySelector("#leves").style.display;
    if (allapot != "block") {
        document.querySelector("#leves").style.display = "block";
        document.querySelector("#levesLista").style.display = "block";
    } else {
        document.querySelector("#leves").style.display = "none";
        document.querySelector("#levesLista").style.display = "none";
    }
}

//Főzelékek lista----------------------
fozelekGomb.addEventListener("click", fozelekKiiratas);
document.querySelector("#fozelek").innerHTML = fozelek.etelFajta + ":";
let fozelekLista = "";
for (let i = 0; i < fozelek.etelLista.length; i++) {
    fozelekLista += "<li>" + fozelek.etelLista[i] + "</li>";
}
document.querySelector("#fozelekLista").innerHTML = fozelekLista;

function fozelekKiiratas() {
    let allapot = document.querySelector("#fozelek").style.display;
    if (allapot != "block") {
        document.querySelector("#fozelek").style.display = "block";
        document.querySelector("#fozelekLista").style.display = "block";
    } else {
        document.querySelector("#fozelek").style.display = "none";
        document.querySelector("#fozelekLista").style.display = "none";
    }
}

// Tészták lista----------------------
tesztaGomb.addEventListener("click", tesztaKiiratas);
document.querySelector("#teszta").innerHTML = teszta.etelFajta + ":";
let tesztaLista = "";
for (let i = 0; i < teszta.etelLista.length; i++) {
    tesztaLista += "<li>" + teszta.etelLista[i] + "</li>";
}
document.querySelector("#tesztaLista").innerHTML = tesztaLista;

function tesztaKiiratas() {
    let allapot = document.querySelector("#teszta").style.display;
    if (allapot != "block") {
        document.querySelector("#teszta").style.display = "block";
        document.querySelector("#tesztaLista").style.display = "block";
    } else {
        document.querySelector("#teszta").style.display = "none";
        document.querySelector("#tesztaLista").style.display = "none";
    }
}

// Rizses ételek lista----------------------
rizsesGomb.addEventListener("click", rizsesKiiratas);
document.querySelector("#rizses").innerHTML = rizses.etelFajta + ":";
let rizsesLista = "";
for (let i = 0; i < rizses.etelLista.length; i++) {
    rizsesLista += "<li>" + rizses.etelLista[i] + "</li>";
}
document.querySelector("#rizsesLista").innerHTML = rizsesLista;

function rizsesKiiratas() {
    let allapot = document.querySelector("#rizses").style.display;
    if (allapot != "block") {
        document.querySelector("#rizses").style.display = "block";
        document.querySelector("#rizsesLista").style.display = "block";
    } else {
        document.querySelector("#rizses").style.display = "none";
        document.querySelector("#rizsesLista").style.display = "none";
    }
}
// Sült ételek lista----------------------
sultGomb.addEventListener("click", sultKiiratas);
document.querySelector("#sult").innerHTML = sult.etelFajta + ":";
let sultLista = "";
for (let i = 0; i < sult.etelLista.length; i++) {
    sultLista += "<li>" + sult.etelLista[i] + "</li>";
}
document.querySelector("#sultLista").innerHTML = sultLista;

function sultKiiratas() {
    let allapot = document.querySelector("#sult").style.display;
    if (allapot != "block") {
        document.querySelector("#sult").style.display = "block";
        document.querySelector("#sultLista").style.display = "block";
    } else {
        document.querySelector("#sult").style.display = "none";
        document.querySelector("#sultLista").style.display = "none";
    }
}
/* Lista eljárás lépései
--------------------------
gombhoz kiiratás() hozzárendelése
Kategóira ID és név kiiratása
üres kategóriaLista létrehozása
for ciklussal bejárás a kategória.etelLista tömböt
kiiratni a listát a változóba
behejezni a html elembe a változó értékét (#kategoriaLista)
--Kiirató függvény
display állapot lekérdezése
ha !=block akkor váltsa blockra:
    #kategoria
    #kategoriaLista
else ágban fordítottan
*/


// Random Leves generálás --------
randomLevesGomb.addEventListener("click", randomLeves);
document.querySelector("#levesAjanlo").addEventListener("click", levesAjanloGomb);

function randomLeves() {
    levesAjanloGomb();
    let allapot = document.querySelector("#randomLeves").style.display;
    if (allapot != "block") {
        document.querySelector("#randomLeves").style.display = "block";
    } else {
        document.querySelector("#randomLeves").style.display = "none";
    }
}

function levesAjanloGomb() {
    let rLeves = Math.abs(Math.round(Math.random() * (leves.etelLista.length - 1)));
    document.querySelector("#randomLeves").innerHTML = leves.etelLista[rLeves];
}

//Random Főzelék generálás ----------
randomFozelekGomb.addEventListener("click", randomFozelek);
document.querySelector("#fozelekAjanlo").addEventListener("click", fozelekAjanloGomb);

function randomFozelek() {
    fozelekAjanloGomb();
    let allapot = document.querySelector("#randomFozelek").style.display;
    if (allapot != "block") {
        document.querySelector("#randomFozelek").style.display = "block";
    } else {
        document.querySelector("#randomFozelek").style.display = "none";
    }
}

function fozelekAjanloGomb() {
    let rFozelek = Math.abs(Math.round(Math.random() * (fozelek.etelLista.length - 1)));
    document.querySelector("#randomFozelek").innerHTML = fozelek.etelLista[rFozelek];
}

//Random Tészta generálás ----------
randomTesztaGomb.addEventListener("click", randomTeszta);
document.querySelector("#tesztaAjanlo").addEventListener("click", tesztaAjanloGomb);

function randomTeszta() {
    tesztaAjanloGomb();
    let allapot = document.querySelector("#randomTeszta").style.display;
    if (allapot != "block") {
        document.querySelector("#randomTeszta").style.display = "block";
    } else {
        document.querySelector("#randomTeszta").style.display = "none";
    }
}

function tesztaAjanloGomb() {
    let rTeszta = Math.abs(Math.round(Math.random() * (teszta.etelLista.length - 1)));
    document.querySelector("#randomTeszta").innerHTML = teszta.etelLista[rTeszta];
}

//Random Rizses étel generálás ----------
randomRizsesGomb.addEventListener("click", randomRizses);
document.querySelector("#rizsesAjanlo").addEventListener("click", rizsesAjanloGomb);

function randomRizses() {
    rizsesAjanloGomb();
    let allapot = document.querySelector("#randomRizses").style.display;
    if (allapot != "block") {
        document.querySelector("#randomRizses").style.display = "block";
    } else {
        document.querySelector("#randomRizses").style.display = "none";
    }
}

function rizsesAjanloGomb() {
    let rRizses = Math.abs(Math.round(Math.random() * (rizses.etelLista.length - 1)));
    document.querySelector("#randomRizses").innerHTML = rizses.etelLista[rRizses];
}

//Random Sült étel generálás ----------
randomSultGomb.addEventListener("click", randomSult);
document.querySelector("#sultAjanlo").addEventListener("click", sultAjanloGomb);

function randomSult() {
    sultAjanloGomb();
    let allapot = document.querySelector("#randomSult").style.display;
    if (allapot != "block") {
        document.querySelector("#randomSult").style.display = "block";
    } else {
        document.querySelector("#randomSult").style.display = "none";
    }
}

function sultAjanloGomb() {
    let rSult = Math.abs(Math.round(Math.random() * (sult.etelLista.length - 1)));
    document.querySelector("#randomSult").innerHTML = sult.etelLista[rSult];
}

//Heti menü generálás------ Leves és főétel
randomMenuGomb.addEventListener("click", randomMenu);
document.querySelector("#menuAjanlo").addEventListener("click", menuAjanloGomb);

function randomMenu() {
    menuAjanloGomb();
    let allapot = document.querySelector("#randomMenu").style.display;
    if (allapot != "block") {
        document.querySelector("#randomMenu").style.display = "block";
    } else {
        document.querySelector("#randomMenu").style.display = "none";
    }
}

function menuAjanloGomb() {
    let osszesNap = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];
    let hetNapja = "";
    for (let i = 0; i < osszesNap.length; i++) {
        //Leves
        let randomLevesIndex = Math.abs(Math.round(Math.random() * (leves.etelLista.length - 1)));
        let randomLeves = leves.etelLista[randomLevesIndex];
        //Főétel
        let randomEtelFajta = Math.round(Math.random() * 3 + 1);
        if (randomEtelFajta == 1) {
            randomEtelFajta = fozelek.etelLista[Math.abs(Math.round(Math.random() * (fozelek.etelLista.length - 1)))];
            hetNapja += "<li><h3>" + osszesNap[i] + ":</h3>" + randomLeves + " <i>és</i><br>" + randomEtelFajta + "</li>";
        } else if (randomEtelFajta == 2) {
            randomEtelFajta = teszta.etelLista[Math.abs(Math.round(Math.random() * (teszta.etelLista.length - 1)))];
            hetNapja += "<li><h3>" + osszesNap[i] + ":</h3>" + randomLeves + " <i>és</i><br>" + randomEtelFajta + "</li>";
        } else if (randomEtelFajta == 3) {
            randomEtelFajta = rizses.etelLista[Math.abs(Math.round(Math.random() * (rizses.etelLista.length - 1)))];
            hetNapja += "<li><h3>" + osszesNap[i] + ":</h3>" + randomLeves + " <i>és</i><br>" + randomEtelFajta + "</li>";
        } else if (randomEtelFajta == 4) {
            randomEtelFajta = sult.etelLista[Math.abs(Math.round(Math.random() * (sult.etelLista.length - 1)))];
            hetNapja += "<li><h3>" + osszesNap[i] + ":</h3>" + randomLeves + " <i>és</i><br>" + randomEtelFajta + "</li>";
        } else {
            document.querySelector("#randomMenu").innerHTML = "Valami hiba történt! :(";
        }
        document.querySelector("#randomMenu").innerHTML = hetNapja;
    }
}