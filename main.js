let painike = document.getElementById("painike");
painike.addEventListener("click", yhdistettyFunktio);

function yhdistettyFunktio(event) {
    tarkastaId();
    tarkastaSalasana();
    tarkastaNimi();
    tarkastaOsoite();
    tarkastaMaa();
    tarkastaZip();
    tarkastaSposti();
    tarkastaSukupuoli();
    kieliValitsin();
}

function tarkastaId() {
    let käytId = document.getElementById("kayttajaId").value;
    document.getElementById("iiDee").innerHTML = ""
    if (käytId.length < 6) {
        document.getElementById("iiDee").innerHTML = "Käyttäjä ID pitää olla vähintään 6 merkkiä pitkä."
    }
}

function tarkastaSalasana() {
    let salaS = document.getElementById("salasana").value;
    document.getElementById("ss").innerHTML = ""
    let numerot = /[0-9]/
    let erikois = /[!@£$€&%#]/
    let isot = /[A-ZÖÄÅ]/
    if (salaS.length < 6 || !numerot.test(salaS) || !erikois.test(salaS) || !isot.test(salaS)) {
        document.getElementById("ss").innerHTML = "Salasanassa tulee olla väh. 6 merkkiä, 1 iso kirjain, 1 numero ja joku erikoismerkieistä '!@£$€&%#'"
        }
}

function tarkastaNimi() {
    let nimi = document.getElementById("nimi").value;
    document.getElementById("name").innerHTML = ""
    if (nimi.length < 1) {
        document.getElementById("name").innerHTML = "Pakollinen kenttä, syötä nimi."
    }
}

function tarkastaOsoite() {
    let osoite = document.getElementById("osoite").value;
    document.getElementById("address").innerHTML = ""
    if (osoite.length < 1) {
        document.getElementById("address").innerHTML = "Pakollinen kenttä, syötä osoite."
    }
}

function tarkastaMaa() {
    let maa = document.getElementById("maa").value;
    document.getElementById("country").innerHTML = ""
    if (maa === "(Valitse maa)") {
        document.getElementById("country").innerHTML = "Pakollinen kenttä, valitse maa."
    }
}

function tarkastaZip() {
    let pnro = document.getElementById("postinumero").value;
    document.getElementById("zip").innerHTML = ""
    let numerot = /[0-9]/
    if (pnro.length !== 5 || !numerot.test(pnro)) {
        document.getElementById("zip").innerHTML = "Postinumerossa pitää olla 5 numeroa."
    }
}

function tarkastaSposti() {
    let maili = document.getElementById("sposti").value;
    let sallittuMaili = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    document.getElementById("email").innerHTML = ""
    if (!sallittuMaili.test(maili)) {
        document.getElementById("email").innerHTML = "Anna kelvollinen sähköpostiosoite."
    }
}

function tarkastaSukupuoli() {
    let sPuoliValitsin = document.querySelector("input[name='sukupuoli']:checked");
    document.getElementById("sukupuoliiidee").innerHTML = ""
    if (sPuoliValitsin == null) {
        document.getElementById("sukupuoliiidee").innerHTML = "Pakollinen kenttä, valitse jokin edellä olevista."
    }
}

function kieliValitsin() {
    let kielivalits = document.querySelector("input[name='kieli']:checked");
    document.getElementById("kielet").innerHTML = ""
    if (kielivalits == null) {
        document.getElementById("kielet").innerHTML = "Pakollinen kenttä, valitsen jokin edellä olevista."
    }
}