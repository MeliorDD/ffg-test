<template>
  <section class="auth">
    <form class="auth__form">
      <h2>Авторизация</h2>
      <input type="text" />
      <input type="text" />
      <button type="submit">Войти</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "LayoutAuth",
  mixins: [],
  props: {},
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
  validations: {},
};
</script>

<style scoped lang="scss">
.auth {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    width: 100%;
    height: 400px;
  }
}
</style>
