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
  props: ["theme"],
  template: `
    <div :class=theme>
      <div class="container">
        <div class="tabs is-boxed is-fullwidth">
          <ul>
            <li v-for="i in tabs.length" :class="[{'is-active': ('tab_'+i) === activeTab}]">
              <a :id="'tab_'+i" @click="selectTab('tab_'+i)" href="#">{{tabs[i-1]}}</a>
            </li>
          </ul>
        </div>
      </div>

      <slot></slot>
    </div>
  `,
  data: () => {
    return {
      activeTab: "tab_1",
      tabs: ["Codeforces Photo Gallery"/* "Home", "Contest", "Problemset", "Contact", "Help", "About" */]
    };
  },
  methods: {
    selectTab: function (id) {
      let old_list = document.getElementById(this.activeTab).parentElement.classList;
      let new_list = document.getElementById(id).parentElement.classList;
      if (this.activeTab !== id) {
        new_list.add("is-active");
        old_list.remove("is-active");
        this.activeTab = id;
      }
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
        <p class="card-header-title has-text-centered">
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
        <img :src="src" :alt="handle">
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
        Made with <i class="fas fa-heart"></i> by <strong>Bassel Bakr</strong>
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