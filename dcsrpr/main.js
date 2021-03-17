import style from "./style.js";
import html from "./html.js";
import { comitato, allegati, standard } from "./tables.js";

export default function decisionReport(el, data, existingReport) {
  let report = {};
  let src = { ...data };
  src.comitato = comitato;
  src.allegati = allegati;
  src.standard = standard;
  if (existingReport) {
    report = existingReport; //{ ...data };
  } else {
    const date = new Date();
    const today =
      date.getFullYear().toString() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      date.getDate().toString().padStart(2, "0");
    const dataPrimaEmissione = src.certificato.primaEmissione
      ? src.certificato.primaEmissione
      : "";
    const dataEmissioneCorrente = src.certificato.emissioneCorrente
      ? src.certificato.emissioneCorrente
      : "";
    const dataScadenza = src.certificato.scadenza
      ? src.certificato.scadenza
      : "";
    report = {
      numero: src.numero,
      data: today,
      dataFirma: "",//today,
      luogo: "Milano",
      comitato: [],
      azienda: src.cliente.azienda,
      codiceAzienda: src.cliente.codiceAzienda,
      sedeLegale: src.cliente.sedeLegale,
      rappresentante: [],
      categorie: src.cliente.categorie,
      numeroVerifica: undefined,
      dataVerifica: undefined,
      durataVerifica: undefined,
      dataStage1: undefined,
      dataStage2: undefined,
      auditA: undefined,
      auditB: undefined,
      tipoVerifica: undefined,
      allegati: [],
      certificationScheme: "",
      scopeOfCertification: "",
      certificationStandard: [],
      certificateDecision: "Yes",
      reasonStatement: "",
      certificateNumber: src.certificato.numero ? src.certificato.numero : "",
      dataPrimaEmissione: dataPrimaEmissione,
      dataEmissioneCorrente: dataEmissioneCorrente,
      dataScadenza: dataScadenza
    };
  }

  return {
    app: document.querySelector(el),
    style: style,
    report: report,
    createForm: function () {
      this.app.innerHTML = "";
      this.app.insertAdjacentHTML("beforebegin", this.style);
      this.app.insertAdjacentHTML("beforeend", html(src, this.report));
      const references = document.querySelectorAll(
        "#decision-report [data-ref]"
      );
      this.attachEvents(references);
    },
    attachEvents: function (elements) {
      elements.forEach((el) => {
        el.addEventListener("change", (e) => {
          this.updateReport(e.target);
        });
      });
    },
    updateReport: function (target) {
      const ref = target.dataset.ref;
      const value = target.value;

      document.querySelector("body").classList.add("hasChanges");
      if (
        ref === "comitato" ||
        ref === "certificationStandard" ||
        ref === "allegati"
      ) {
        if (target.checked) {
          this.report[ref].push(value);
        } else {
          const i = this.report[ref].indexOf(value);
          this.report[ref].splice(i, 1);
        }
      } else {
        this.report[ref] = value;
      }
      this.createForm();
      console.log(this.report[ref]);
    },
    getReport: function () {
      return this.report;
    }
  };
}
