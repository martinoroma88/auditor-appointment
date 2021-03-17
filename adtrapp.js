//const html = ``;
// document.querySelector("#app").insertAdjacentHTML("afterbegin", html);

const cliente = {
  nome: "Agugiaro & Figna Molini S.p.A."
};

const app = {
  data() {
    return {
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
        clienteNome: ""
      }
    };
  },
  mounted() {
    this.result.clienteNome = cliente.nome;
  }
};

const vm = Vue.createApp(app).mount("#app");

const getData = function () {
  return { ...vm.$data.result };
};
