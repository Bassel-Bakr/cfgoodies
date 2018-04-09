<template>
  <div @click="goUp">
    <i class="fa fa-angle-up arrow"></i>
  </div>
</template>

<script>
export default {
  name: "app-back-up",
  props: ["scroll"],
  data() {
    return {
      shouldDisplayUpButton: false
    };
  },
  mounted() {
    const element = this.$el;
    $(window).ready(function() {
      $(this).scroll(function () {        
        let top = $(this).scrollTop();
        if(top > 0)
          $(element).addClass("shown");
        else
          $(element).removeClass("shown");
      });
    });
  },
  methods: {
    goUp() {
      $("html").animate({ scrollTop: 0 }, "slow");
    }
  }
};
</script>

<style scoped>
div {
  display: none;
  position: fixed;

  right: 0%;
  bottom: 10%;

  width: 50px;
  height: 50px;

  border: 1px solid black;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 0 5px black;
}

.arrow {
  width: 100%;
  height: 90%;
  padding: 15%;
}

.shown {
  display: block;
}
</style>
