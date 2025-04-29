const matieresCC = ["es1","es2","hg1","hg2","lva1","lva2","lvb1","lvb2","spe1","eps","emc1","emc2","froral","frecrit"];
const coeffsCC = {"es1":3,"es2":3,"hg1":3,"hg2":3,"lva1":3,"lva2":3,"lvb1":3,"lvb2":3,"spe1":8,"eps":6,"emc1":1,"emc2":1,"froral":5,"frecrit":5};
const spes = {"hggsp":9,"hlp":0,"ses":12,"maths":20,"llcer":5,"nsi":16,"phch":20,"svt":18,"si":19,"art":5,"eps":10,"llca":2,"bioeco":16};
const mentNote = {"A":10,"B":12,"AB":14,"TB":16,"TBF":18};
const corresp = {"hggsp":"HGGSP","hlp":"HLP","ses":"SES","maths":"Mathématiques","llcer":"LLCER","nsi":"NSI","phch":"Physique-Chimie","svt":"SVT","si":"SI","art":"Art","eps":"Sport","llca":"LLCA","bioeco":"Biologie-Écologie","philo":"Philosophie","oral":"Grand Oral"}

function arrondir0_5(nombre) {
    return Math.round(nombre * 2) / 2;
}

function redistribuerNotes(notesDict, coeffs, poids) {
  let surplusPoints = 0.0;

  for (let mat in notesDict) {
      if (notesDict[mat] > 20) {
          let surplus = (notesDict[mat] - 20) * coeffs[mat];
          surplusPoints += surplus;
          notesDict[mat] = 20;
      }
  }

  while (surplusPoints > 0) {

      let receveurs = {};
      for (let mat in notesDict) {
          if (notesDict[mat] < 20) {
              receveurs[mat] = poids[mat] * coeffs[mat];
          }
      }

      const receveursKeys = Object.keys(receveurs);
      if (receveursKeys.length === 0) {
          break;
      }

      let sommeReceveurs = receveursKeys.reduce((acc, mat) => acc + receveurs[mat], 0);

      for (let mat of receveursKeys) {
          let part = receveurs[mat] / sommeReceveurs;
          let gain = (surplusPoints * part) / coeffs[mat];
          gain = Math.min(gain, 20 - notesDict[mat]);

          notesDict[mat] += gain;
          surplusPoints -= gain * coeffs[mat];
      }
  }

  return notesDict;
}


function calculer() {
  const sci = parseFloat(document.getElementById("sci").value);
  const oral = parseFloat(document.getElementById("oral").value);

  var spe1Elmt = document.getElementById("spe2");
  const spe1 = spe1Elmt.options[spe1Elmt.selectedIndex].value;
  var spe2Elmt = document.getElementById("spe3");
  const spe2 = spe2Elmt.options[spe2Elmt.selectedIndex].value;
  const obj = parseFloat(document.getElementById("obj").value) * 100;
  const litt = parseFloat(document.getElementById("litt").value);

  // Notes contrôle continu
  let notesCC = {};
  let points = 0;
  for (let m of matieresCC) {
    const val = document.getElementById(m).value.trim();
    let note = parseFloat(val);
    console.log(note)
    if (isNaN(note)) note = 0;
    notesCC[m] = note;
    points += note * (coeffsCC[m] || 0);
  }

  const diff = obj - points;
  console.log(diff,obj,points);
  const resultatDiv = document.getElementById("resultat");

  if (diff > 1000) {
    resultatDiv.innerHTML = "<p>🎯 Objectif impossible à atteindre.</p>";
    return;
  }

  const coeffsEpr = {"spe1":16,"spe2":16,"oral":10,"philo":8};

  const poids = {
    "spe1": ((20 - Math.abs(spes[spe1] - sci)) / 20) * 320,
    "spe2": ((20 - Math.abs(spes[spe2] - sci)) / 20) * 320,
    "oral": (oral / 20) * 200,
    "philo": (litt / 20) * 160
  };

  const sommePoids = Object.values(poids).reduce((a, b) => a + b, 0);

  let notesAAvoir = {};
  for (let k in poids) {
    const numerateur = (diff * (poids[k] / sommePoids)) * 20;
    const denominateur = (coeffsEpr[k] * 1000) / 50;
    notesAAvoir[k] = arrondir0_5(numerateur / denominateur).toFixed(1);
  }

  redistribuerNotes(notesAAvoir,coeffsCC,poids);

  notesAAvoir[spe1]=notesAAvoir["spe1"];
  notesAAvoir[spe2]=notesAAvoir["spe2"];
  delete notesAAvoir["spe1"];
  delete notesAAvoir["spe2"];

  for (let k in notesAAvoir) {
    if (isNaN(notesAAvoir[k])) {
      notesAAvoir[k]="--"
    }
  }

  let html = `<p>📊 Répartition des points conseillée :</p><ul>`;
  for (let [k, v] of Object.entries(notesAAvoir)) {
    html += `<li>${corresp[k]} : <strong>${v}/20</strong></li>`;
  }
  html += `</ul>`;
  resultatDiv.innerHTML = html;
}