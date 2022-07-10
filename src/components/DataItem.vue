<template>
  <article class="data-item">
    <div class="data-item__header">
      <h1 class="data-item__user">Пользователь {{ item.userId }}</h1>
      <p class="data-item__counter">
        <span style="color: green">{{ item.trueCounter }}</span
        >/<span style="color: red">{{ item.falseCounter }}</span>
      </p>
    </div>
    <ul class="data-item__title-list">
      <li
        class="data-item__title"
        v-for="itemChild in item.items"
        :key="itemChild.id"
      >
        {{ itemChild.title }}
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "DataItem",
  mixins: [],
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
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
@import "~@/assets/breakpoints/breakpoints.scss";
.data-item {
  border: 2px solid rgba(171, 168, 168, 0.8);
  border-radius: 4px;
  padding: 16px 24px;
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  &__user {
    @media (max-width: $md) {
      font-size: 16px;
    }
  }
  &__counter {
    @media (max-width: $lg) {
      font-size: 14px;
    }
  }
  &__title-list {
    padding-left: 16px;
  }
  &__title {
    margin-bottom: 8px;
    font-size: 14px;
    @media (max-width: $md) {
      font-size: 12px;
    }
  }
}
</style>
