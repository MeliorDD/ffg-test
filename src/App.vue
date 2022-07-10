<template>
  <div id="app">
    <transition name="fade">
      <Preloader v-if="isShowPreloader" />
    </transition>
    <router-view />
  </div>
</template>

<script>
import Preloader from "@/components/Preloader";
import { mapState } from "vuex";
export default {
  components: { Preloader },
  computed: {
    ...mapState(["isShowPreloader"]),
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
</style>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
