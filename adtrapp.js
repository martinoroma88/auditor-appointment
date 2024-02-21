const creaForm = function (db, doc) {
  const html = `
  <style>
      #a-form {
        --q1: 7;
        --q2: 15;
        --q3: 21;
        --q4: 50;
        --color: black;
        --bg: white;
        --accent: green;
        --warning: red;
        font-family: inherit;
      }

      #a-form legend {
        font-size: 1.5rem;
        font-weight: bold;
      }

      /* Reset */

      #a-form fieldset {
        margin: 2em 0;
        padding: 1em 1em 0 1em;
        box-sizing: border-box;
      }

      #a-form .column {
        display: flex;
        flex-direction: column;
      }

      /* Layout */
      #a-form .row {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
      }

      #a-form #std .column > div {
        display: flex;
        padding: 0.5em 0;
      }

      /* Inputs */

      #a-form input:not([type="checkbox"]):not([type="radio"]),
      #a-form input[type="date"],
      #a-form select,
      #a-form textarea {
        font-size: 1em;
        margin-bottom: 1em;
        display: block;
        padding: calc(var(--q1) * 1px);
        font-family: inherit;
      }

      #a-form input[type="checkbox"] {
        margin-right: calc(var(--q1) * 1px);
      }

      #a-form input[readonly] {
        background-color: #f8f8f8;
      }

      /* Typography */

      #a-form label:not(.dr__simplelabel) {
        display: block;
        font-family: inherit;
        margin-bottom: calc(var(--q1) * 1px);
        font-weight: bold;
      }

      #a-form .alone {
        grid-column: span 2;
      }

      #a-form p {
        padding-top: calc(var(--q1) * 1px);
      }

      #a-form h2 {
        padding-bottom: calc(var(--q2) * 1px);
        font-size: 21px;
        font-weight: bold;
      }
    </style>

    <div id="app" class="container" style="background: white;">
      <h1>Auditor Appointment</h1>
      <form id="a-form">
        <div class="row">
          <div class="column">
            <label class="inline-label">Date</label>
            <input v-model="result.date" type="date" />
          </div>
        </div>

        <fieldset>
          <legend>Team</legend>
          <div class="row">
            <div class="column">
              <label>Tipologia</label>
              <select v-model="result.person1.type">
                <option></option>
                <option>Islamic Expert</option>
                <option>Technical Expert</option>
                <option>Technical Auditor</option>
              </select>
            </div>
            <div class="column">
              <label>Nome</label>
              <select v-model="result.person1.name">
                <option></option>
                <option v-if="result.person1.type === 'Islamic Expert'"
                  >Mansur Giuseppe Baudo</option
                >
                <option v-if="result.person1.type === 'Islamic Expert'"
                  >Aisha Valeria Lazzerini</option
                >
                <option v-if="result.person1.type === 'Islamic Expert'"
                  >Halima Erika Rubbo</option
                >
                <option v-if="result.person1.type === 'Islamic Expert'"
                  >Nabil Haman</option
                >
                <option v-if="result.person1.type === 'Islamic Expert'"
                  >Nabil Haman</option
                >
                <option v-if="result.person1.type === 'Islamic Expert'"
                  >Mohammed Elshafey</option
                >
                <option v-if="result.person1.type === 'Technical Auditor'"
                  >Rim Souda</option
                >
                <option v-if="result.person1.type === 'Technical Auditor'"
                  >Marwa Grayaa</option
                >
                <option v-if="result.person1.type === 'Technical Expert'"
                  >Bechir Bakey</option
                >
                <option v-if="result.person1.type === 'Technical Expert'"
                  >Alberto Dal Molin</option
                >
                <option v-if="result.person1.type === 'Technical Expert'"
                  >Matheus Monaco</option
                >
                <option v-if="result.person1.type === 'Technical Auditor'"
                  >Hatice Gurses</option
                >
                <option v-if="result.person1.type === 'Technical Auditor'"
                  >Nabil Haman</option
                >
              </select>
            </div>
            <div class="column">
              <label>Funzione</label>
              <select v-model="result.person1.funzione">
                <option></option>
                <option>Audit team leader</option>
                <option>Auditor stage 1</option>
                <option>Auditor stage 2</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <label>Tipologia</label>
              <select v-model="result.person2.type">
                <option></option>
                <option>Islamic Expert</option>
                <option>Technical Expert</option>
                <option>Technical Auditor</option>
              </select>
            </div>
            <div class="column">
              <label>Nome</label>
              <select v-model="result.person2.name">
                <option></option>
                <option v-if="result.person2.type === 'Islamic Expert'"
                  >Mansur Giuseppe Baudo</option
                >
                <option v-if="result.person2.type === 'Islamic Expert'"
                  >Aisha Valeria Lazzerini</option
                >
                <option v-if="result.person2.type === 'Islamic Expert'"
                  >Halima Erika Rubbo</option
                >
                <option v-if="result.person2.type === 'Islamic Expert'"
                  >Nabil Haman</option
                >
                 <option v-if="result.person2.type === 'Islamic Expert'"
                  >Mohammed Elshafey</option
                >
                <option v-if="result.person2.type === 'Technical Auditor'"
                  >Rim Souda</option
                >
                <option v-if="result.person2.type === 'Technical Auditor'"
                  >Marwa Grayaa</option
                >
                <option v-if="result.person2.type === 'Technical Expert'"
                  >Bechir Bakey</option
                >
                <option v-if="result.person2.type === 'Technical Expert'"
                  >Alberto Dal Molin</option
                >
                <option v-if="result.person2.type === 'Technical Expert'"
                  >Matheus Monaco</option
                >
                <option v-if="result.person2.type === 'Technical Auditor'"
                  >Hatice Gurses</option
                >
                <option v-if="result.person2.type === 'Technical Auditor'"
                  >Nabil Haman</option
                >
              </select>
            </div>
            <div class="column">
              <label>Funzione</label>
              <select v-model="result.person2.funzione">
                <option></option>
                <option>Audit team leader</option>
                <option>Auditor stage 1</option>
                <option>Auditor stage 2</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <label>Tipologia</label>
              <select v-model="result.person3.type">
                <option></option>
                <option>Islamic Expert</option>
                <option>Technical Expert</option>
                <option>Technical Auditor</option>
              </select>
            </div>
            <div class="column">
              <label>Nome</label>
              <select v-model="result.person3.name">
                <option></option>
                <option v-if="result.person3.type === 'Islamic Expert'"
                  >Mansur Giuseppe Baudo</option
                >
                <option v-if="result.person3.type === 'Islamic Expert'"
                  >Aisha Valeria Lazzerini</option
                >
                <option v-if="result.person3.type === 'Islamic Expert'"
                  >Halima Erika Rubbo</option
                >
                <option v-if="result.person3.type === 'Islamic Expert'"
                  >Nabil Haman</option
                >
                 <option v-if="result.person3.type === 'Islamic Expert'"
                  >Mohammed Elshafey</option
                >
                <option v-if="result.person3.type === 'Technical Auditor'"
                  >Rim Souda</option
                >
                <option v-if="result.person3.type === 'Technical Auditor'"
                  >Marwa Grayaa</option
                >
                <option v-if="result.person3.type === 'Technical Expert'"
                  >Bechir Bakey</option
                >
                <option v-if="result.person3.type === 'Technical Expert'"
                  >Alberto Dal Molin</option
                >
                <option v-if="result.person3.type === 'Technical Expert'"
                  >Matheus Monaco</option
                >
                <option v-if="result.person3.type === 'Technical Auditor'"
                  >Hatice Gurses</option
                >
                <option v-if="result.person3.type === 'Technical Auditor'"
                  >Nabil Haman</option
                >
              </select>
            </div>
            <div class="column">
              <label>Funzione</label>
              <select v-model="result.person3.funzione">
                <option></option>
                <option>Audit team leader</option>
                <option>Auditor stage 1</option>
                <option>Auditor stage 2</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <label>Tipologia</label>
              <select v-model="result.person4.type">
                <option></option>
                <option>Islamic Expert</option>
                <option>Technical Expert</option>
                <option>Technical Auditor</option>
              </select>
            </div>
            <div class="column">
              <label>Nome</label>
              <select v-model="result.person4.name">
                <option></option>
                <option v-if="result.person4.type === 'Islamic Expert'"
                  >Mansur Giuseppe Baudo</option
                >
                <option v-if="result.person4.type === 'Islamic Expert'"
                  >Aisha Valeria Lazzerini</option
                >
                <option v-if="result.person4.type === 'Islamic Expert'"
                  >Halima Erika Rubbo</option
                >
                <option v-if="result.person4.type === 'Islamic Expert'"
                  >Nabil Haman</option
                >
                 <option v-if="result.person4.type === 'Islamic Expert'"
                  >Mohammed Elshafey</option
                >
                <option v-if="result.person4.type === 'Technical Auditor'"
                  >Rim Souda</option
                >
                <option v-if="result.person4.type === 'Technical Auditor'"
                  >Marwa Grayaa</option
                >
                <option v-if="result.person4.type === 'Technical Expert'"
                  >Bechir Bakey</option
                >
                <option v-if="result.person4.type === 'Technical Expert'"
                  >Alberto Dal Molin</option
                >
                <option v-if="result.person4.type === 'Technical Expert'"
                  >Matheus Monaco</option
                >
                <option v-if="result.person4.type === 'Technical Auditor'"
                  >Hatice Gurses</option
                >
                <option v-if="result.person4.type === 'Technical Auditor'"
                  >Nabil Haman</option
                >
              </select>
            </div>
            <div class="column">
              <label>Funzione</label>
              <select v-model="result.person4.funzione">
                <option></option>
                <option>Audit team leader</option>
                <option>Auditor stage 1</option>
                <option>Auditor stage 2</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <label>Tipologia</label>
              <select v-model="result.person5.type">
                <option></option>
                <option>Islamic Expert</option>
                <option>Technical Expert</option>
                <option>Technical Auditor</option>
              </select>
            </div>
            <div class="column">
              <label>Nome</label>
              <select v-model="result.person5.name">
                <option></option>
                <option v-if="result.person5.type === 'Islamic Expert'"
                  >Mansur Giuseppe Baudo</option
                >
                <option v-if="result.person5.type === 'Islamic Expert'"
                  >Aisha Valeria Lazzerini</option
                >
                <option v-if="result.person5.type === 'Islamic Expert'"
                  >Halima Erika Rubbo</option
                >
                <option v-if="result.person5.type === 'Islamic Expert'"
                  >Nabil Haman</option
                >
                 <option v-if="result.person5.type === 'Islamic Expert'"
                  >Mohammed Elshafey</option
                >
                <option v-if="result.person5.type === 'Technical Auditor'"
                  >Rim Souda</option
                >
                <option v-if="result.person5.type === 'Technical Auditor'"
                  >Marwa Grayaa</option
                >
                <option v-if="result.person5.type === 'Technical Expert'"
                  >Bechir Bakey</option
                >
                <option v-if="result.person5.type === 'Technical Expert'"
                  >Alberto Dal Molin</option
                >
                <option v-if="result.person5.type === 'Technical Expert'"
                  >Matheus Monaco</option
                >
                <option v-if="result.person5.type === 'Technical Auditor'"
                  >Hatice Gurses</option
                >
                <option v-if="result.person5.type === 'Technical Auditor'"
                  >Nabil Haman</option
                >
              </select>
            </div>
            <div class="column">
              <label>Funzione</label>
              <select v-model="result.person5.funzione">
                <option></option>
                <option>Audit team leader</option>
                <option>Auditor stage 1</option>
                <option>Auditor stage 2</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Cliente</legend>
          <div class="row">
            <div class="column">
              <label>Company</label>
              <input type="text" v-model="result.company" disabled />
            </div>

            <div class="column">
              <label>Legal Address</label>
              <input type="text" v-model="result.legalAddress" disabled />
            </div>

            <div class="column">
              <label>Company representative</label>
              <select v-model="result.representative">
                <option></option>
                <option v-for="r in db.representatives" :key="r">{{r}}</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <label>Address of plant A</label>
              <select v-model="result.addressPlantA">
                <option></option>
                <option v-for="i in db.addresses" :key="i">{{i}}</option>
              </select>
            </div>
            <div class="column">
              <label>Address of plant B</label>
              <select v-model="result.addressPlantB">
                <option></option>
                <option v-for="i in db.addresses" :key="i">{{i}}</option>
              </select>
            </div>
            <div class="column">
              <label>Address of plant C</label>
              <select v-model="result.addressPlantC">
                <option></option>
                <option v-for="i in db.addresses" :key="i">{{i}}</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <label>Address of plant D</label>
              <select v-model="result.addressPlantD">
                <option></option>
                <option v-for="i in db.addresses" :key="i">{{i}}</option>
              </select>
            </div>
            <div class="column">
              <label>Category</label>
              <input type="text" v-model="result.category" disabled />
            </div>
            <div class="column">
              <label>Company Code</label>
              <input type="text" v-model="result.code" disabled />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Audit</legend>
          <div class="row">
            <div class="column">
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
            </div>
            <div class="column">
              <label>Before</label>
              <input type="date" v-model="result.before" />
            </div>
            <div class="column">
              <label>Audit No.</label>
              <input type="text" v-model="result.number" />
            </div>
          </div>

          <div class="row">
            <div class="column">
              <label>Audit duration</label
              ><input v-model="result.duration" type="text" />
            </div>
            <div class="column">
              <label>Stage 1 Doc. Evaluation</label
              ><input v-model="result.stage1" type="text" />
            </div>
            <div class="column">
              <label>Stage 2 Audit</label
              ><input v-model="result.stage2" type="date" />
            </div>
          </div>
        </fieldset>

        <fieldset id="std" @click="addStd">
          <legend>Certification Standard</legend>
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

        <fieldset>
          <div class="row">
            <div class="column">
              <label>Certification Scheme</label
              ><input v-model="result.scheme" type="text" />
            </div>
            <div class="column">
              <label>Scope of certification</label
              ><input v-model="result.scope" type="text" />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
    `;
  document
    .querySelector("#appContainer")
    .insertAdjacentHTML("afterbegin", html);

  const app = {
    data() {
      return {
        db: db,
        result: {
          date: "",
          person1: {
            type: "",
            name: "",
            funzione: "",
            ente: "Halal Italia Srl"
          },
          person2: {
            type: "",
            name: "",
            funzione: "",
            ente: "Halal Italia Srl"
          },
          person3: {
            type: "",
            name: "",
            funzione: "",
            ente: "Halal Italia Srl"
          },
          person4: {
            type: "",
            name: "",
            funzione: "",
            ente: "Halal Italia Srl"
          },
          person5: {
            type: "",
            name: "",
            funzione: "",
            ente: "Halal Italia Srl"
          },
          company: "",
          legalAddress: "",
          representative: "",
          addressPlantA: "",
          addressPlantB: "",
          addressPlantC: "",
          addressPlantD: "",
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

        doc.standard.forEach((s) => {
          const i = document.querySelector('#std input[value="' + s + '"]');
          i.checked = true;
        });
      }
      setTimeout(() => {
        document.querySelector("body").classList.remove("hasChanges");
      }, 50);
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
    },
    watch: {
      result: {
        deep: true,
        handler: function (val) {
          console.log(val);
          document.querySelector("body").classList.add("hasChanges");
        }
      }
    }
  };

  const vm = Vue.createApp(app).mount("#app");

  return vm;
};
