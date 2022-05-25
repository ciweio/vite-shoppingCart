<template>
  <div class="counter-container">
    <button type="button" class="btn btn-light" @click="count_reduce">-</button>
    <input type="number" class="form-control" v-model.number.lazy="sum">
    <button type="button" class="btn btn-light" @click="count_plus">+</button>
  </div>
</template>

<script>
export default {
  name: "EsCounter",
  props: ['count'],
  data() {
    return {
      sum: this.count
    }
  },
  emits: ['countChange'],
  methods: {
    count_reduce() {
      if (this.sum > 1) {
        this.sum -= 1;
      } else {
        alert("Not expected to be negative!");
      }
    },
    count_plus() {
      if (this.sum < 6) {
        this.sum += 1;
      } else {
        alert("Out of range!");
      }
    }
  },
  watch: {
    sum(newVal) {
      const parseRet = parseInt(newVal);
      console.log(parseRet);
      console.log(this.sum);
      if (parseRet < 1) {
        this.sum = 1;
      } else if (parseRet > 6) {
        this.sum = 6;
      } else if (String(newVal).indexOf('.') !== -1) {
        this.sum = parseRet;
      }
      this.$emit('countChange', this.sum);
    }
  }
}
</script>

<style lang="less" scoped>
.counter-container {
  display: flex;

  .btn {
    width: 25px;
  }

  .form-control {
    width: 34px;
    text-align: center;
    margin: 0 4px;
  }
}
</style>