const creaForm = function (db, doc) {
  const html = `<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
    />
    <div id="app" class="container" style="background: white;">
      <h1>Auditor Appointment</h1>
      <form>
        <h3>Audit Team</h3>
        <div class="row">
          <div class="column">
            <label class="inline-label">Date</label>
            <input v-model="result.date" type="date" />
          </div>
        </div>
        <div class="row">
          <fieldset class="column">
            <h4>Islamic Expert</h4>
            <label>Nome</label>
            <select v-model="result.islamicExpertNome">
              <option></option>
              <option>Mansur Giuseppe Baudo</option>
              <option>Aisha Valeria Lazzerini</option>
              <option>Halima Erika Rubbo</option>
              <option>Nabil Haman</option>
            </select>
  
            <label>Ente</label>
            <input type="text" disabled v-model="result.islamicExpertEnte" />
  
            <label>Funzione</label>
            <select v-model="result.islamicExpertFunzione">
              <option></option>
              <option>Audit team leader</option>
              <option>Auditor stage 1</option>
              <option>Auditor stage 2</option>
            </select>
          </fieldset>
  
          <fieldset class="column">
            <h4>Tehnical Expert</h4>
            <label>Nome</label>
            <select v-model="result.technicalExpertNome">
              <option></option>
              <option>Rim Souda</option>
              <option>Bechir Bakey</option>
              <option>Alberto Dal Molin</option>
              <option>Matheus Monaco</option>
            </select>
  
            <label>Ente</label>
            <input
              type="text"
              disabled
              v-model="result.technicalExpertEnte"
            />
  
            <label>Funzione</label>
            <select v-model="result.technicalExpertFunzione">
              <option></option>
              <option>Audit team leader</option>
              <option>Auditor stage 1</option>
              <option>Auditor stage 2</option>
            </select>
          </fieldset>
  
          <fieldset class="column">
            <h4>Tehnical Auditor</h4>
            <label>Nome</label>
            <select v-model="result.technicalAuditorNome">
              <option></option>
              <option>Hatice Gurses</option>
              <option>Nabil Haman</option>
            </select>
  
            <label>Ente</label>
            <input
              type="text"
              disabled
              v-model="result.technicalAuditorEnte"
            />
  
            <label>Funzione</label>
            <select v-model="result.technicalAuditorFunzione">
              <option></option>
              <option>Audit team leader</option>
              <option>Auditor stage 1</option>
              <option>Auditor stage 2</option>
            </select>
          </fieldset>
        </div>
  
        <br />
  
        <h3>Cliente</h3>
        <div class="row">
          <fieldset class="column">
            <label>Company</label>
            <input type="text" v-model="result.company" disabled />
          </fieldset>
  
          <fieldset class="column">
            <label>Legal Address</label>
            <input type="text" v-model="result.legalAddress" disabled />
          </fieldset>
  
          <fieldset class="column">
            <label>Company representative</label>
            <select v-model="result.representative">
              <option></option>
              <option v-for="r in db.representatives" :key="r">{{r}}</option>
            </select>
          </fieldset>
        </div>
  
        <div class="row">
          <fieldset class="column">
            <label>Address of plant A</label>
            <select v-model="result.addressPlantA">
              <option></option>
              <option v-for="i in db.addresses" :key="i">{{i}}</option>
            </select>
          </fieldset>
          <fieldset class="column">
            <label>Address of plant B</label>
            <select v-model="result.addressPlantB">
              <option></option>
              <option v-for="i in db.addresses" :key="i">{{i}}</option>
            </select>
          </fieldset>
        </div>
  
        <div class="row">
          <fieldset class="column">
            <label>Category</label>
            <input type="text" v-model="result.category" disabled />
          </fieldset>
          <fieldset class="column">
            <label>Company Code</label>
            <input type="text" v-model="result.code" disabled />
          </fieldset>
        </div>
  
        <br />
  
        <h3>Audit</h3>
        <div class="row">
          <fieldset class="column">
            <label>Type of Audit</label>
            <select v-model="result.type">
              <option></option>
              <option>Pre-Audit</option>
              <option>Certification</option>
              <option>Maintenance</option>
              <option>Extension</option>
              <option>Additional Audit</option>
              <option>Renewal</option>
            </select>
          </fieldset>
          <fieldset class="column">
            <label>Before</label>
            <input type="date" v-model="result.before" />
          </fieldset>
          <fieldset class="column">
            <label>Audit No.</label>
            <input type="text" v-model="result.number" />
          </fieldset>
        </div>
  
        <div class="row">
          <fieldset class="column">
            <label>Audit duration</label
            ><input v-model="result.duration" type="text" />
          </fieldset>
          <fieldset class="column">
            <label>Stage 1 Doc. Evaluation</label
            ><input v-model="result.stage1" type="date" />
          </fieldset>
          <fieldset class="column">
            <label>Stage 2 Audit</label
            ><input v-model="result.stage2" type="date" />
          </fieldset>
        </div>
  
        <fieldset id="std" @click="addStd">
          <label>Certification Standard</label>
          <div class="row">
            <div class="column">
              <div>
                <input type="checkbox" value="COREIS DTP HLL-C 02" />
                <label class="label-inline">COREIS DTP HLL-C 02</label>
              </div>
              <div>
                <input type="checkbox" value="GSO 2055 - 1" />
                <label class="label-inline">GSO 2055 - 1</label>
              </div>
              <div>
                <input type="checkbox" value="UAE.S 2055 - 1" />
                <label class="label-inline">UAE.S 2055 - 1</label>
              </div>
              <div>
                <input type="checkbox" value="UAE.S 993" />
                <label class="label-inline">UAE.S 993</label>
              </div>
            </div>
            <div class="column">
              <div>
                <input type="checkbox" value="MS 2200" />
                <label class="label-inline">MS 2200</label>
              </div>
              <div>
                <input type="checkbox" value="OIC SMIIC 1" />
                <label class="label-inline">OIC SMIIC 1</label>
              </div>
              <div>
                <input type="checkbox" value="COREIS DTP HLL 02" />
                <label class="label-inline">COREIS DTP HLL 02</label>
              </div>
              <div>
                <input type="checkbox" value="GSO 993" />
                <label class="label-inline">GSO 993</label>
              </div>
            </div>
            <div class="column">
              <div>
                <input type="checkbox" value="UAE.S 2055 - 4" />
                <label class="label-inline">UAE.S 2055 - 4</label>
              </div>
              <div>
                <input type="checkbox" value="MS 1500" />
                <label class="label-inline">MS 1500</label>
              </div>
              <div>
                <input type="checkbox" value="MUIS SMHS" />
                <label class="label-inline">MUIS SMHS</label>
              </div>
            </div>
          </div>
        </fieldset>
  
        <div class="row">
          <fieldset class="column">
            <label>Certification Scheme</label
            ><input v-model="result.scheme" type="text" />
          </fieldset>
          <fieldset class="column">
            <label>Scope of certification</label
            ><input v-model="result.scope" type="text" />
          </fieldset>
        </div>
      </form>
    </div>`;
  document
    .querySelector("#appContainer")
    .insertAdjacentHTML("afterbegin", html);

  const app = {
    data() {
      return {
        db: db,
        result: {
          date: "",
          islamicExpertNome: "",
          islamicExpertFunzione: "",
          islamicExpertEnte: "Halal Italia Srl",
          technicalExpertNome: "",
          technicalExpertFunzione: "",
          technicalExpertEnte: "Halal Italia Srl",
          technicalAuditorNome: "",
          technicalAuditorFunzione: "",
          technicalAuditorEnte: "Halal Italia Srl",
          company: "",
          legalAddress: "",
          representative: "",
          addressPlantA: "",
          addressPlantB: "",
          category: "",
          code: "",
          type: "",
          before: "",
          number: "",
          duration: "",
          stage1: "",
          stage2: "",
          standard: [],
          scheme: "",
          scope: ""
        }
      };
    },
    mounted() {
      this.result.company = this.db.company;
      this.result.legalAddress = this.db.legalAddress;
      this.result.category = this.db.category;
      this.result.code = this.db.code;

      // Imposta di default la data su oggi
      let today = (function () {
        const t = new Date();
        let y = t.getFullYear() + "";
        let m = t.getMonth() + 1 + "";
        let d = t.getDate() + "";
        while (m.length < 2) {
          m = "0" + m;
        }
        while (d.length < 2) {
          d = "0" + d;
        }
        return { y, m, d };
      })();
      this.result.date = `${today.y}-${today.m}-${today.d}`;

      // Se il documento esiste già, aggiornare i dati
      if (doc) {
        for (const key in doc) {
          if (doc.hasOwnProperty(key)) {
            this.result[key] = doc[key];
          }
        }
      }
    },
    methods: {
      addStd() {
        console.log("running");
        let myArr = [];
        const inputs = document.querySelectorAll("#std input:checked");
        inputs.forEach((i) => {
          myArr.push(i.value);
        });
        this.result.standard = myArr;
      }
    }
  };

  const vm = Vue.createApp(app).mount("#app");

  return vm;
};
