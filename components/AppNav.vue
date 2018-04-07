<template>
  <div :class=theme>
    <nav class="pagination" role="navigation" aria-label="pagination">
      <a v-if="parseInt(current) != 1" @click="gotoPage(1)" class="pagination-previous">First</a>
      <a v-if="0 < parseInt(current)-10" @click="gotoPage(parseInt(current)-10)" class="pagination-previous">&lt;&lt; Skip 10</a>
      <a v-if="0 < parseInt(current)-1" @click="gotoPage(parseInt(current)-1)" class="pagination-previous">Previous</a>
      <ul class="pagination-list">          
        <li>
          <a class="pagination-link is-current" :aria-label="'Goto page ' + current">{{ current }}</a>
        </li>
      </ul>
      <a v-if="parseInt(current)+1 <= pages" @click="gotoPage(parseInt(current)+1)" class="pagination-next">Next</a>
      <a v-if="parseInt(current)+10 <= pages" @click="gotoPage(parseInt(current)+10)" class="pagination-next">Skip 10 &gt;&gt;</a>
      <a v-if="parseInt(current) != pages" @click="gotoPage(pages)" class="pagination-next">Last</a>
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
      window.location.href = `gallery?page=${page}`;
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
