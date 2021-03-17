//const html = ``;
// document.querySelector("#app").insertAdjacentHTML("afterbegin", html);

const db = {
  company: "Agugiaro & Figna Molini S.p.A.",
  legalAddress: "Strada dei Notari, 25/27 Collecchio di Parma",
  representatives: ["Stefano Mattioli", "Elena Pezzolato"],
  addresses: ["Strada dei Notari, 25/27 Collecchio di Parma", "Via Monte Nero, 111 Curtarolo di Padova"],
  category: "E",
  code: "AGU",
};

const app = {
  data() {
    return {
      db: db,
      result: {
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
        scope: "",
      }
    };
  },
  mounted() {
    this.result.company = this.db.company;
    this.result.legalAddress = this.db.legalAddress;
    this.result.category = this.db.category;
    this.result.code = this.db.code;
  },
  methods: {
    addStd() {
      console.log("running")
      let myArr = [];
      const inputs = document.querySelectorAll("#std input:checked");
      inputs.forEach(i => {
        myArr.push(i.value)
      });
      this.result.standard = myArr; 
    }
  }
};

const vm = Vue.createApp(app).mount("#app");

const getData = function () {
  return { ...vm.$data.result };
};
