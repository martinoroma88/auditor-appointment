export function createSection(report, data, title) {
  let result = "";
  data.forEach((item) => {
    const ref = item[0] || false;
    const label = item[1] || false;
    const tipo = item[2] || false;
    const sorgente = item[3] || false;

    const value = report[ref] ? report[ref] : "";
    let date;
    if (ref) date = ref.includes("data") ? "date" : "text";

    // LABEL
    if (tipo === "label") {
      result += "<div class='alone'><label>" + label + "</label></div>";
      // SELECT
    } else if (tipo === "select") {
      let options = "<option value=''>--seleziona elemento--</option>";
      sorgente.forEach((option) => {
        const isSelected = value === option ? "selected" : "";
        options += `<option ${isSelected} value="${option}">${option}</option>`;
      });
      result += `
        <div>
          <div>
            <label>${label}</label>
          </div>
          <select data-ref="${ref}">${options}</select>
        </div>`;
      // CHECKBOX
    } else if (tipo === "checkbox") {
      sorgente.forEach((checkbox, i) => {
        // VERIFICA DELETED DATE
        if(sorgente) {
          console.log("DELETED DATE: ", checkbox.deleted_date, " REPORT DATE: ", report.data)
          if(checkbox.deleted_date <= report.data) {
            return;
          }
        }
        // FINE VERIFICA
        const isChecked = value.includes(checkbox.id) ? "checked" : "";
        result += `<div><input data-ref="${ref}" ${isChecked} type="checkbox" id="${ref}-${i}" value="${checkbox.id}"><label class="dr__simplelabel" for="${ref}-${i}">${checkbox.name}</label></div>`;
      });
      // RADIO
    } else if (tipo === "radio") {
      let radios = "";
      sorgente.forEach((radio, i) => {
        const isChecked = value === radio ? "checked" : "";
        radios += `<input data-ref="${ref}" ${isChecked} type="radio" name="${ref}" id="${ref}-${i}" value="${radio}"><label class="dr__simplelabel" style="margin-right:15px;margin-left:7px;" for="${ref}-${i}">${radio}</label>`;
      });
      result += `<div><label>${label}</label><p style="display:flex;">${radios}</p></div>`;
      // TEXTAREA
    } else if (tipo === "textarea") {
      result += `
        <div>
          <label>${label}</label>
          <textarea data-ref="${ref}">${value}</textarea>
        </div>`;
      // OTHER, TEXT
    } else {
      const readonly = tipo ? "readonly" : "";
      result += `
        <div>
          <label>${label}</label>
          <input type="${date}" data-ref="${ref}" ${readonly} value="${value}">
        </div>`;
    }
  });
  return `
    <div>
      <div>
        <h2>${title}</h2>
      </div>
      <div class="dr__row__2">
        ${result}
      </div>
    </div>`;
}
