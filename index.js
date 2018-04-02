Vue.component("app-root", {
  template: `
    <div>
      <slot></slot>
    </div>
  `
});

Vue.component("app-header", {
  props: ["theme"],
  template: `
    <div :class=theme>
      <div class="head">
        <div class="container">
          <div class="title">
            <br>
            Codeforces Gallery
          </div>
          <div class="subtitle">
            Feast your eyes!
          </div>
        </div>
        <br>
      </div>
    </div>
  `
});

Vue.component("app-nav", {
  props: ["theme", "current"],
  template: `
    <div :class=theme>
      <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <a @click="gotoPage(parseInt(current)-1)" class="pagination-previous">Previous</a>
        <ul class="pagination-list">
          <li v-for="i in maxVisible" v-if="(parseInt(current)-(maxVisible - i + 1)*step) > 0"><a @click="gotoPage(parseInt(current)-(maxVisible - i + 1)*step)" class="pagination-link">{{ (parseInt(current)-(maxVisible - i + 1)*step) }}</a></li>
          
          <li><a class="pagination-link is-current" :aria-label="'Goto page ' + current">{{ current }}</a></li>
          
          <li v-for="i in maxVisible" v-if="(parseInt(current)+i*step) < 140"><a @click="gotoPage(parseInt(current)+i*step)" class="pagination-link">{{ (parseInt(current)+i*step) }}</a></li>
        </ul>
        <a @click="gotoPage(parseInt(current)+1)" class="pagination-next">Next page</a>
      </nav>
    </div>
  `,
  data: () => {
    return {
      activeTab: "tab_1",
      step: 10,
      maxVisible: 2,
      tabs: ["Codeforces Photo Gallery"]
    };
  },
  methods: {
    gotoPage: function (page) {
      window.location.href = `gallery?page=${page}`;
    }
  }
});

Vue.component("app-column", {
  props: ["title", "content", "empty"],
  template: `
    <div>
      <slot>{{ empty }}</slot>
    </div>
  `
});

Vue.component("app-card", {
  props: ["handle"],
  template: `
    <div class="card">
      <div class="card-content">
        <div class="content">
          <slot></slot>
        </div>
      </div>
      <header class="card-header" style="position: absolute; bottom: 0px;">
        <p style="max-width:100%; overflow:hidden" class="card-header-title has-text-centered">
          {{ handle }}
        </p>
      </header>
    </div>
    `
});

Vue.component("app-codeforces-user", {
  props: ["handle", "src"],
  template: `
    <app-card style="display: flex; justify-content: center;" :handle="handle">
        <!-- <figure class="image"> -->
          <img :src="src" :alt="handle">
        <!-- </figure> -->
    </app-card>
    `
});

Vue.component("app-main", {
  template: `
    <div>
      <div class="content section">
        <slot></slot>
      </div>
    </div>
  `
});

Vue.component("app-footer", {
  props: ["theme"],
  template: `
    <div :class=theme>
      <div class="container section content has-text-centered">
        Made with <i style="color: red" class="fas fa-heart"></i> by <strong>Bassel Bakr</strong>
        <slot></slot>
      </div>
    </div>
  `
});

const app = new Vue({
  el: "#vue-app",
  data() {
    return {
      theme: "hero is-primary"
    };
  }
});