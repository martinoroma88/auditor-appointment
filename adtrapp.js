//const html = ``;
// document.querySelector("#app").insertAdjacentHTML("afterbegin", html);

const app = {
  data() {
    return {
      islamicExpertNome: "",
      islamicExpertFunzione: "",
      islamicExpertEnte: "Halal Italia Srl",
      technicalExpertNome: "",
      technicalExpertFunzione: "",
      technicalExpertEnte: "Halal Italia Srl",
      technicalAuditorNome: "",
      technicalAuditorFunzione: "",
      technicalAuditorEnte: "Halal Italia Srl"
    };
  }
};

const vm = Vue.createApp(app).mount("#app");

const getData = function () {
  return { ...vm.$data };
};
