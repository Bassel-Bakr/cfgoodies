module.exports = {
  props: ["theme"],
  template: `
    <div :class=theme>
      <div class="container">
        <div class="tabs is-boxed is-fullwidth">
          <ul>
            <li v-for="i in 5" :class="[{'is-active': ('tab_'+i) === activeTab}]">
              <a :id="'tab_'+i" @click="selectTab('tab_'+i)" href="#">Tab {{i}}</a>
            </li>
          </ul>
        </div>
      </div>

      <slot></slot>
    </div>
  `,
  data: () => {
    return {
      activeTab: "tab_1"
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
};