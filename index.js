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
            Azhar OJ
          </div>
          <div class="subtitle">
            Best online judge
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
              <a :id="'tab_'+i" @click="selectTab('tab_'+i)" href="#">{{tabs[i]}}</a>
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
      tabs: ["Home", "Contest", "Problemset", "Contact", "Help", "About"]
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
  props: ["title"],
  template: `
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ title }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>
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