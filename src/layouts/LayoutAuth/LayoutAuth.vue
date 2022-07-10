<template>
  <section class="auth">
    <form class="auth__form form" @submit.prevent="auth">
      <h2 class="form__title">Авторизация</h2>
      <p class="form__error">{{ errorText }}</p>
      <input
        class="form__input"
        type="text"
        placeholder="Введите логин"
        v-model="login"
      />
      <input
        class="form__input"
        type="password"
        placeholder="Введите пароль"
        v-model="password"
      />
      <AppButton type="submit">Войти</AppButton>
    </form>
  </section>
</template>

<script>
import AppButton from "@/components/AppButton";
import { mapActions } from "vuex";
export default {
  name: "LayoutAuth",
  mixins: [],
  props: {},
  components: { AppButton },
  data() {
    return {
      login: "",
      password: "",
      errorText: "",
    };
  },
  mounted() {},
  methods: {
    ...mapActions("AuthModule", ["onLogin"]),
    auth() {
      if (!this.validateFields()) return;
      this.onLogin({ login: this.login, password: this.password });
      this.$router.push({ name: "ContentView" });
    },
    validateFields() {
      if (!this.login.length) {
        this.errorText = "Введите логин!";
        return false;
      }
      if (!this.password.length) {
        this.errorText = "Введите пароль!";
        return false;
      }
      return true;
    },
  },
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
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
    max-width: 350px;
    width: 100%;
    height: 350px;
    box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
    border-radius: 4px;
    &__title {
      margin-bottom: 16px;
    }
    &__error {
      color: #f15555;
      font-size: 12px;
      margin-bottom: 8px;
      font-weight: 600;
    }
    &__input {
      margin-bottom: 16px;
      display: block;
      width: 100%;
      height: calc(2.25rem + 2px);
      padding: 8px 16px;
      font-family: inherit;
      font-size: 14px;
      font-weight: 400;
      color: #212529;
      background-color: #fff;
      border: 1px solid #bdbdbd;
      border-radius: 4px;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }
  }
}
</style>
