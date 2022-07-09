<template>
  <main>
    <router-view />
  </main>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LayoutMain",
  mixins: [],
  props: {},
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.getTodoListAction();
  },
  methods: {
    ...mapActions(["getTodoListAction"]),
  },
  computed: {},
  watch: {},
  validations: {},
};
</script>

<style scoped lang="scss">
main {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
