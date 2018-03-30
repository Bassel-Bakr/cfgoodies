Vue.component("vue-text", {
  template: `
    <div>
      <nav>
        <ul>
          <li v-for="name in names" v-if="name & 1">{{name}}</li>
        </ul>
      </nav>
    </div>
  `,
  data: () => {
    return {
      names: [1, 2, 3, 4, 5]
    };
  }
});

const vueApp = new Vue({ el: '#vue-app' });