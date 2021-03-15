const app = {
  data() {
    return {
      value1: "",
      value2: ""
    };
  }
};

const vm = Vue.createApp(app).mount("#app");

const retrieveData = function () {
  return { ...vm.$data };
};
