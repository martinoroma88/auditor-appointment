import { createSection } from "./utils.js";

export default function html(src, report) {
  // Intestazione
  const intestazione = createSection(
    report,
    [
      ["numero", "Report number", "readonly"],
      ["luogo", "Place"],
      ["data", "Date"],
      ["dataFirma", "Signature date"]
    ],
    "Intestazione"
  );

  // Comitato
  const comitato = createSection(
    report,
    [["comitato", "Committee", "checkbox", src.comitato]],
    "Comitato"
  );

  // Cliente
  const cliente = createSection(
    report,
    [
      ["azienda", "Organization name", "readonly"],
      ["codiceAzienda", "Organization code", "readonly"],
      ["sedeLegale", "Registered office", "readonly"],
      ["rappresentante", "Representative", "select", src.cliente.rappresentante],
      ["categorie", "Categories", "readonly"]
    ],
    "Cliente"
  );

  // Audit
  const audit = createSection(
    report,
    [
      ["auditA", "Address A", "select", src.cliente.indirizzi],
      ["auditB", "Address B", "select", src.cliente.indirizzi],
      ["tipoVerifica", "Verification type", "select", src.tipologieAudit],
      ["numeroVerifica", "Verification number"],
      ["dataVerifica", "Verification date"],
      ["durataVerifica", "Audit duration"],
      ["dataStage1", "Stage 1 date"],
      ["dataStage2", "Stage 2 date"],
      ["certificationScheme", "Certification scheme"],
      ["scopeOfCertification", "Scope of certification"],
      [false, "Certification Standard", "label"],
      ["certificationStandard", false, "checkbox", src.standard]
    ],
    "Audit"
  );

  // Allegati
  const allegati = createSection(
    report,
    [["allegati", "Attachments", "checkbox", src.allegati]],
    "Allegati"
  );

  // Certificato
  // Se il certificato esiste precompilarlo con i dati e impostare input readonly
  const certificato = createSection(
    report,
    [
      ["certificateDecision", "Certificate decision", "radio", ["Yes", "No"]],
      [
        "reasonStatement",
        "Statement of reasons in the negative event - specify",
        "textarea"
      ],
      ["certificateNumber", "Certificate Number"],
      ["dataPrimaEmissione", "Date First Issue"],
      ["dataEmissioneCorrente", "Date Present Issue"],
      ["dataScadenza", "Expiry Date"]
    ],
    "Certificato"
  );

  return intestazione + comitato + cliente + audit + allegati + certificato;
}
