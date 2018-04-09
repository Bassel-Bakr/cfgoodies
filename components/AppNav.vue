<template>
  <div :class=theme>
    <nav class="pagination" role="navigation" aria-label="pagination">
      <ul class="pagination">
        <li><a @click="gotoPage(1)" class="previous">First</a></li>
        <li><a v-if="0 < parseInt(current)-10" @click="gotoPage(parseInt(current)-10)">&lt;&lt; Skip 10</a></li>
        <li><a v-if="0 < parseInt(current)-1" @click="gotoPage(parseInt(current)-1)">Previous</a></li>
        <li class="active"><a :aria-label="'Goto page ' + current">{{ current }}</a></li>
        <li><a v-if="parseInt(current)+1 <= pages" @click="gotoPage(parseInt(current)+1)">Next</a></li>
        <li><a v-if="parseInt(current)+10 <= pages" @click="gotoPage(parseInt(current)+10)">Skip 10 &gt;&gt;</a></li>
        <li><a @click="gotoPage(pages)" class="next">Last</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "app-nav",
  props: ["theme", "current", "pages"],
  data() {
    return {
      activeTab: "tab_1",
      step: 10,
      maxVisible: 2,
      tabs: ["Codeforces Photo Gallery"]
    };
  },
  methods: {
    gotoPage: function(page) {
      this.$emit("switchPage", page);
    },
    getTabbedPages: function() {
      let a = [1];
      for (let i = 10; i <= this.pages; i += 10) a.push(i);
      if (1 < this.pages && this.pages % 10) a.push(this.pages);
      return a;
    }
  }
}
</script>

<style>

</style>
