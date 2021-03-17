const data = {
  numero: "",
  cliente: {
    azienda: "",
    codiceAzienda: "",
    sedeLegale: "",
    categorie: "",
    indirizzi: [],
    rappresentante: []
  },
  certificato: {
    numero: "",
    // le date vanno nel formato yyyy-mm-dd per essere riconosciute dall'input come tali
    primaEmissione: "",
    emissioneCorrente: "",
    scadenza: ""
  },
  tipologieAudit: [
    "Pre-audit",
    "Certificazione",
    "Sorveglianza",
    "Mantenimento",
    "Estensione",
    "Audit suppletivo",
    "Rinnovo"
  ]
};

export default data;
