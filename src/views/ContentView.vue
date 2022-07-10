<template>
  <section class="content">
    <div class="content__container">
      <AppButton @click="loadData">Загрузить данные</AppButton>
      <div class="content__data">
        <DataItem
          v-for="item in groupedAndSortedData"
          :key="item.userId"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from "@/components/AppButton";
import { mapActions, mapState } from "vuex";
import DataItem from "@/components/DataItem";
export default {
  name: "ContentView",
  mixins: [],
  props: {},
  components: { DataItem, AppButton },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    ...mapActions(["showPreloaderAction", "hidePreloaderAction"]),
    ...mapActions("ContentModule", ["getDataAction"]),
    async loadData() {
      this.showPreloaderAction();
      await this.getDataAction();
      this.hidePreloaderAction();
    },
  },
  computed: {
    ...mapState("ContentModule", ["dataList"]),
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
@import "~@/assets/breakpoints/breakpoints.scss";
.content {
  width: 100%;
  height: 100%;
  &__container {
    margin: 0 auto;
    padding: 32px;
    max-width: 1200px;
    width: 100%;
  }
  &__data {
    padding: 16px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    @media (max-width: $lg) {
      gap: 16px;
    }
    @media (max-width: $sm) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
