<template>
  <section class="content">
    <div class="content__container">
      <app-button @click="loadData">Загрузить данные</app-button>
      <div class="content__data"></div>
    </div>
  </section>
</template>

<script>
import AppButton from "@/components/AppButton";
import { mapActions, mapState } from "vuex";
export default {
  name: "ContentView",
  mixins: [],
  props: {},
  components: { AppButton },
  data() {
    return {
      isLoading: false,
    };
  },
  mounted() {},
  methods: {
    ...mapActions("MainModule", ["getDataAction"]),
    async loadData() {
      this.isLoading = true;
      await this.getDataAction();
      this.isLoading = false;
    },
  },
  computed: {
    ...mapState("MainModule", ["dataList"]),
    groupedAndSortedData() {
      return this.dataList
        .reduce((acc, cv) => {
          const temp = acc.find((item) => item.userId === cv.userId);
          if (temp) {
            temp.items.push(cv);
            cv.completed ? temp.trueCounter++ : temp.falseCounter++;
          } else {
            acc.push({
              userId: cv.userId,
              trueCounter: 0,
              falseCounter: 0,
              items: [],
            });
          }
          return acc;
        }, [])
        .sort((a, b) => {
          return b.trueCounter - a.trueCounter;
        });
    },
  },
  watch: {},
  validations: {},
};
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
  &__container {
    margin: 0 auto;
    padding: 32px;
    max-width: 1440px;
    height: 100%;
    width: 100%;
  }
}
</style>
