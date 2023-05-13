const laenuKogusInput = document.querySelector(".laenu-kogus");
const intressimäärInput = document.querySelector(".intressimäär");
const perioodInput = document.querySelector(".periood");

const kuumakseValue = document.querySelector(".kuumakse .value");
const koguintressValue = document.querySelector(".kogu-intress .value");
const kogumakseValue = document.querySelector(".kogu-makse .value");

const arvutaNupp = document.querySelector(".arvuta-nupp");

let laenuKogus = parseFloat(laenuKogusInput.value);
let intressimäär = parseFloat(intressimäärInput.value);
let periood = parseFloat(perioodInput.value);

let intress = intressimäär / 12 / 100;

const arvutaKuumakse = () => {
    let KM = 
    laenuKogus * 
    intress * 
    (Math.pow(1 + intress, periood) / 
        (Math.pow(1 + intress, periood) - 1));

    return KM;
};

const updateData = (KM) => {
    kuumakseValue.innerHTML = Math.round(KM);

    let kogumakse = Math.round(periood * KM);
    kogumakseValue.innerHTML = kogumakse;

    let koguIntressiMakse = Math.round(kogumakse - laenuKogus);
    koguintressValue.innerHTML = koguIntressiMakse;
};

const uuendaInputValues = () => {
    laenuKogus = parseFloat(laenuKogusInput.value);
    intressimäär = parseFloat(intressimäärInput.value);
    periood = parseFloat(perioodInput.value);
    intress = intressimäär / 12 / 100;
};

const init = () => {
    uuendaInputValues();
    let KM = arvutaKuumakse();
    updateData(KM);
};

init();

arvutaNupp.addEventListener("click", init);