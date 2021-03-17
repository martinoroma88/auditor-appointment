import decisionReport from "./main.js";
import data from "./data.js";

// Ritorna l'oggetto report
export const report = decisionReport("#decision-report", data);

/*
// Crea il form
report.createForm();
// Acquisisci i dati inseriti
console.log(report.getReport());
// Test nella console con i risultati dopo 15 secondi di modifiche
setTimeout(() => {
  console.log(report.getReport());
}, 15000);
*/