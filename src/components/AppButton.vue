<template>
  <button class="button" v-on="$listeners" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
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
.button {
  background-color: #235ad1;
  padding: 8px 24px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  color: #ffffff;
  transition: 0.2s all ease;
  &:hover {
    background-color: #1d49aa;
  }
}
</style>
